import React from "react";
import { Route, Switch } from "react-router-dom";
import AddProduct from "./../Product/AddProduct";
import ViewProduct from "./../Product/ViewProduct";

export default function DashboardRoutes() {
  return (
    <Switch>
      <Route path="/home/addproduct" component={AddProduct} />
      <Route path="/home/viewproduct" component={ViewProduct} />
      {/* <Route path="/searchproduct" component={AddProduct} />
                <Route path="/profile" component={AddProduct} /> */}
    </Switch>
  );
}
