import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './slices/nftSlice';

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
  },
});