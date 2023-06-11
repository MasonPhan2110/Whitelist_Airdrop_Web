import { configureStore } from '@reduxjs/toolkit'
import checkReducer from './slices/checkClaimSlice';

export const store = configureStore({
  reducer:{
    check: checkReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export const selectType = (state: RootState) => state.check.type

export type AppDispatch = typeof store.dispatch;