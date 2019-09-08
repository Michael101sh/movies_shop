import React from "react";
import styled from "styled-components";
import MoviesList from "./MoviesList";
import UserForm from "./UserForm";
import { PayPalButton } from "react-paypal-button-v2";

const Purchase = ({ cartItems, updateUsers }) => {
  return (
    <Box>
      <FormBox>
        <UserForm updateUsers={updateUsers} />
      </FormBox>
      <div>
        <Title>Shopping Cart</Title>
        <Cart>
          <MoviesList listData={cartItems} height="auto" />
        </Cart>

        {cartItems.length > 0 ? (
          <PayBox>
            <PayPalButton
              amount="0.01"
              onSuccess={(details, data) => {
                alert(
                  "Transaction completed by " + details.payer.name.given_name
                );
              }}
              options={{
                clientId:
                  "Aby_-psw1snt3Z0CLLWaeGPNB-RLz8FYdQWi2hvY3r_-5HQvvDjUbUlCtTd3Gzgm7YtvsK6BN2AfV1Py"
              }}
            />
          </PayBox>
        ) : (
          <Msg> Your cart is empty </Msg>
        )}
      </div>
    </Box>
  );
};

export default Purchase;

const Box = styled.div`
  display: flex;
`;

const FormBox = styled.div`
  margin-right: 70px;
`;

const Cart = styled.div`
  width: 30rem;
  border-radius: 0.4rem;
  overflow-x: hidden;
  overflow-y: scroll;
  box-shadow: 0 0.2rem 0.8rem DimGrey;
  flex-basis: 100%;
`;

const Title = styled.h1`
  background: skyblue;
  color: #ff7575;
  font-size: 3rem;
  text-align: center;
`;

const Msg = styled.h2`
  text-align: center;
`;

const PayBox = styled.div`
  margin-top: 10px;
  border: skyblue 2px solid;
  background: white;
`;