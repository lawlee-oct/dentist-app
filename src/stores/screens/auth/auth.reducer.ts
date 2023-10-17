import { createSlice } from '@reduxjs/toolkit';
import { loginAction, getMeAction, logOutAction } from './auth.action';

const initialState: Auth.LoginState = {
  isLoading: false,
  isLoadingGetMe: false,
  isLoadingLogOut: false,
  error: null,
  meInfo: null,
};

const { actions, reducer } = createSlice({
  name: 'auth_slice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginAction.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error;
      })

      .addCase(logOutAction.pending, (state) => {
        state.isLoadingLogOut = true;
      })
      .addCase(logOutAction.fulfilled, (state) => {
        state.isLoadingLogOut = false;
        state.meInfo = null;
      })
      .addCase(logOutAction.rejected, (state, action) => {
        state.isLoadingLogOut = false;
        state.error = action.error;
      })

      .addCase(getMeAction.pending, (state) => {
        state.isLoadingGetMe = true;
      })
      .addCase(getMeAction.fulfilled, (state, action) => {
        state.isLoadingGetMe = false;
        state.meInfo = action.payload.data;
      })
      .addCase(getMeAction.rejected, (state, action) => {
        state.isLoadingGetMe = false;
        state.error = action.payload;
      });
  },
});

export { reducer };
export default actions;
