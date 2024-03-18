import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setIsLoading } from './isLoading';

// Define a type for the slice state
export interface CounterState {
    data: any[],
    loading: boolean,
    error: string | null
}

// Define the initial state using that type
const initialState: CounterState = {
    data:[],
    loading:false,
    error:""
};

// Define an asynchronous thunk action
export const getConocimiento = createAsyncThunk('getConocimiento', async (_, { dispatch }) => {
  try {
    dispatch(setIsLoading(false)); // Establecer isLoading en true antes de la solicitud
    const response = await axios.get("https://soloportafolio-dev-bqsp.3.us-1.fl0.io/informacionProyect");
    dispatch(setIsLoading(true)); // Establecer isLoading en false después de la solicitud exitosa
    return response.data; // Retornar los datos recibidos
  } catch (error) {
    dispatch(setIsLoading(false)); // Establecer isLoading en false en caso de error
    throw error; // Lanzar error en caso de fallo
  }
});

export const conocimientoSlice = createSlice({
  name: 'conocimiento',
  // `createSlice` infiere el tipo del estado a partir del argumento `initialState`
  initialState,
  reducers: {
    extraReducer() {
      
    }
  },
  extraReducers: (builder) => {
    // Aquí puedes agregar reductores adicionales para manejar acciones creadas por `createAsyncThunk`
    builder.addCase(getConocimiento.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.data = action.payload; 
    });
    
    builder.addCase(getConocimiento.rejected, (state, action:PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
        state.data = []; // Reiniciar data
    });
    builder.addCase(getConocimiento.pending, (state) => {
      state.loading=true
    });
  }
});

// Exporta los reductores y acciones
export const { extraReducer } = conocimientoSlice.actions;

// Exporta el reductor
export default conocimientoSlice.reducer;
