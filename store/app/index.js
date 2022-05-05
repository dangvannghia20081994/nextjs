import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  classes: [],
  subjects: [],
  banners: [],
  classActive: null
}
export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setClasses: (state, action) => {
      state.classes = action.payload
    },
    setSubjects: (state, action) => {
      state.subjects = action.payload
    },
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setClassActive: (state, action) => {
      state.classActive = action.payload
    }
  },
})
export const { setClasses, setSubjects, setBanners, setClassActive } = appSlice.actions
export default appSlice.reducer