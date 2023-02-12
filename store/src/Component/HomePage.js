import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const styles = {
  imageContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "400px",
  },
  image: {
    height: "100%",
  },
};

const HomePage = () => (
  <div className="homepage__header">
    <Container>
      <Row className="align-items-center">
        <Col xs={12}>
          <h1>Welcome kamel store...</h1>
        </Col>
        <Col xs={12}>
          <Button href="/products" variant="primary">
            seeAllProducts
          </Button>
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
