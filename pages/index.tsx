import {
  useIndexQuery,
  useCreateUserMutation,
  CreateUserInput, RolesTypes
} from "../src/graphql/types";
import {gql} from "@apollo/client";
import User from "../components/User";
import {useState, ChangeEvent, useEffect} from "react";

gql`
    query Index {
        allUsers {
            id
        }
    }
    mutation CreateUser($data: CreateUserInput!) {
        createUser(data: $data) {
            firstName
            lastName
            email
            password
            phone
            city
        }
    }
`;

const Index = () => {
  // MOUNTED (at mounted/DidMount)
  const {data, loading} = useIndexQuery();

  // STATES & their hooks for update
  const [allUsers, setAllUsers] = useState([]);

  // WATCHERS on props & states update
  useEffect(() => {
    setAllUsers(data?.allUsers?.slice()
        .sort((a, b) => a.id.localeCompare(b.id))
      || []);
  }, [data?.allUsers]);

  // COMPUTED
  const allUsersElements = allUsers?.map((u) => (
    <User id={u.id} key={u.id}/>
  ));

  // GraphQL HOOKS for methods
  const [createUserMutation] = useCreateUserMutation();

  // METHODS
  const clickHandlerNewUser = (): void => {
    console.log('Index. createUser. New User button clicked');
    const user: CreateUserInput = {} as CreateUserInput
    console.log('Index. user BEFORE: ', user)
    user.firstName = 'Michał'
    user.lastName = "Siekierski Apollo"
    user.email = "ms@wp.pl"
    user.password = "1234"
    user.phone = "433452345"
    user.city = "Błonie"
    console.log('Index. user AFTER INPUT DATA: ', user)
    console.log('Index. allUsers BEFORE: ', allUsers)
    createUserMutation({
      variables: {
        data: user,
      },
    }).then(newUser => {
      console.log('Index. newUser: ', newUser)
      console.log('Index. allUsers AFTER MUTATION: ', allUsers)
    })
  }

  // TEMPLATE
  return loading ? null : allUsersElements.length > 0 ? (
    <>
      <table style={{border: 3}}>
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