import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector, useDispatch } from "react-redux";
import {logoutUser} from "../actions/userActions"
export default function NavBar() {
  const cartstate = useSelector((state) => state.cartReducer);
  const userstate = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userstate;
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="shadow-lg p-3 bg-body w-100"
      >
        <Container>
          <Navbar.Brand href="/"><h1 className="custom-font">Reactaurant</h1></Navbar.Brand>
          <Nav className="ml-auto">
            <div className="d-flex align-items-center">
              {currentUser ? (
                <div className="dropdown">
                  <a
                    className="dropdown-toggle text-left me-3"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {currentUser.name}
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/orders">
                        Orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>
                        <li>Logout</li>
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                <a href="/login" className="nav-link me-3">
                  Login
                </a>
              )}
              <a href="/food" className="nav-link">
                Menu
              </a>
              <a href="#pricing" className="nav-link">
                Book Table
              </a>
              <a href="/about" className="nav-link">
                About Us
              </a>
              <a href="/cart" className="nav-link me-3">
                <b>Cart: {cartstate.cartItems.length}</b>
              </a>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
