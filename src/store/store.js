
import { configureStore } from '@reduxjs/toolkit'

import productReducer from './slice/productsReducer'
import userReducer from './slice/userReducer'
import commentsSlice from './slice/commentsSlice'
import cartSlice from './slice/cartSlice'
import orderSlice from './slice/orderSlice'
import barChartSlice from './slice/barChartSlice'
export const store = configureStore({
    reducer: {
        products: productReducer,
        users: userReducer,
        comments: commentsSlice,
        cart: cartSlice,
        order: orderSlice,
        barChart: barChartSlice,
    },
})
