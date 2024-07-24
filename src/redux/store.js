// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import logsReducer from "./features/logsSlice";
import alertsReducer from "./features/alertsSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    logs: logsReducer,
    alerts: alertsReducer,
  },
});

export default store;
