import { Resolvers, UsersMvc } from "./types.tsx";

const store: UsersMvc[] = [
  {
    id: "1",
    firstName: "Marcin",
    lastName: "Berger Apollo",
    email: "marcin.berger@wp.pl",
    password: "1234",
    role: "SUPERADMIN",
    phone: "43523452345",
    city: "Błonie",
    rate: 5.0,
    createdAt: 6932816147687407617,
    updatedAt: 6932947852859541466
  },
  {
    id: "2",
    firstName: "Marian",
    lastName: "Berger Apollo",
    email: "marian.berger@wp.pl",
    password: "1234",
    role: "ADMIN",
    phone: "433452345",
    city: "Warszawa",
    rate: 4.3,
    createdAt: 6932846147687407617,
    updatedAt: 6932997852859541466
  },
  {
    id: "3",
    firstName: "Wacław",
    lastName: "Berger Apollo",
    email: "wacław.berger@wp.pl",
    password: "1234",
    role: "ADMIN",
    phone: "433452345",
    city: "Ryki",
    rate: 4.9,
    createdAt: 6933046147687407617,
    updatedAt: 6933197852859541466
  }
];

const resolvers: Resolvers = {
  Query: {
    allUsers: () => store,
    User: (_: any, { id }) =>
      store.find((u) => u.id  === id),
  },
};

export default resolvers;
