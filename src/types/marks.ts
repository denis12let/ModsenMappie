export interface Mark {
  name: string;
  path: string;
  ru: string;
  type: string;
}

export interface PlaceResult {
  id: number;
  name: string;
  address: string;
  coordinates: [number, number];
  type: string;
  subtype: string;
  icons: Mark[];
}

export interface PlaceData {
  address: string;
  coordinates: [number, number];
  details?: any;
}
