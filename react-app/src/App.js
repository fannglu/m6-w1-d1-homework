import React, { Component } from "react";
import Home from "./Componets/Layout/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InventoryList from "./Componets/Inventory/InventoryList";
import InventoryEdit from "./Componets/Inventory/InventoryEdit";
// import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

          <Route path="/" exact={true} component={Home} />
          <Route path="/inventories" exact={true} component={InventoryList} />
          <Route path="/inventories/:id" component={InventoryEdit} />
        </Switch>
      </Router>
    );
  }
}
export default App;
