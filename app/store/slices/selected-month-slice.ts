import { createSlice } from '@reduxjs/toolkit';

interface SelectedMonthState {
  value: {
    month: number;
    year: number;
  };
}

function getInitialState(): SelectedMonthState {
  const currentDate = new Date();
  return {
    value: {
      month: currentDate.getMonth(),
      year: currentDate.getFullYear(),
    }
  };
}

const selectedMonthSlice = createSlice({
  name: 'selectedMonth',
  initialState: getInitialState(),
  reducers: {
    prev: (state) => {
      const newMonth = state.value.month - 1;
      state.value = {
        month: newMonth === -1 ? 11 : newMonth,
        year: newMonth === -1 ? state.value.year - 1 : state.value.year,
      };
    },
    next: (state) => {
      const newMonth = state.value.month + 1;
      state.value = {
        month: newMonth === 12 ? 0 : newMonth,
        year: newMonth === 12 ? state.value.year + 1 : state.value.year,
      };
    },
  },
});

export const { next, prev } = selectedMonthSlice.actions;
export const selectedMonthReducer = selectedMonthSlice.reducer;
