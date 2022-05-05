import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  showModalLogin: false,
  showModalRegister: false,
  showModalQuestion: false,
}
export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setShowModalLogin: (state, action) => {
      state.showModalLogin = action.payload;
    },
    setshowModalRegister: (state, action) => {
      state.showModalRegister = action.payload;
    },
    setShowModalQuestion: (state, action) => {
      state.showModalQuestion = action.payload;
    },
  },
});
export const { setShowModalLogin, setshowModalRegister, setShowModalQuestion } = modalSlice.actions
export default modalSlice.reducer