import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";
import fetch from "node-fetch"; // node-fetch here to allow SSR

const client = new ApolloClient({
  link: new HttpLink({ uri: "/api/graphql", fetch: fetch}),   // link: new HttpLink({ uri: "/api/graphql", fetch: fetch as fetch}),
  cache: new InMemoryCache(),
});

// This default export is required
export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

// OLD version after project boilerplate with npm create next-app
// import '../styles/globals.css'
//
// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }
//
// export default MyApp
