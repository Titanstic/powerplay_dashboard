import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation AdminLogIn($username: String!, $password: String!) {
    AdminLogIn(password: $password, username: $username) {
      accessToken
      message
      error
    }
  }
`;
