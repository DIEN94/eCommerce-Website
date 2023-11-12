import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
}

const getInitialAuthState = (): AuthState => {
  const token = localStorage.getItem("TokenUserAuthorization");
  return {
    isAuth: token ? true : false,
  };
};

const initialState: AuthState = getInitialAuthState();

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action: PayloadAction<boolean>) {
          state.isAuth = action.payload;
        },
      },
})

export const { setAuth } = authSlice.actions;
export default authSlice.reducer;