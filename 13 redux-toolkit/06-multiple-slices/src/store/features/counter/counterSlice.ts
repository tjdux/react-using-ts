import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (
      state,
      action: PayloadAction<{ num1: number; num2: number }>
    ) => {
      state.count += action.payload.num1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, () => {
        console.log("incrementAsync pending");
      })
      .addCase(
        incrementAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.count += action.payload;
        }
      )
      .addCase(incrementAsync.rejected, () => {
        console.log("incrementAsync rejected");
      });
  },
});

export const incrementAsync = createAsyncThunk(
  "counterSlice/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    //throw new Error("error");
    return amount;
  }
);

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
