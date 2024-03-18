import { configureStore } from '@reduxjs/toolkit'
import conocimiento from './slice/conocimiento';
import isLoading from './slice/isLoading';

// ...

const store = configureStore({
  reducer: {
    conocimiento:conocimiento,
    isLoading:isLoading,
  }
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export default store;