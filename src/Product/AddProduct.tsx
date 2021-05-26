import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function AddProduct() {
  return (
    <>
      <div className="addproduct-container">
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productname"
                placeholder="Product Name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                name="category"
                placeholder="Product Category"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label> Price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Product Price"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductColor">
              <Form.Label>Color</Form.Label>
              <Form.Control
                type="text"
                name="color"
                placeholder="Product Color"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formProductName">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                name="productname"
                placeholder="Product Name"
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>{" "}
        </Container>
      </div>
    </>
  );
}
