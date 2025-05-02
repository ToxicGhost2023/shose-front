import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// ثبت سفارش
export const submitOrderAsync = createAsyncThunk(
    "cart/submitOrder",
    async ({ userId, orderData }, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3400/pay/checkOut", {
                method: "POST",
                body: JSON.stringify({ userId, ...orderData }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("خطا در ثبت سفارش");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


// خالی کردن سبد خرید
export const clearCartAsync = createAsyncThunk(
    "cart/clearCart",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3400/shop/clear", {
                method: "POST",
                body: JSON.stringify({ userId }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("خطا در خالی کردن سبد خرید");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// اکشن‌های قبلی
export const addToCartAsync = createAsyncThunk(
    "cart/addToCart",
    async (payload, { rejectWithValue }) => {
        try {
            const response = await fetch("http://localhost:3400/shop/add", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (!response.ok) {
                throw new Error("خطا در اضافه کردن محصول به سبد خرید");
            }
            const data = await response.json();
            return data.cart;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCartAsync = createAsyncThunk(
    "cart/getCart",
    async (userId, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3400/shop/get?userId=${userId}`);
            if (!response.ok) {
                throw new Error("خطا در دریافت سبد خرید");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const removeFromCartAsync = createAsyncThunk(
    "cart/removeFromCart",
    async ({ productId, userId }, { rejectWithValue }) => {
        try {
            const response = await fetch(`http://localhost:3400/shop/remove/${productId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId }),
            });
            if (!response.ok) {
                throw new Error("حذف محصول موفقیت‌آمیز نبود");
            }
            const data = await response.json();
            return data.cart;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalAmount: 0,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // addToCartAsync
            .addCase(addToCartAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToCartAsync.fulfilled, (state, action) => {
                const newCart = action.payload;
                const items = Array.isArray(newCart.items) ? newCart.items : [];
                state.items = items.map((item) => ({
                    id: item.productId.toString(),
                    productId: item.productId.toString(),
                    price: Number(item.price) || 0,
                    quantity: Number(item.quantity) || 1,
                    totalPrice: Number(item.totalPrice) || (Number(item.price) || 0) * (Number(item.quantity) || 1),
                }));
                state.totalAmount = state.items.reduce(
                    (acc, item) => acc + item.totalPrice,
                    0
                );
                state.loading = false;
            })
            .addCase(addToCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // getCartAsync
            .addCase(getCartAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getCartAsync.fulfilled, (state, action) => {
                const items = Array.isArray(action.payload.cart?.items)
                    ? action.payload.cart.items
                    : [];
                state.items = items.map((item) => ({
                    id: item.productId.toString(),
                    productId: item.productId.toString(),
                    price: Number(item.price) || 0,
                    quantity: Number(item.quantity) || 1,
                    totalPrice: Number(item.totalPrice) || (Number(item.price) || 0) * (Number(item.quantity) || 1),
                }));
                state.totalAmount = state.items.reduce(
                    (acc, item) => acc + item.totalPrice,
                    0
                );
                state.loading = false;
            })
            .addCase(getCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // removeFromCartAsync
            .addCase(removeFromCartAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(removeFromCartAsync.fulfilled, (state, action) => {
                const newCart = action.payload;
                const items = Array.isArray(newCart.items) ? newCart.items : [];
                state.items = items.map((item) => ({
                    id: item.productId.toString(),
                    productId: item.productId.toString(),
                    price: Number(item.price) || 0,
                    quantity: Number(item.quantity) || 1,
                    totalPrice: Number(item.totalPrice) || (Number(item.price) || 0) * (Number(item.quantity) || 1),
                }));
                state.totalAmount = state.items.reduce(
                    (acc, item) => acc + item.totalPrice,
                    0
                );
                state.loading = false;
            })
            .addCase(removeFromCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // submitOrderAsync
            .addCase(submitOrderAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(submitOrderAsync.fulfilled, (state) => {
                state.loading = false;
            })
            .addCase(submitOrderAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            })
            // clearCartAsync
            .addCase(clearCartAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(clearCartAsync.fulfilled, (state) => {
                state.items = [];
                state.totalAmount = 0;
                state.loading = false;
            })
            .addCase(clearCartAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || action.error.message;
            });
    },
});

export default cartSlice.reducer;