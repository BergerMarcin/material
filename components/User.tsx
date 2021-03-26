import { gql } from "@apollo/client"
import {
  Scalars,
  UsersMvc,
  CreateUserInput,
  useUpdateUserBasicDataMutation,
  useUserQuery
} from "../src/graphql/types"
import {UpdateUserBasicDataInput} from "../src/dao/types"
import {ChangeEvent, useEffect, useState} from "react"

interface Props {
  id: Scalars["ID"];
}

gql`
    query User($id: ID!) {
        User(id: $id) {
            firstName
            lastName
            email
            phone
            city
            ratesValue
            ratesCount
        }
    }
    mutation UpdateUserBasicData($id: ID!, $data: UpdateUserBasicDataInput!) {
        updateUserBasicData(id: $id, data: $data) {
            firstName
            lastName
            email
            password
            phone
            city
        }
    }
`;

const User = (props: Props) => {
  // PROPS
  const { id } = props;
  console.log('User. id: ', id);

  // MOUNTED (at mounted/DidMount)
  const { data, loading } = useUserQuery({
    variables: {
      id,
    },
  });

  // STATES & their hooks for update
  const [localPhone, setLocalPhone] = useState('');

  // WATCHERS on props & states update
  useEffect(() => {
    setLocalPhone(data?.User?.phone || '');
  }, [data?.User?.phone]);

  // GraphQL HOOKS for methods
  const [updateUserBasicDataMutation] = useUpdateUserBasicDataMutation();

  // METHODS
  const updatedUserBasicDataInput = (key: string, value: any): UpdateUserBasicDataInput => {
    let result: UpdateUserBasicDataInput = {
      firstName: data?.User?.firstName,
      lastName: data?.User?.lastName,
      email: data?.User?.email,
      phone: data?.User?.phone,
      city: data?.User?.city
    }
    if (Object.keys(result).includes(key)) result[key] = value
    return result
  }
  const onChangeHandlerLocalPhone = (e: ChangeEvent) => {
    const phone = (e.target as HTMLInputElement).value;
    setLocalPhone(phone);
    console.log('User.tsx. updatedUser: ', updatedUserBasicDataInput("phone", phone))
    updateUserBasicDataMutation({
      variables: {
        id,
        data: updatedUserBasicDataInput("phone", phone),
      },
    })
      .then(updatedUser => console.log('User.tsx. updatedUser from DB: ', updatedUser.data.updateUserBasicData));
  };

  // TEMPLATE
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
