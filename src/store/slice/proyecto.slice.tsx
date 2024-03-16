import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';
import { setIsLoading } from './isLoading.slice';

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

export const getConocimiento = ()  => async (dispatch) => {
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