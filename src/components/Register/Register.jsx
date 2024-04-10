import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #b27bf0, #2669c2);
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
  font-size: 32px;
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

const Register = () => {
  const navigate = useNavigate();

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fname) {
      error.fname = "First Name is required";
    }
    if (!values.lname) {
      error.lname = "Last Name is required";
    }
    if (!values.email) {
      error.email = "Email is required";
    } else if (!regex.test(values.email)) {
      error.email = "This is not a valid email format!";
    }
    if (!values.password) {
      error.password = "Password is required";
    } else if (values.password.length < 4) {
      error.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      error.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.cpassword) {
      error.cpassword = "Confirm Password is required";
    } else if (values.cpassword !== values.password) {
      error.cpassword = "Confirm password and password should be same";
    }
    return error;
  };

  const signupHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);
    if (!formErrors) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      axios.post("http://localhost:5000/signup", user).then((res) => {
        alert(res.data.message);
        navigate("/login", { replace: true });
      })
      .catch(error => {
        if (error.response && error.response.status === 400 && error.response.data.message === 'Email already exists') {
            alert('Email already exists');
        } else {
            console.error('Signup failed:', error);
        }
    });
    }
  }, [formErrors]);

  return (
    <Container>
      <Form>
        <Title>Create your account</Title>
        <Input
          type="text"
          name="fname"
          placeholder="First Name"
          onChange={changeHandler}
          value={user.fname}
        />
        <Error>{formErrors.fname}</Error>
        <Input
          type="text"
          name="lname"
          placeholder="Last Name"
          onChange={changeHandler}
          value={user.lname}
        />
        <Error>{formErrors.lname}</Error>
        <Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={changeHandler}
          value={user.email}
        />
        <Error>{formErrors.email}</Error>
        <Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={changeHandler}
          value={user.password}
        />
        <Error>{formErrors.password}</Error>
        <Input
          type="password"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={changeHandler}
          value={user.cpassword}
        />
        <Error>{formErrors.cpassword}</Error>
        <Button onClick={signupHandler}>Register</Button>
        <StyledNavLink to="/login">Already registered? Login</StyledNavLink>
      </Form>
      
    </Container>
  );
};

export default Register;
