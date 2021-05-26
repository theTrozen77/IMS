import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import { signUpWithEmailAndPassword } from "./services/auth";

export default function SignUp() {
  const [signUpDetails, setSignUpDetails] = useState(
    {} as { email: string; password: string }
  );

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setSignUpDetails({
      ...signUpDetails,
      [name]: value,
    });
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const userCredentials = await signUpWithEmailAndPassword(
        signUpDetails.email,
        signUpDetails.password
      );
    } catch (e) {}
  };

  return (
    <>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Sign Up</h2>
              <Form>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Form.Group>

                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    onChange={(e) => {
                      handleChange(e);
                    }}
                  />
                </Form.Group>
                <Button
                  className="w-100"
                  type="submit"
                  onClick={(e) => {
                    handleSignUp(e);
                  }}
                >
                  SignUp
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">Already have an account?</div>
        </div>
      </Container>
    </>
  );
}
