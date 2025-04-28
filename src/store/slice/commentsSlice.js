import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchComments = createAsyncThunk(
    'comments/fetchComments',
    async () => {
        const response = await fetch('http://localhost:3400/comments/getAllComments');
        if (!response.ok) {
            throw new Error('Could not fetch comments');
        }
        return response.json();
    }
);

export const createNewComment = createAsyncThunk(
    'comments/createNewComment',
    async ({ userId, comment }, { rejectWithValue }) => {
        try {
            const res = await fetch('http://localhost:3400/comments/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userId, comment }),
            });
            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || 'خطایی در ارسال نظر رخ داده است');
            }
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue({ message: error.message });
        }
    }
);



const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // گرفتن نظرات
            .addCase(fetchComments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchComments.fulfilled, (state, action) => {
                state.loading = false;
                state.comments = action.payload;
            })
            .addCase(fetchComments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            // ساخت نظر جدید
            .addCase(createNewComment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNewComment.fulfilled, (state, action) => {
                state.loading = false;
                state.comments.unshift(action.payload); // بلافاصله نشون بده
            })
            .addCase(createNewComment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            });
    },
});

export default commentsSlice.reducer;