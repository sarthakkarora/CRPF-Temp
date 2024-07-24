// src/components/Alerts.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAlerts } from "../redux/features/alertsSlice";
import "./Alerts.css";

function Alerts() {
  const dispatch = useDispatch();
  const alerts = useSelector((state) => state.alerts.data);
  const status = useSelector((state) => state.alerts.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchAlerts());
    }
  }, [status, dispatch]);

  return (
    <div className="alerts">
      <h2>Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id}>{alert.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;
