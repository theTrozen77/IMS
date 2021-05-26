import React, { useContext } from "react";
import { Button, Col } from "react-bootstrap";
import DashboardRoutes from "./routes";
import { useHistory, Link, Route, Switch } from "react-router-dom";
import { UserContext } from "./../UserContext/UserContextProvider";

export default function Dashboard() {
  const user = useContext(UserContext);
  console.log("userusere", user);

  const handleLogout = (e: any) => {
    console.log("out");
  };
  return (
    <>
      <div className="dashboard-main">
        <div className="sidenav">
          <div className="nav-items">Dashboard</div>
          <Link className="nav-items" to="/home/addproduct">
            Add Product
          </Link>
          <Link className="nav-items" to="/home/viewproduct">
            View Product
          </Link>{" "}
          <Link className="nav-items" to="/home/viewproduct">
            Search Product
          </Link>{" "}
          <Link className="nav-items" to="/home/viewproduct">
            Profile
          </Link>{" "}
          <Button
            variant="outline-primary"
            className="nav-items"
            style={{ color: "yellow" }}
            onClick={(e) => {
              handleLogout(e);
            }}
          >
            Logout
          </Button>{" "}
        </div>
        <div className="product-container">
          <DashboardRoutes />
        </div>
      </div>
    </>
  );
}
