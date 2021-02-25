import {RolesTypes, Scalars, UsersMvc} from "../src/graphql/types";
import {useState} from "react";

const Index = () => {
  const [users] = useState([
    {
      id: "1",
      firstName: "Marcin",
      lastName: "Berger",
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
      lastName: "Berger",
      email: "marian.berger@wp.pl",
      password: "1234",
      role: "ADMIN",
      phone: "433452345",
      city: "Warszawa",
      rate: 4.3,
      createdAt: 6932846147687407617,
      updatedAt: 6932997852859541466
    },
  ] as UsersMvc[]);
  const usersDPO = users.map((u, i) => (
    <tr key={u.id}>
      <td>{i + 1}</td>
      <td>{u.firstName}</td>
      <td>{u.lastName}</td>
      <td>{u.email}</td>
    </tr>
  ));
  return users.length > 0 ? (
    <table>
      <tbody>{usersDPO}</tbody>
    </table>
  ) : (
    <div>Oops! No users!</div>
  );
};

export default Index;