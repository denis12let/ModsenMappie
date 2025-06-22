export interface Mark {
  name: string;
  path: string;
  ru: string;
  type: string;
}

export interface PlaceResult {
  name: string;
  address: string;
  coordinates: [number, number];
  type: string;
  subtype: string;
  icons: Mark[];
}
