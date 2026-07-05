import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = null as string | null;

const selectedDateSlice = createSlice({
  name: 'selectedDate',
  initialState,
  reducers: {
    set: {
      prepare: (date: Date) => ({
        payload: date.toISOString(),
      }),
      reducer: (_, action: PayloadAction<string>) => action.payload,
    }
  },
});

export const { set } = selectedDateSlice.actions;
export const selectedDateReducer = selectedDateSlice.reducer;
