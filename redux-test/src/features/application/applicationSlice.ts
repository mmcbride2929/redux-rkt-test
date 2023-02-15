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
  name: 'updateSwitch',

  initialState,
  reducers: {
    updateIsTrue: (state, action: PayloadAction<boolean>) => {
      // shouldn't state be given type boolean?
      state.value = action.payload
    },
    updateIsFalse: (state, action: PayloadAction<boolean>) => {
      // shouldn't state be given type boolean?
      state.value = action.payload
    },
  },
})

export const { updateIsTrue, updateIsFalse } = applicationSlice.actions

export default applicationSlice.reducer

// dont understand RootState
