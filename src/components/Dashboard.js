// src/components/Dashboard.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogs } from "../redux/features/logsSlice";
import "./Dashboard.css";

function Dashboard() {
  const dispatch = useDispatch();
  const logs = useSelector((state) => state.logs.data);
  const status = useSelector((state) => state.logs.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLogs());
    }
  }, [status, dispatch]);

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <ul>
        {logs.map((log) => (
          <li key={log.id}>{log.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;
