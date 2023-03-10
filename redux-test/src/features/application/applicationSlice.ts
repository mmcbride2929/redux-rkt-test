import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface ApplicationState {
  isTrue: boolean
}

const initialState: ApplicationState = {
  isTrue: true,
}

export const applicationSlice = createSlice({
  name: 'application',

  initialState,
  reducers: {
    updateIsTrue: (state) => {
      state.isTrue = !state.isTrue
    },
  },
})

export const { updateIsTrue } = applicationSlice.actions

export const selectIsTrue = (state: RootState) => state.application.isTrue

export default applicationSlice.reducer
