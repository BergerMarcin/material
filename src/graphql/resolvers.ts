import {Resolvers, RolesTypes, UsersMvc} from "./types";

let store: UsersMvc[] = [
  {
    id: "1",
    firstName: "Marcin",
    lastName: "Berger Apollo",
    email: "marcin.berger@wp.pl",
    password: "1234",
    role: RolesTypes.Superadmin,
    phone: "43523452345",
    city: "Błonie",
    ratesValue: 5,
    ratesCount: 1,
    createdAt: 6932816147687407617,
    updatedAt: 6932947852859541466
  },
  {
    id: "2",
    firstName: "Marian",
    lastName: "Berger Apollo",
    email: "marian.berger@wp.pl",
    password: "1234",
    role: RolesTypes.Admin,
    phone: "433452345",
    city: "Warszawa",
    ratesValue: 18,
    ratesCount: 5,
    createdAt: 6932846147687407617,
    updatedAt: 6932997852859541466
  },
  {
    id: "3",
    firstName: "Wacław",
    lastName: "Berger Apollo",
    email: "wacław.berger@wp.pl",
    password: "1234",
    role: RolesTypes.Admin,
    phone: "433452345",
    city: "Ryki",
    ratesValue: 19,
    ratesCount: 5,
    createdAt: 6933046147687407617,
    updatedAt: 6933197852859541466
  }
]

const resolvers: Resolvers = {
  Query: {
    allUsers: () => store,

    User: (_: any, {id}) =>
      store.find((u) => u.id === id),
  },

  Mutation: {
    createUser: (_: any, { data }) => {
      let newUser: UsersMvc = {
        ...data,
        id: Math.floor(Math.random() * 10000).toString(),
        role: RolesTypes.User,
        ratesValue: 0,
        ratesCount: 0,
        createdAt: Date.now(),
        updatedAt: null
      }
      store = store.concat(newUser);
      console.log('createUser. Created newUser: ', newUser);
      console.log('createUser. store: ', store);
      return newUser;
    },

    updateUserBasicData: (_: any, {id, data}) => {
      let user = store.find(u => u.id === id);
      if (user) {
        user = {
          ...user,
          ...data,
          updatedAt: Date.now()
        }
        store = store.filter(u => u.id !== id).concat(user);
      }
      console.log('updateUserBasicData. Updated user: ', user);
      return user;
    }
  }
}

export default resolvers;
