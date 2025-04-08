import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authSlice';
import transactionReducer from './transactions/transactionSlice';
import budgetReducer from './budgets/budgetSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    transactions: transactionReducer,
    budgets: budgetReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 