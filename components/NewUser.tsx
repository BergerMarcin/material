import {gql} from "@apollo/client"
import {
  Scalars,
  UsersMvc,
  CreateUserInput,
  useCreateUserMutation
} from "../src/graphql/types"
import {ChangeEvent, useEffect, useState} from 'react'

interface Props {
  updateAllUserIds: (newUserId: Scalars["String"]) => void;   // function to update main view of users
}

gql`
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

const NewUser = (props: Props) => {
  // PROPS
  const {updateAllUserIds} = props;
  console.log('NewUser. PROPS: updateAllUserIds: ', updateAllUserIds);

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
    createUserMutation({
      variables: {
        data: user,
      },
    }).then(newUser => {
      console.log('NewUser. newUser: ', newUser)
      updateAllUserIds(newUser.data.createUser.id)
    })
  }

  // TEMPLATES
  return (
    <>
      <button onClick={clickHandlerNewUser}>New User</button>
    </>
  )
}

export default NewUser