import { Action, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../ReturnType';
import { setIsLoading } from './isLoading.slice';

interface ConocimientoItem {
    id: number;
    // Otros campos...
}

type ConocimientoState = ConocimientoItem[];

const initialState: ConocimientoState = [];

export const getConocimiento = createAsyncThunk(
  'conocimiento/getConocimiento',
  async (_, { dispatch }) => {
    try {
      dispatch(setIsLoading(true));
      const response = await axios.get<ConocimientoItem[]>('http://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacionProyect');
      return response.data;
    } catch (error) {
      // Manejar errores aquí, por ejemplo, lanzar una excepción o devolver un valor predeterminado
      console.error('Error al obtener el conocimiento:', error);
      throw error;
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);

export const conocimientoSlice = createSlice({
  name: 'conocimiento',
  initialState,
  reducers: {
    setConocimiento: (state, action: PayloadAction<ConocimientoState>) => {
      state.splice(0, state.length, ...action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getConocimiento.fulfilled, (state, action) => {
      state.splice(0, state.length, ...action.payload);
    });
  }
});

export const { setConocimiento } = conocimientoSlice.actions;

export default conocimientoSlice.reducer;
