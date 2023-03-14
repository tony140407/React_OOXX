import { configureStore } from '@reduxjs/toolkit'
import mode2 from './mode2'

export const store = configureStore({
    reducer: {
        mode2: mode2,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
