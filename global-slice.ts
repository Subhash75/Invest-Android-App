import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface globalSliceState {
  name: string
}

const initialState: globalSliceState = {
  name: '',
}

export const globalSlice = createSlice({
  name: 'globalSlice',
  initialState,
  reducers: {
    setUserDetails: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
  },
})

export const { setUserDetails } = globalSlice.actions
 
export default globalSlice.reducer