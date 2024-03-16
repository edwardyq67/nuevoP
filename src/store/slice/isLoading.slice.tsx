import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const isLoadingSlice = createSlice({
    name: 'isLoading',
    initialState: false,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state = action.payload
            return state; 
        }
    }
});

export const { setIsLoading } = isLoadingSlice.actions;

export default isLoadingSlice.reducer;

