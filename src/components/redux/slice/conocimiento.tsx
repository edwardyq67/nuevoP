import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

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


export const getConocimiento = createAsyncThunk('getConocimiento', async (_, { dispatch }) => {
  try {
      dispatch(setIsLoading(false)); 
      // Simula un retraso de 0.5 segundos
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Importa el archivo JSON
      const response = await import("../../../../json.json");
      dispatch(setIsLoading(true)); 
      return response;
  } catch (error) {
      dispatch(setIsLoading(false));
      throw error; 
  }
});

export const conocimientoSlice = createSlice({
  name: 'conocimiento',
 
  initialState,
  reducers: {
    extraReducer() {
      
    }
  },
  extraReducers: (builder) => {
    
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
