import {CreateUserDataInput, useIndexQuery, useCreateUserMutation} from "../src/graphql/types";
import {gql} from "@apollo/client";
import User from "../components/User";
import {useState, ChangeEvent} from "react";
import {UserDAO} from "../src/dao/UserDAO";

gql`
    query Index {
        allUsers {
            id
        }
    }
    mutation createUser($data: CreateUserDataInput!) {
        createUser(data: $data) {
            firstName
            lastName
            email
            password
            phone
            city
            createdAt
        }
    }
`;

const Index = () => {
  const {data, loading} = useIndexQuery();

  const allUsers = data?.allUsers
    ?.slice()
    .sort((a, b) => a.id.localeCompare(b.id));

  const allUsersElements = allUsers?.map((u) => (
    <User id={u.id} key={u.id}/>
  ));

  const clickHandlerNewUser = (): void => {
    console.log('Index. createUser. New User button clicked');
    const userDAO = new UserDAO() as CreateUserDataInput
    console.log('Index. userDAO: ', userDAO);
    userDAO.firstName = 'Michał'
    console.log('Index. userDAO: ', userDAO);
    const {data, creating} = useCreateUserMutation(userDAO)
  }

  return loading ? null : allUsersElements.length > 0 ? (
    <>
      <table border={3}>
        <tbody>{allUsersElements}</tbody>
      </table>
      <button onClick={clickHandlerNewUser}>New User</button>
    </>
  ) : (
    <>
      <div>Oops! No users!</div>
      <button onClick={clickHandlerNewUser}>New User</button>
    </>
  );
};

export default Index;