import gql from "graphql-tag";
import React from "react";
import { ApolloConsumer, Mutation } from "react-apollo";
import { Loading, LoginForm } from "../components";

export const LOGIN_USER = gql`
  mutation login($email: String!) {
    login(email: $email)
  }
`;

export default function Login() {
  return (
    <ApolloConsumer>
      {client => (
        <Mutation
          mutation={LOGIN_USER}
          onCompleted={({ login }) => {
            localStorage.setItem("token", login);
            client.writeData({ data: { isLoggedIn: true } });
          }}
        >
          {(login, { loading, error }) => {
            // this loading state will probably never show, but it's helpful to
            // have for testing
            if (loading) return <Loading />;
            if (error) return <p>An error occurred</p>;

            return <LoginForm login={login} />;
          }}
        </Mutation>
      )}
    </ApolloConsumer>
  );
}
