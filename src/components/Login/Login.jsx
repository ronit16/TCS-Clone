import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #b27bf0, #2669c2);
`;

const Head = styled.h1`
  color: #030303c0;
  font-size: 44px;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Form = styled.form`
  background: #ffffff6b;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 340px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 38px;
  color: #333;
  margin-bottom: 30px;
  margin-top: 0;
`;

const Input = styled.input`
  display: block;
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: calc(100% - 20px);
  padding: 15px;
  background-color: #ff009598;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-weight: bold;
  font-size: 24px;
`;

const Error = styled.p`
  color: red;
  font-size: 0.8em;
  margin-bottom: 10px;
`;

const StyledNavLink = styled(NavLink)`
  color: #33067c;
  font-weight: bold;
  font-size: 18px;
  text-decoration: none;
  display: block;
  margin-top: 20px;

  &:hover {
    color: #2f80ed;
  }
`;

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    const errors = validateForm(user);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (isSubmit) {
      axios.post("http://localhost:5000/login", user).then((res) => {
        setUserState(res.data.user);
        navigate("/profile", { replace: true });
      });
    }
  }, [isSubmit, navigate, setUserState, user]);

  return (
    <Container>
      <Head>Stud-a-Hub</Head>
      <Form>
        <Title>Login</Title>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        {formErrors.email && <Error>{formErrors.email}</Error>}
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        {formErrors.password && <Error>{formErrors.password}</Error>}
        <Button onClick={loginHandler}>Login</Button>
        <StyledNavLink to="/signup">Not registered yet? Register</StyledNavLink>
      </Form>
      
    </Container>
  );
};

export default Login;
