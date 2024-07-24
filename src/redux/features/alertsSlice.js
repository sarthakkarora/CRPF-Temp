// src/redux/features/alertsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAlerts = createAsyncThunk("alerts/fetchAlerts", async () => {
  // Implement your fetch logic here
  return []; // Replace with actual response
});

const alertsSlice = createSlice({
  name: "alerts",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlerts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAlerts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchAlerts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default alertsSlice.reducer;
