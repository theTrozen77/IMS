import React, { useState } from "react";
import { Form, Button, Card, Container } from "react-bootstrap";
import {
  signInWithEmailAndPassword,
  currentUserDetails,
} from "../services/auth";
import SignUp from "./../SignUp";
import { useHistory } from "react-router-dom";
import { toastSuccess } from "../utils/alertNotification";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login(props: any) {
  const { push } = useHistory();
  const [loginDetails, setLoginDetails] = useState(
    {} as { email: string; password: string }
  );

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(
        loginDetails.email,
        loginDetails.password
      );
      toast("Default Notification !");
      push("/home");
    } catch (e) {
      console.log("isnide catch", e);
      setErrorMessage(e.message);
    }
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
              <h2 className="text-center mb-4">Login</h2>
              {errorMessage && (
                <div className="text-center alert alert-danger">
                  {errorMessage}
                </div>
              )}
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
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Already have an account?{" "}
            <a
              className="link-primary"
              onClick={() => props.history.push("/signup")}
            >
              Sign up
            </a>
          </div>
        </div>
      </Container>
    </>
  );
}
