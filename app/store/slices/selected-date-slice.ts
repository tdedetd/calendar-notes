import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: { value: string | null } = {
  value: null,
}

export const selectedDateSlice = createSlice({
  name: 'selectedDate',
  initialState,
  reducers: {
    set: {
      prepare: (date: Date) => ({
        payload: date.toISOString(),
      }),
      reducer: (state, action: PayloadAction<string>) => {
        state.value = action.payload;
      },
    }
  },
});

export const { set } = selectedDateSlice.actions;
export const selectedDateReducer = selectedDateSlice.reducer;
