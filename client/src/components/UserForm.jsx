import React, { useState } from "react";
import styled from "styled-components/macro";
import { addUser } from "../services/User.service";
import { getUsers } from "../services/User.service";

const UserForm = ({ updateUsers }) => {
  const [user, setUser] = useState({});

  const handleSubmit = async event => {
    if (event) event.preventDefault();
    await addUser(user);
    await getUsers(updateUsers);
  };

  const handleChange = event => {
    event.persist();
    let property = event.target.name;
    let value = event.target.value;
    setUser(values => ({ ...values, [property]: value }));
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <H3>Fill up your details</H3>
        <Fieldset>
          <Input
            placeholder="Your name"
            type="text"
            name="userName"
            onChange={handleChange}
            required
            autoFocus
          />
        </Fieldset>
        <Fieldset>
          <Input
            placeholder="Your Email Address"
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </Fieldset>
        <Fieldset>
          <Input
            placeholder="Your Phone Number"
            type="tel"
            name="phone"
            onChange={handleChange}
            required
          />
        </Fieldset>
        <Fieldset>
          <Input
            placeholder="Your Web Site starts with http://"
            type="url"
            name="website"
            onChange={handleChange}
          />
        </Fieldset>
        <Fieldset>
          <Button type="submit">Submit</Button>
        </Fieldset>
      </Form>
    </div>
  );
};

export default UserForm;

const Form = styled.form`
  background: #f9f9f9;
  width: 35rem;
  padding: 35px;
`;

const H3 = styled.h3`
  color: #f96;
  display: block;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 5px;
`;

const Fieldset = styled.fieldset`
  border: medium none;
  margin: 0 0 10px;
  min-width: 100%;
`;

const Input = styled.input`
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font: 400 12px/16px "Open Sans", Helvetica, Arial, sans-serif;

  &:hover {
    transition: border-color 0.3s ease-in-out;
    border: 1px solid #aaa;
  }
  &:focus {
    outline: 0;
    border: 1px solid #999;
  }
`;

const Button = styled.button`
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font: 400 12px/16px "Open Sans", Helvetica, Arial, sans-serif;
  cursor: pointer;
  width: 100%;
  border: none;
  background: #0cf;
  color: #fff;
  margin: 0 0 5px;
  padding: 10px;
  font-size: 15px;

  &:hover {
    background: #09c;
    transition: background-color 0.3s ease-in-out;
  }
  &:active {
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
  }
`;
