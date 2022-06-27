import React, { Component } from "react";
import { Button, ButtonGroup, Container, Table } from "reactstrap";
import NavBar from "../Layout/NavBar/index"
import { Link, withRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { updateInventory } from "../../node-mongo/app/controllers/inventory.controller";

class InventoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inventories: [],
      isLoading: true,
    };
  }

  //fetching data from the database once this InventoryList component  has been mounted
  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    fetch("api/inventories")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          inventories: data,
          isLoading: false,
        })
      );
  }

  //fetch API to match the correct route in the backend router
  removeInv = async (id) => {
    await fetch(`/api/inventory/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    console.log("Remove Done!");
    // update inventory state minus removed item
    let updatedInventories = [...this.state.inventories].filter(
      (i) => i._id !== id
    );
    this.setState({
      inventories: updatedInventories,
    });
  };
  render() {
    const { inventories, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const inventoryList = inventories.map((inventory) => {
      return (
        <tr key={inventory._id}>
          <td style={{ whiteSpace: "nowrap" }}>{inventory.habitName}</td>
          {/* <td>{inventory.qty}</td> */}
          {/* <td>{inventory.price}</td> */}
          <td>{inventory.status}</td>
          <td>
            <ButtonGroup>
              <Button
                size="sm"
                color="primary"
                tag={Link}
                to={"/inventories/" + inventory._id}
              >
                Edit
              </Button>
              <Button
                size="sm"
                color="danger"
                onClick={() => this.removeInv(inventory._id)}
              >
                Delete
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <NavBar />
        <Container fluid>
          <div className="float-right">
            <Button
              color="success"
              className="my-4"
              tag={Link}
              to="/inventories/new"
            >
              Add inventory
            </Button>
          </div>
          <h3>Habit List</h3>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Habit Name</th>
                {/* <th width="15%">Short Description</th> */}
                {/* <th width="15%">Price</th> */}
                <th width="15%">Short Description</th>
                <th width="15%">Actions</th>
              </tr>
            </thead>
            <tbody>{inventoryList}</tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
export default withRouter(InventoryList);
