import { Action, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
 // Suponiendo que tengas definido AppThunk en tu aplicación
import axios from 'axios';
import { setIsLoading } from './isLoading.slice';
import { RootState } from '../ReturnType';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
interface ConocimientoItem {
    id: number;
    // Otros campos...
}

type ConocimientoState = ConocimientoItem[];

const initialState: ConocimientoState = [];

export const conocimientoSlice = createSlice({
    name: 'conocimiento',
    initialState,
    reducers: {
        setConocimiento: (state, action: PayloadAction<ConocimientoState>) => {
            return action.payload;
        }
    }
});

export const getConocimiento = (): AppThunk => async (dispatch) => {
    dispatch(setIsLoading(true));

    try {
        const response = await axios.get<ConocimientoItem[]>('http://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacionProyect');
        dispatch(setConocimiento(response.data));
    } catch (error) {
        // Manejar errores aquí
    } finally {
        dispatch(setIsLoading(false));
    }
}

export const { setConocimiento } = conocimientoSlice.actions;

export default conocimientoSlice.reducer;