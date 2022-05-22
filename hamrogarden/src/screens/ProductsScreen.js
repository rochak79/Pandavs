import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Product from '../components/Product/Product';
import products from '../products';

const ProductsScreen = () => {
  return (
    <Container>
      <h1>All Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductsScreen;
