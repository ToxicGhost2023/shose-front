const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



// برای کل محصولات
export const fetchProducts = createAsyncThunk(
    "products/fetch",
    async (_, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:3400/product/getAllProducts", { cache: 'no-store', });
            if (!response.ok) {
                throw new Error("Failed to fetch products");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
// برای تک محصول
export const fetchSingleProduct = createAsyncThunk(
    "products/fetchSingle",
    async (id, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3400/product/${id}`, { cache: 'no-store', });
            if (!response.ok) {
                throw new Error("Failed to fetch single product");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// اپدیت محصول
export const updateProduct = createAsyncThunk(
    'products/update',
    async ({ id, updatedProduct }, thunkAPI) => {
        try {
            const response = await fetch(`http://localhost:3400/product/updateProduct/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedProduct),
            });
            if (!response.ok) {
                throw new Error('Failed to update product');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);


const initialState = {
    products: [],
    status: 'idle',
    singleProduct: null,
    singleProductStatus: 'idle',
    error: null,
}

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            // همه محصولات
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })

            // تک محصول
            .addCase(fetchSingleProduct.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchSingleProduct.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.singleProduct = action.payload.product;
            })
            .addCase(fetchSingleProduct.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // به روز رسانی محصول
            .addCase(updateProduct.pending, (state) => {
                state.status = "loading";
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.singleProduct = action.payload;
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})
export const { setProducts } = productSlice.actions;
export default productSlice.reducer;