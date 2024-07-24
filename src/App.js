import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Alerts from "./components/Alerts";
import Reports from "./components/Reports";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import "./styles/GlobalStyles.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <div className="main-container">
            <Sidebar />
            <main className="main-content">
              <Switch>
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/" component={Dashboard} />
                <PrivateRoute path="/alerts" component={Alerts} />
                <PrivateRoute path="/reports" component={Reports} />
              </Switch>
            </main>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
