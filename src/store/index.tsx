import { configureStore } from '@reduxjs/toolkit';
import isLoadingReducer from './slice/isLoading.slice';
import conocimientoSlice from './slice/proyecto.slice';

export default configureStore({
    reducer: {
      isLoading: isLoadingReducer,
      conocimientoSlice: conocimientoSlice
    }
});