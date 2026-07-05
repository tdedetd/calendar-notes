import { configureStore, Store } from '@reduxjs/toolkit';
import { selectedDateReducer } from './slices/selected-date-slice';
import { selectedMonthReducer } from './slices/selected-month-slice';

export function makeStore() {
  return configureStore({
    reducer: {
      selectedDate: selectedDateReducer,
      selectedMonth: selectedMonthReducer,
    },
  });
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];
