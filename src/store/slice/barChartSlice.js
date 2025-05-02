


import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";



export const fetchSalesReport = createAsyncThunk(
    "barChart/fetchSalesReport",
    async (_, { rejectWithValue }) => {
        try {
            const res = await fetch("http://localhost:3400/pay/barChart");
            if (!res.ok) throw new Error("خطا در دریافت اطلاعات فروش");
            const data = await res.json();
            return data;
        } catch (err) {
            return rejectWithValue(err.message);
        }
    }
);




const barChartSlice = createSlice({
    name: "barChart",
    initialState: {
        labels: [],
        datasets: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSalesReport.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchSalesReport.fulfilled, (state, action) => {
                state.loading = false;
                state.labels = action.payload.labels;
                state.datasets = action.payload.datasets;
            })
            .addCase(fetchSalesReport.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default barChartSlice.reducer;
