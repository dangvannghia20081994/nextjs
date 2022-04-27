import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  classes: [],
  subjects: [],
  showModalQuestion: false
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
    setShowModalQuestion: (state, action) => {
      state.showModalQuestion = action.payload
    },
  },
})
export const { setClasses, setSubjects, setShowModalQuestion } = appSlice.actions
export default appSlice.reducer