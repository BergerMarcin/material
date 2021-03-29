import { gql } from "@apollo/client"
import {
  Scalars,
  UsersMvc,
  CreateUserInput,
  UpdateUserBasicDataInput,
  useUserQuery,
  useUpdateUserBasicDataMutation
} from "../src/graphql/types"
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
  console.log('User. PROPS: id: ', id);

  // MOUNTED (at mounted/DidMount)
  const { data, loading } = useUserQuery({
    variables: {
      id,
    },
  });

  // STATES & their hooks for update
  const [user, setUser] = useState({} as UsersMvc)
  const [localPhone, setLocalPhone] = useState('');

  // WATCHERS on props & states update
  useEffect(() => {
    setTimeout(() => {console.log('useEffect on user after 2s. data?.user: ', data?.User.firstName);}, 2000)
    console.log('useEffect on user.  data?.user: ', data?.User.firstName);
    setUser({...data?.User} as UsersMvc || {} as UsersMvc);
  }, [data?.User]);
  useEffect(() => {
    setLocalPhone(data?.User?.phone || '');
  }, [data?.User?.phone]);

  // GraphQL HOOKS for methods
  const [updateUserBasicDataMutation] = useUpdateUserBasicDataMutation();

  // METHODS
  const updatedUserBasicDataInput = (key: string, value: any): UpdateUserBasicDataInput => {
    let result: UpdateUserBasicDataInput = {
      firstName: user?.firstName,
      lastName: user?.lastName,
      email: user?.email,
      phone: user?.phone,
      city: user?.city
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
  let content = <td colSpan={5}>Loading ... (an id: {id} of {user?.firstName})</td>;
  if (!loading && data) {
    const { firstName, lastName, email, phone } = data.User
    const rate = data.User.ratesCount > 0
      ? Math.round(100 * data.User.ratesValue / data.User.ratesCount) / 100 : 'brak ocen'
    content = (
      <>
        <td>{user.firstName}</td>
        <td>{user.lastName}</td>
        <td>{user.email}</td>
        <td><input type="text" value={localPhone} onChange={onChangeHandlerLocalPhone}/></td>
        <td>{rate}</td>
      </>
    );
  }
  return (<tr>{content}</tr>)
}

export default User
