import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

const initialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const LoginAuth = createAsyncThunk(
  "user/LoginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/login`,
        {
          email: user.email,
          password: user.password,
        },
        {
          headers: {
            "x-api-key": process.env.REACT_APP_API_KEY,
          },
        }
      );
      console.log(response);

      const accessToken = response.data.token;
      const userData = response.data.user;

      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("accessToken", accessToken);
      // localStorage.setItem("roles", response.data.roles);
      localStorage.setItem("currentRole", userData.roles[0].id);
      console.log(userData);

      return response.data;
    } catch (error) {
      if (error.response) {
        const message = error.response.data.error;
        return thunkAPI.rejectWithValue(message);
      }
    }
  }
);

export const getMe = createAsyncThunk("user/getMe", async (_, thunkAPI) => {
  try {
    const response = await axios.get(`${apiUrl}/api/me`, getToken());
    return response.data;
  } catch (error) {
    if (error.response) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
});

export const LogOut = createAsyncThunk("user/api/LogOut", async () => {
  localStorage.removeItem("currentRole");
  localStorage.removeItem("user");
  const response = await axios.post(`${apiUrl}/logout`, getToken);
  localStorage.removeItem("accessToken");
  return response;
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(LoginAuth.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(LoginAuth.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(LoginAuth.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });

    builder.addCase(getMe.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMe.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.user = action.payload;
    });
    builder.addCase(getMe.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  return {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "x-api-key": process.env.REACT_APP_API_KEY,
    },
  };
};

export const { reset } = authSlice.actions;
export default authSlice.reducer;
