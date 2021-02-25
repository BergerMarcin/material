import {CreateUserDataInput} from "../graphql/types";

export const UserDAO = (): CreateUserDataInput => {
  return {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    city: '',
    createdAt: Date.now()
  }
}
