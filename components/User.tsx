import { gql } from "@apollo/client";
import {useUpdateUserDataMutation, useUserQuery} from "../src/graphql/types";
import {ChangeEvent, useEffect, useState} from "react";

interface Props {
  id: String;
}

gql`
    query User($id: ID!) {
        User(id: $id) {
            firstName
            lastName
            email
            phone
            ratesValue
            ratesCount
        }
    }
    mutation updateUserData($id: ID!, $data: UpdateUserDataInput!) {
        updateUserData(id: $id, data: $data) {
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

const User = (props: Props) => {
  const { id } = props;
  console.log('User. id: ', id);
  const { loading, data } = useUserQuery({
    variables: {
      id,
    },
  });
  //Todo: ASK DANIEL about below incredible action
  const [updateUser] = useUpdateUserDataMutation();

  const [localPhone, setLocalPhone] = useState('');
  useEffect(() => {
    setLocalPhone(data?.User?.phone || '');
  }, [data?.User?.phone]);
  const onChangeHandlerLocalPhone = (e: ChangeEvent) => {
    const phone = (e.target as HTMLInputElement).value;
    setLocalPhone(phone);
    console.log('User.tsx. phone: ', phone)
    console.log('User.tsx. localPhone: ', localPhone)
    updateUser({
      variables: {
        id,
        data: {
          ...data.User,
          phone
        },
      },
    });
  };

  let content = <td colSpan={5}>Loading ...</td>;
  if (!loading && data) {
    const { firstName, lastName, email, phone } = data.User
    const rate = data.User.ratesCount > 0
      ? Math.round(100 * data.User.ratesValue / data.User.ratesCount) / 100 : 'brak ocen'
    content = (
      <>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td><input type="text" value={localPhone} onChange={onChangeHandlerLocalPhone}/></td>
        <td>{rate}</td>
      </>
    );
  }
  return <tr>{content}</tr>;
};

export default User;
