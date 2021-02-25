import { useIndexQuery } from "../src/graphql/types";
import { gql } from "@apollo/client";
import User from "../components/User";
import { useState, ChangeEvent } from "react";

gql`
    query Index {
        allUsers {
            id
        }
    }
`;

const Index = () => {
  const { data, loading } = useIndexQuery();

  const allUsers = data?.allUsers
    ?.slice()
    .sort((a, b) => a.id.localeCompare(b.id));

  const allUsersElements = allUsers?.map((u) => (
    <User id={u.id} key={u.id} />
  ));

  if (!loading) console.log("Index. allUsers: ", allUsers);
  if (!loading) console.log("Index. data: ", data);

  return loading ? null : allUsersElements.length > 0 ? (
    <table border={3}>
      <tbody>{allUsersElements}</tbody>
    </table>
  ) : (
    <div>Oops! No users!</div>
  );
};

export default Index;