import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  isLoading: boolean;
  error:string;
}

const getInitialAuthState = (): AuthState => {
  const token = localStorage.getItem("TokenUserAuthorization");
  return {
    isAuth: token ? true : false,
    isLoading: false,
    error:'',
  };
};

const initialState: AuthState = getInitialAuthState();

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      authFetching(state){
        state.isLoading = true;
      },
      authFetchingSuccess(state, action: PayloadAction<boolean>){
        state.isLoading = false;
        state.error = '';
        state.isAuth = action.payload;
      },
      authFetchingError(state, action: PayloadAction<string>){
        state.isLoading = false;
        state.error = action.payload;
      }
      },
})

export const { authFetching, authFetchingSuccess, authFetchingError } = authSlice.actions;
export default authSlice.reducer;