import L from 'leaflet';

interface PlaceResult {
  name: string;
  address: string;
  coordinates: [number, number];
  type: string;
}

export const searchWithLeaflet = async (
  center: [number, number],
  radiusKm: number,
  amenityTypes: string[] = ['cafe', 'restaurant', 'shop']
): Promise<PlaceResult[]> => {
  try {
    const radiusMeters = radiusKm * 1000;
    const query = `
      [out:json];
      (
        node["amenity"~"${amenityTypes.join('|')}"]
          (around:${radiusMeters},${center[0]},${center[1]});
      );
      out body;
      >;
      out skel qt;
    `;

    const response = await fetch(`https://overpass-api.de/api/interpreter?data=${encodeURIComponent(query)}`);

    const data = await response.json();

    return data.elements.map((element: any) => ({
      name: element.tags?.name || 'Без названия',
      address: [element.tags?.['addr:street'], element.tags?.['addr:housenumber']].filter(Boolean).join(', '),
      coordinates: [element.lat, element.lon],
      type: element.tags?.amenity || 'unknown',
    }));
  } catch (error) {
    console.error('Leaflet search error:', error);
    return [];
  }
};
