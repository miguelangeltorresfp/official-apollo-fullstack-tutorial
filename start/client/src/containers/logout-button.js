import React from "react";
import { ApolloConsumer } from "react-apollo";
import styled from "react-emotion";
import { ReactComponent as ExitIcon } from "../assets/icons/exit.svg";
import { menuItemClassName } from "../components/menu-item";

export default function LogoutButton() {
  return (
    <ApolloConsumer>
      {client => (
        <StyledButton
          onClick={() => {
            client.writeData({ data: { isLoggedIn: false } });
            localStorage.clear();
          }}
        >
          <ExitIcon />
          Logout
        </StyledButton>
      )}
    </ApolloConsumer>
  );
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

const StyledButton = styled("button")(menuItemClassName, {
  background: "none",
  border: "none",
  padding: 0,
  cursor: "pointer"
});
