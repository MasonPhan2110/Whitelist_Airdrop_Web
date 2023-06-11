import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CheckClaimState {
  type: string
}

const initialState: CheckClaimState = {
  type: 'other'
}

export const checkClaimSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<string>) => {
      state.type = action.payload // eslint-disable-line no-param-reassign
    },
  }
})

export const { setType } = checkClaimSlice.actions;



export default checkClaimSlice.reducer