import { PlaceResult, Mark } from 'src/types';
import { apiService } from './service';

export class PlaceService {
  static async searchPlaces(center: [number, number], radiusKm: number, icons: Mark[], search?: string): Promise<PlaceResult[]> {
    const radiusMeters = radiusKm * 1000;
    let query: string;
    if (search) {
      const escapedSearch = search.replace(/[\\"']/g, '\\$&');

      query = `
        [out:json];
        (
          node["name"~"${escapedSearch}",i](around:${radiusMeters},${center[0]},${center[1]});
          way["name"~"${escapedSearch}",i](around:${radiusMeters},${center[0]},${center[1]});
          relation["name"~"${escapedSearch}",i](around:${radiusMeters},${center[0]},${center[1]});
           node["${search.replace(/"/g, '\\"')}"~"."](around:${radiusMeters},${center[0]},${center[1]});
        );
        out body;
        >;
        out skel qt;
      `;
    } else {
      query = `
        [out:json];
        (
          ${icons.map((icon) => `node["${icon.type}"~"${icon.name}"](around:${radiusMeters},${center[0]},${center[1]});`).join('\n')}
        );
        out body;
        >;
        out skel qt;
      `;
    }

    const response = await apiService.post('', `data=${encodeURIComponent(query)}`);

    return response.data.elements.map((element: any) => {
      const tags = element.tags || {};

      const type =
        Object.keys(tags).find((key) => ['amenity', 'tourism', 'shop', 'historic', 'leisure', 'sport', 'building'].includes(key)) ||
        'unknown';
      const subtype = tags[type] || 'unknown';

      return {
        id: element.id,
        name: tags.name || 'Без названия',
        address: [tags['addr:street'], tags['addr:housenumber']].filter(Boolean).join(', '),
        coordinates: [element.lat, element.lon],
        type: type,
        subtype: subtype,
        ...(tags.wikipedia && { wikipedia: tags.wikipedia }),
      };
    });
  }
}
