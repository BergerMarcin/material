import {
  Scalars,
  useIndexQuery
} from "../src/graphql/types";
import {gql} from "@apollo/client";
import User from "../components/User";
import NewUser from "../components/NewUser";
import {useState, ChangeEvent, useEffect} from "react";

gql`
    query Index {
        allUsers {
            id
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
    setAllUserIds(data?.allUsers?.map(d => d.id)
        .slice()
        .sort((a, b) => a.localeCompare(b))
      || []);
  }, [data?.allUsers]);
  useEffect(() => {
    setAllUserElements(allUserIds?.map(uId => <User id={uId} key={uId}/>));
  }, [allUserIds]);

  // METHODS
  const updateAllUserIds = (newUserId: Scalars["String"]): void => {
    console.log('Index. newUser: ', newUserId)
    setAllUserIds((prevAllUserIds: String[]): String[] => {
      return [...prevAllUserIds, newUserId]
    })
    console.log('Index. allUserIds AFTER MUTATION: ', allUserIds)
  }

  // TEMPLATE
  return loading ? null : allUserElements.length > 0 ? (
    <>
      <NewUser updateAllUserIds={updateAllUserIds}/>
      <table style={{border: 3}}>
        <tbody>{allUserElements}</tbody>
      </table>
    </>
  ) : (
    <>
      <div>Oops! No users!</div>
    </>
  )
}

export default Index;