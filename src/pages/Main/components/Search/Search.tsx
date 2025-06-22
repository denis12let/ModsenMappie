import { FC, ReactNode, useState } from 'react';
import { Input, Text } from '@ui';
import { InputRadius, InputWrapper, SearchBox } from './Search.style';
import { SearchList } from './components';
import { useMapContext } from '@context/MapContext';
import { searchWithLeaflet } from '@api/leaflet';
import { Mark } from 'src/types';

interface SearchProps {
  children: ReactNode;
}

const Search: FC<SearchProps> = ({ children }) => {
  const [radius, setRadius] = useState('5');
  const [foundPlaces, setFoundPlaces] = useState<any[]>([]);
  const { mapRef, userPlacemarkRef } = useMapContext();
  const [icons, setIcons] = useState<Mark[]>([]);

  const handleRadiusChange = async (value: string) => {
    const newRadius = Number(value);
    setRadius(value);

    const userCoords = userPlacemarkRef.current?.geometry?.getCoordinates() as [number, number];

    mapRef.current?.radius?.geometry?.setCoordinates(userCoords);
    mapRef.current?.radius?.geometry?.setRadius(newRadius * 1000);
    for (let icon of icons) {
      if (userCoords) {
        const places = await searchWithLeaflet(userCoords, newRadius, ['']);
        setFoundPlaces(places);

        places.forEach((place) => {
          const placemark = new window.ymaps.Placemark(
            place.coordinates,
            {},
            {
              iconLayout: 'default#image',
              iconImageHref: 'src/assets/icons/coffee.svg',
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -20],
            }
          );

          mapRef?.current?.geoObjects.add(placemark);
        });
      }
    }
  };

  const toggleIcon = (item: Mark) => {
    setIcons((prev) => (prev.some((icon) => item.name === icon.name) ? prev.filter((icon) => icon.name !== item.name) : [...prev, item]));
  };
  console.log(icons);
  console.log(foundPlaces);
  return (
    <>
      <Text variation="topic">Искать:</Text>
      <SearchBox>
        <SearchList toggleIcon={toggleIcon} activeIcons={icons} />
      </SearchBox>
      <Text variation="topic">В радиусе</Text>
      <InputWrapper>
        <InputRadius>
          <Input text={radius} setText={handleRadiusChange} type="number" />
        </InputRadius>
        <Text variation="title">км</Text>
      </InputWrapper>
    </>
  );
};

export default Search;
