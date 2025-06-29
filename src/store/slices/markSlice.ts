import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PlaceResult } from 'src/types';
import { searchPlaces } from '@store/actions';

interface PlacesState {
  place: PlaceResult | null;
  items: PlaceResult[];
  favorites: PlaceResult[];
  isLoading: boolean;
  error: string | null;
  searchParams: {
    center: [number, number] | null;
    radius: number;
  };
}

const initialState: PlacesState = {
  place: null,
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
    setPlace(state, action: PayloadAction<PlaceResult>) {
      console.log(999);
      state.place = action.payload;
    },
    clearPlace(state) {
      state.place = null;
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const placeId = action.payload;
      const isInclude = state.favorites.some((item) => item.id === placeId);

      if (isInclude) {
        state.favorites = state.favorites.filter((item) => item.id !== placeId);
      } else {
        const favoritePlace = state.items.find((item) => item.id === placeId);

        if (favoritePlace) {
          state.favorites.push(favoritePlace);
        }
      }
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
      });
  },
});

export const { actions: placesActions, reducer: placesReducer } = placesSlice;
export const selectPlaces = (state: { places: PlacesState }) => state.places;
