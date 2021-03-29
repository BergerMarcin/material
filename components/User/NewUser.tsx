import {gql} from "@apollo/client"
import {
  Scalars,
  CreateUserInput,
  useCreateUserMutation
} from "../../src/graphql/types"
import {useState} from 'react'

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
  console.log('NewUser. PROPS: updateAllUserIds: ', typeof updateAllUserIds);

  // STATES & their hooks for update
  const [localUser, setLocalUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  } as CreateUserInput)

  // GraphQL HOOKS for methods
  const [createUserMutation] = useCreateUserMutation()

  // METHODS
  const handleChange = (event, field: string): void => {
    setLocalUser(prevLocalUser => ({...prevLocalUser, [field]: event.target.value}))
  }

  const handleSubmitNewUser = (event): void => {
    event.preventDefault()
    createUserMutation({
      variables: {
        data: localUser,
      },
    }).then(newUser => {
      console.log('NewUser. newUser: ', newUser)
      updateAllUserIds(newUser.data.createUser.id)
    })
  }

  // TEMPLATES
  return (
    <>
      <form onSubmit={handleSubmitNewUser}>
        <div>
          <label htmlFor="firstName">First name: </label>
          <input type="text" name="firstName" value={localUser.firstName} required
                 onChange={event => handleChange(event, 'firstName')}/>
        </div>
        <div>
          <label htmlFor="lastName">Last name: </label>
          <input type="text" name="lastName" value={localUser.lastName} required
          onChange={event => handleChange(event, 'lastName')}/>
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={localUser.email} required
          onChange={event => handleChange(event, 'email')}/>
        </div>
        <div>
          <label htmlFor="phone">Phone: </label>
          <input type="text" name="phone" value={localUser.phone}
          onChange={event => handleChange(event, 'phone')}/>
        </div>
        <div>
          <label htmlFor="city">City: </label>
          <input type="text" name="city" value={localUser.city}
          onChange={event => handleChange(event, 'city')}/>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={localUser.password} required
          onChange={event => handleChange(event, 'password')}/>
        </div>
        <div>
          <input type="submit" value="New User"/>
        </div>
      </form>
    </>
  )
}

export default NewUser