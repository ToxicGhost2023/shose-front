
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import productReducer from './slice/productsReducer'
import userReducer from './slice/userReducer'

export const store = configureStore({
    reducer: {
        products: productReducer,
        users: userReducer,
        counter: counterReducer,
    },
})
