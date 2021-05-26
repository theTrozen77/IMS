import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import {
  userDetails,
  signInWithEmailAndPassword,
  currentUserDetails,
} from "./services/auth";
import UserContextProvider from "./UserContext/UserContextProvider";
const SignUp = React.lazy(() => import("./SignUp"));
const Login = React.lazy(() => import("./Login"));
const Dashboard = React.lazy(() => import("./Dashboard"));

export default function MainRoutes() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("userDetailsuserDetails", userDetails);
  const DashBoardWithContext = () => {
    return (
      <>
        <UserContextProvider>
          <Dashboard />
        </UserContextProvider>
      </>
    );
  };
  return (
    <BrowserRouter>
      <div>
        <React.Suspense fallback="loading...">
          <Switch>
            <Route exact path="/" component={Login} />

            <Route exact path="/signup" component={SignUp} />

            <Route path="/home" component={DashBoardWithContext} />
          </Switch>
        </React.Suspense>
      </div>
    </BrowserRouter>
  );
}
