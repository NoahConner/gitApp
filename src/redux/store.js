import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../redux/slicers/userSlicer'
import { setupListeners } from '@reduxjs/toolkit/query'
import { userApi } from '../services/user'

export const store = configureStore({
  reducer: {
    user:userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
})

setupListeners(store.dispatch)