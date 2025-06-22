import { Mark, PlaceResult } from 'src/types';

export const searchWithLeaflet = async (center: [number, number], radiusKm: number, icons: Mark[]): Promise<PlaceResult[]> => {
  if (icons.length === 0) return [];

  try {
    const radiusMeters = radiusKm * 1000;

    const queryParts = icons.map((icon) => `node["${icon.type}"~"${icon.name}"](around:${radiusMeters},${center[0]},${center[1]});`);

    const query = `
      [out:json];
      (
        ${queryParts.join('\n')}
      );
      out body;
      >;
      out skel qt;
    `;

    const response = await fetch(`https://overpass-api.de/api/interpreter`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `data=${encodeURIComponent(query)}`,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.elements.map((element: any) => {
      const tags = element.tags || {};
      const type =
        Object.keys(tags).find((key) =>
          ['amenity', 'tourism', 'shop', 'historic', 'leisure', 'sport', 'building', 'bicycle'].includes(key)
        ) || 'unknown';

      return {
        name: tags.name || 'Без названия',
        address: [tags['addr:street'], tags['addr:housenumber']].filter(Boolean).join(', '),
        coordinates: [element.lat, element.lon],
        type: type,
        subtype: tags[type] || 'unknown',
        icons: icons.filter((icon) => icon.type === type || icon.name === tags[type]),
      };
    });
  } catch (error) {
    console.error('Leaflet search error:', error);
    return [];
  }
};
