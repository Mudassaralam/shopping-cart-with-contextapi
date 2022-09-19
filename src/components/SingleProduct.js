import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./singleproduct.css";
import Ratings from "./Ratings";
import { CartContext } from "./Context/Context";
function SingleProduct({ prod, keyProd }) {
  const {
    state: { cart },
    dispatch,
  } = CartContext();

  // console.log(prod);
  return (
    <>
      <Container
        className="CardBox"
        style={{ width: "300px", height: "400px", marginBottom: "30px" }}
        key={keyProd}
      >
        <Card>
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle>
              <span>${prod.price.split(".")[0]}</span>
              {prod.fastDelivery ? (
                <div>Fast Deliver</div>
              ) : (
                <div>4 Days Delivery</div>
              )}
              <Card.Title>{<Ratings rating={prod.ratings} />}</Card.Title>
            </Card.Subtitle>
            {cart.some((p) => p.id === prod.id) ? (
              <Button
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: prod,
                  },console.log(prod))
                }
                variant="danger"
              >
                Remove to cart
              </Button>
            ) : (
              <Button
                onClick={() =>
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: prod,
                  },
                  console.log(prod))
                }
                variant="primary"
                disabled={!prod.inStock}
                className="mt-2"
              >
                {!prod.inStock ? "Out of Stock" : "Add to cart"}
              </Button>
            )}
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
export default SingleProduct;
