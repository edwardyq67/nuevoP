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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export default store;