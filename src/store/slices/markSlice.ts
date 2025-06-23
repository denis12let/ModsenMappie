import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceResult } from 'src/types';
import { searchPlaces, toggleFavorite } from '@store/actions';

interface PlacesState {
  items: PlaceResult[];
  favorites: string[];
  isLoading: boolean;
  error: string | null;
  searchParams: {
    center: [number, number] | null;
    radius: number;
  };
}

const initialState: PlacesState = {
  items: [],
  favorites: JSON.parse(localStorage.getItem('favorites') || '[]'),
  isLoading: false,
  error: null,
  searchParams: {
    center: null,
    radius: 5,
  },
};

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    setSearchCenter(state, action: PayloadAction<[number, number]>) {
      state.searchParams.center = action.payload;
    },
    setSearchRadius(state, action: PayloadAction<number>) {
      state.searchParams.radius = action.payload;
    },
    clearResults(state) {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPlaces.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(searchPlaces.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Unknown error';
      })
      .addCase(toggleFavorite.fulfilled, (state, action) => {
        const index = state.favorites.indexOf(action.payload);
        if (index >= 0) {
          state.favorites.splice(index, 1);
        } else {
          state.favorites.push(action.payload);
        }
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
      });
  },
});

export const { actions: placesActions, reducer: placesReducer } = placesSlice;
export const selectPlaces = (state: { places: PlacesState }) => state.places;
