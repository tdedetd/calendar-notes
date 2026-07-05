import { createSlice } from '@reduxjs/toolkit';

interface SelectedMonthState {
  month: number;
  year: number;
}

function getInitialState(): SelectedMonthState {
  const currentDate = new Date();
  return {
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  };
}

const selectedMonthSlice = createSlice({
  name: 'selectedMonth',
  initialState: getInitialState(),
  reducers: {
    prev: (state) => {
      const newMonth = state.month - 1;
      return {
        month: newMonth === -1 ? 11 : newMonth,
        year: newMonth === -1 ? state.year - 1 : state.year,
      };
    },
    next: (state) => {
      const newMonth = state.month + 1;
      return {
        month: newMonth === 12 ? 0 : newMonth,
        year: newMonth === 12 ? state.year + 1 : state.year,
      };
    },
  },
});

export const { next, prev } = selectedMonthSlice.actions;
export const selectedMonthReducer = selectedMonthSlice.reducer;
