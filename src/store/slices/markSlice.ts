import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { searchPlaces } from '@store';
import { IRoute, PlaceResult } from 'src/types';

interface PlacesState {
  place: PlaceResult | null;
  route: IRoute | null;
  routes: IRoute[];
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
  route: null,
  routes: [],
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
      state.place = action.payload;
    },
    clearPlace(state) {
      state.place = null;
    },
    setRoute(state, action: PayloadAction<IRoute>) {
      state.route = action.payload;
    },
    clearRoute(state) {
      state.route = null;
    },
    toggleFavorite(state, action: PayloadAction<number>) {
      const placeId = action.payload;
      const isInclude = state.favorites.some((item) => item.id === placeId);
      if (isInclude) {
        state.favorites = state.favorites.filter((item) => item.id !== placeId);
      } else {
        const favoritePlace = state.items.filter((item) => item.id === placeId);
        if (favoritePlace.length) {
          state.favorites.push(...favoritePlace);
        } else if (state.place?.id === placeId) {
          state.favorites.push(state.place);
        }
      }
    },
    toggleRoute(state, action: PayloadAction<string>) {
      const routeId = action.payload;
      const isInclude = state.routes.some((item) => item.id === routeId);

      if (isInclude) {
        state.routes = state.routes.filter((item) => item.id !== routeId);
      } else {
        if (state.route) {
          state.routes.push(state.route);
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
  selectors: {
    getFavorites: (state: PlacesState) => state.favorites,
  },
});

export const { actions: placesActions, selectors: placeSelectors, reducer: placesReducer } = placesSlice;
export const selectPlaces = (state: { places: PlacesState }) => state.places;
