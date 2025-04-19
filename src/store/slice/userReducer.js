const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

//  کل یوزر ها و اطلاعاتش
export const fetchUsers = createAsyncThunk('users/fetch', async (_, thunkAPI) => {
    try {
        const response = await fetch('http://localhost:3400/user/all');
        const data = await response.json();
        return data.users;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }

});
// سکیور کردن
export const fetchAuthUser = createAsyncThunk(
    "authUser/fetch",
    async ({ token }, thunkAPI) => {

        try {
            const response = await fetch("http://localhost:3400/user/details", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch user data");
            }

            const data = await response.json();
            return data.user; // فرض: API دیتا رو این شکلی می‌ده
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const initialState = {
    users: [],
    totalUsers: 0,
    usersStatus: 'idle',
    user: null,
    authStatus: 'idle',
    error: null,
}


const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
            state.totalUsers = action.payload.length;
        },
        logoutUser: (state) => {
            state.user = null;
            state.status = "idle";
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.usersStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.usersStatus = 'succeeded';
                state.users = action.payload;

                state.totalUsers = action.payload.length;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.usersStatus = 'failed';
                state.error = action.payload;
            })

            // -------- سکیور --------
            .addCase(fetchAuthUser.pending, (state) => {
                state.authStatus = 'loading';
                state.error = null;
            })
            .addCase(fetchAuthUser.fulfilled, (state, action) => {
                state.authStatus = 'succeeded';
                state.user = action.payload;
            })
            .addCase(fetchAuthUser.rejected, (state, action) => {
                state.authStatus = 'failed';
                state.error = action.payload;
            })

    }
})

export const { setUsers, logoutUser } = userSlice.actions;
export default userSlice.reducer;