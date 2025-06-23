import { createSlice } from '@reduxjs/toolkit';
import { PlaceData } from 'src/types';

interface PlaceState {
  places: PlaceData[];
  place: PlaceData | null;
  isLoading: boolean;
  error: string | null;
  favorites: PlaceData[];
}

const initialState: PlaceState = {
  places: [],
  place: null,
  isLoading: false,
  error: null,
  favorites: [],
};

const marksSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
