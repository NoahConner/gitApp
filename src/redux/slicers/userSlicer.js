import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  filtered: [],
  noresult:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    },
    filter: (state, action) => {
      state.filtered = action.payload
    },
    noresult: (state, action) => {
      state.noresult = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { add, filter, noresult } = userSlice.actions

export default userSlice.reducer