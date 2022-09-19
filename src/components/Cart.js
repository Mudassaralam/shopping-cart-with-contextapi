import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { CartContext } from "./Context/Context";
import "./cart.css";
import { FaTrash } from "react-icons/fa";
import Ratings from "./Ratings";
function Cart() {
  const {
    state: { cart },
    dispatch,
  } = CartContext();

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(
      cart.reduce((total, item) => total + Number(item.price) * item.qty, 0)
    );
  }, [cart]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={8}>
            <ListGroup className="mt-5">
              {cart.map((prod) => (
                <ListGroup.Item>
                  <Row>
                    <Col md={2}>
                      <Image src={prod.image} rounded />
                    </Col>
                    <Col md={2}>
                      <span>{prod.name}</span>
                    </Col>
                    <Col md={2}>
                      <span>${prod.price}</span>
                    </Col>
                    <Col md={2}>
                      <Ratings rating={prod.ratings} />
                    </Col>
                    <Col md={2}>
                      <Form.Control as="select" value={prod.qty}
                      onChange={(e)=>dispatch({
                        type:'CHANGE_CART_QTY',
                        payload:{
                          id:prod.id,
                          qty:e.target.value
                        }
                      })}
                      >
                        {[...Array(prod.inStock).keys()].map((x) => (
                          <option key={x + 1}>{x + 1}</option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col>
                      <Button
                        className="btn btn-danger"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      >
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={4} className="proceedTOcheckout">
          <Row>
          <h3>Total Items are {cart.length}</h3>
            <h4>Total Price : ${total}</h4>
          </Row>
          <Row>
          <Col>
          <Button className="btn btn-primary ml-5">Go to Proceed</Button>
          </Col>
            
          </Row>
            
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Cart;
