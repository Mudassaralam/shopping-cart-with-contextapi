import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CartContext } from "./Context/Context";
import "./homefilters.css";
import Ratings from "./Ratings";

function HomeFilters() {
 

  const {
    productState: { byStock, byFastDevlivery, sort, byRating, searchQuery },
    productDispatch,
  } = CartContext();
//   console.log(byStock, byFastDevlivery, byRating, searchQuery, sort);
console.log(searchQuery)
  return (
    <>
      <Container fluid className="homefilters">
        <h4 className="h4">Filter Products</h4>
        <Form>
          <Form.Check
            type="radio"
            label="Ascending"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "lowToHigh",
              })
            }
            checked={sort === "lowToHigh" ? true : false}
          />
          <Form.Check
            type="radio"
            label="Descending"
            onChange={() =>
              productDispatch({
                type: "SORT_BY_PRICE",
                payload: "highToLow",
              })
            }
            checked={sort === "highToLow" ? true : false}
          />

          <Form.Check
            type="checkbox"
            label="Include Out of Stock"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_STOCK",
              })
            }
            checked={byStock}
          />
          <Form.Check
            type="checkbox"
            label="Fast Delivery Only"
            onChange={() =>
              productDispatch({
                type: "FILTER_BY_DELIVERY",
              })
            }
            checked={byFastDevlivery}
          />
          <Form.Label>Rating :</Form.Label>
          <Ratings
            rating={byRating}
            style={{ cursor: "pointer" }}
            onClick={(i) =>
              productDispatch({
                type: "FILTER_BY_RATING",
                payload: i + 1,
              })
            }
          />
          <br />
          <Button variant="outline-light"
          onClick={()=>productDispatch({
            type:'CLEAR_FILTERS'
          })}
          >Clear Filters</Button>
        </Form>
      </Container>
    </>
  );
}
export default HomeFilters;
