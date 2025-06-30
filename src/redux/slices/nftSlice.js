import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  connected: false,
  address: '',
  balance: '0.00',
  walletType: '',
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    connectWallet: (state, action) => {
      state.connected = true;
      state.address = action.payload.address;
      state.balance = action.payload.balance;
      state.walletType = action.payload.walletType;
    },
    disconnectWallet: (state) => {
      state.connected = false;
      state.address = '';
      state.balance = '0.00';
      state.walletType = '';
    },
  },
});

export const { connectWallet, disconnectWallet } = walletSlice.actions;
export default walletSlice.reducer;