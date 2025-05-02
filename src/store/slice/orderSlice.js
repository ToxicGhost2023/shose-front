// orderSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// گرفتن تمامی سفارشات در پنل ادمین
export const getOrdersAsync = createAsyncThunk(
    "order/getOrders",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:3400/pay/order"); // یا روت مناسب خودت
            if (!res.ok) throw new Error("خطا در دریافت سفارش‌ها");
            const data = await res.json();
            return data.orders || [];
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
// حذف سفارشات پنل ادمین
export const deleteOrderAsync = createAsyncThunk(
    "order/deleteOrder",
    async (id, { rejectWithValue }) => {
        try {
            const res = await fetch(`http://localhost:3400/pay/order/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("حذف سفارش ناموفق بود");
            return id; // فقط ID را برمی‌گردانیم تا در state حذف شود
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);
// اپدیت وضعیت سفارشات
export const updateOrderStatusAsync = createAsyncThunk(
    "order/updateStatus",
    async ({ id, status }) => {
        const res = await fetch(`http://localhost:3400/pay/order/${id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status }),
        });
        if (!res.ok) throw new Error("خطا در به‌روزرسانی سفارش");
        return await res.json();
    }
);

const orderSlice = createSlice({
    name: "order",
    initialState: {
        orders: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getOrdersAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getOrdersAsync.fulfilled, (state, action) => {
                state.orders = action.payload;
                state.loading = false;
            })
            .addCase(getOrdersAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            .addCase(deleteOrderAsync.fulfilled, (state, action) => {
                state.orders = state.orders.filter((o) => o._id !== action.payload);
            })
            .addCase(updateOrderStatusAsync.fulfilled, (state, action) => {
                const index = state.orders.findIndex(o => o._id === action.payload._id);
                if (index !== -1) {
                    state.orders[index].status = action.payload.status;
                }
            });
    },
});

export default orderSlice.reducer;
