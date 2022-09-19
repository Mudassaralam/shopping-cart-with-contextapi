import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "./Context/Context";
import HomeFilters from "./HomeFilters";
import SingleProduct from "./SingleProduct";
import "./home.css";
function Home() {
  const {
    state: { products },
    productState: { byStock, byFastDevlivery, sort, byRating, searchQuery },
  } = CartContext();

  // console.log(products);

  const TransFormProducts = () => {
    let sortedProducts = products;

    if (sort) {
      sortedProducts = sortedProducts.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (!byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }
    if (byFastDevlivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.byFastDevlivery);
    }
    if (byRating) {
      sortedProducts = sortedProducts.filter(
        (prod) => prod.ratings == byRating
      );
    }
    return sortedProducts;
  };

  return (
    <>
      <Container fluid>
        <Row sm={4}>
          <Col sm={4}>
            <HomeFilters />
          </Col>
          <Col sm={8}>
            <h2>Products</h2>
            <div className="divCard">
              {TransFormProducts().map((prod) => {
                return <SingleProduct prod={prod} key={prod.id} />;
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Home;
