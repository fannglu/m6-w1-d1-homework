import React, { Component } from "react";
import AppNavbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { Button, Container } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Layout.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/index.js";
import Calendar from "../Calendar";

class Home extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="page">
          <div className="row">
            <div className="left col-4">
              <h1>Welcome to Mighty</h1>
              <p>
                Do you know small daily habit can lead to long-term Growth.{" "}
              </p>
              <Container fluid className="button">
                <Button className="m-5 nav text-center bg-light">
                  <Link to="/inventories" className="nav-Link">
                    Add Habit
                  </Link>
                </Button>
              </Container>
            </div>
            <div className="right col-8">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
