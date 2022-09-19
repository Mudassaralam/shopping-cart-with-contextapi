import { Button } from "react-bootstrap";
import "./header.css";
import React from "react";

import {
  Badge,
  Container,
  DropdownButton,
  FormControl,
  Nav,
  Navbar,
  NavbarBrand,
  NavDropdown,
  ToggleButton,
  Dropdown,
} from "react-bootstrap";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

import { CartContext } from "./Context/Context";
import { BsCart4 } from "react-icons/bs";

function Header() {
  const {
    state: { cart },
    dispatch,
    productDispatch,
  } = CartContext();

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to="/" style={{ textDecoration: "none" }}>
              SHOPPING CART
            </Link>
          </Navbar.Brand>
          <Navbar.Text>
            <FormControl
              type="search"
              placeholder="Search here"
              aria-label="Search"
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}
            />
          </Navbar.Text>
          <DropdownButton
            title={`${cart.length} Add to Cart`}
            // id="dropdown-button-drop-up"
            drop="start"
          >
            {/* <Badge pill bg="success">
                  {cart.length}
                </Badge> */}

            <Dropdown.Item className="dropDownCart">
              {cart.length > 0 ? (
                <>
                  {cart.map((prod) => (
                    <>
                      <span className="cartItem" key={prod.id}>
                        <img src={prod.image} alt={prod.name} />
                        <div className="cartItemDetails">
                          <span>{prod.name}</span>
                          <br />
                          <span>${prod.price.split(".")[0]}</span>
                        </div>
                        <FaTrash
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                        />
                      </span>
                    </>
                  ))}

                  <Link to="/cart" className="btn btn-primary">
                    Go to cart
                  </Link>
                </>
              ) : (
                <span>Cart is empty !</span>
              )}
            </Dropdown.Item>
          </DropdownButton>
        </Container>
      </Navbar>
    </>
  );
}
export default Header;
