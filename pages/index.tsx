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
            id
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
  let {data, loading} = useIndexQuery()

  // STATES & their hooks for update
  const [allUserIds, setAllUserIds] = useState([])
  const [allUserElements, setAllUserElements] = useState([])

  // WATCHERS on props & states update
  useEffect(() => {
    console.log('useEffect on allUserIds.  data?.allUsers: ', data?.allUsers);
    setAllUserIds(data?.allUsers?.map(d => d.id)
        .slice()
        .sort((a, b) => a.localeCompare(b))
      || []);
  }, [data?.allUsers]);
  useEffect(() => {
    console.log('useEffect on allUserElements.  allUserIds: ', allUserIds);
    setAllUserElements(allUserIds?.map(uId => <User id={uId} key={uId}/>));
  }, [allUserIds]);

  // // COMPUTED
  // let allUsersElements = allUserIds?.map((uId) => (
  //   <User id={uId} key={uId}/>
  // ));

  // GraphQL HOOKS for methods
  const [createUserMutation] = useCreateUserMutation()

  // METHODS
  const clickHandlerNewUser = (): void => {
    console.log('Index. createUser. New User button clicked')
    const user: CreateUserInput = {} as CreateUserInput
    console.log('Index. user BEFORE: ', user)
    user.firstName = 'Michał'
    user.lastName = "Siekierski Apollo"
    user.email = "ms@wp.pl"
    user.password = "1234"
    user.phone = "433452345"
    user.city = "Błonie"
    console.log('Index. user AFTER INPUT DATA: ', user)
    console.log('Index. allUserIds BEFORE: ', allUserIds)
    createUserMutation({
      variables: {
        data: user,
      },
    }).then(newUser => {
      console.log('Index. newUser: ', newUser)
      // {data, loading} = useIndexQuery()
      setAllUserIds( (prevAllUserIds:String[]):String[] => {return [...prevAllUserIds, newUser.data.createUser.id]})
      console.log('Index. allUserIds AFTER MUTATION: ', allUserIds)
    })
  }

  // TEMPLATE
  return loading ? null : allUserElements.length > 0 ? (
    <>
      <table style={{border: 3}}>
        <tbody>{allUserElements}</tbody>
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