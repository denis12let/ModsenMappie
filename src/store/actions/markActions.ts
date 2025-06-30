import { createAsyncThunk } from '@reduxjs/toolkit';

import { PlaceService } from '@api';
import { PlaceResult, Mark } from 'src/types';

interface SearchParams {
  center: [number, number];
  radiusKm: number;
  icons: Mark[];
  search?: string;
}

export const searchPlaces = createAsyncThunk<PlaceResult[], SearchParams, { rejectValue: string }>(
  'places/search',
  async (params, { rejectWithValue }) => {
    try {
      return await PlaceService.searchPlaces(params.center, params.radiusKm, params.icons, params.search);
    } catch (error) {
      return rejectWithValue('Failed to fetch');
    }
  }
);

export const toggleFavorite = createAsyncThunk<string, string, { rejectValue: string }>(
  'places/toggleFavorite',
  async (placeId, { rejectWithValue }) => {
    try {
      return placeId;
    } catch (error) {
      return rejectWithValue('Failed to toggle favorite');
    }
  }
);
