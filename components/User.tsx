import { gql } from "@apollo/client";
import { useUserQuery } from "../src/graphql/types";

interface Props {
  id: String;
}

gql`
    query User($id: ID!) {
        User(id: $id) {
            firstName
            lastName
            email
            phone
            rate
        }
    }
`;

const User = (props: Props) => {
  const { id } = props;
  console.log('User. id: ', id);
  const { loading, data } = useUserQuery({
    variables: {
      id,
    },
  });
  if (!loading) console.log(data);
  let content = <td colSpan={5}>Loading ...</td>;
  if (!loading && data) {
    const { firstName, lastName, email, phone, rate } = data.User;
    content = (
      <>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{rate}</td>
      </>
    );
  }
  return <tr>{content}</tr>;
};

export default User;
