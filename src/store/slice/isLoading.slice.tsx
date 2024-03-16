import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            return action.payload; // Actualiza el estado con el valor del payload
        }
    }
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
