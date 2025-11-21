import { useState } from 'react'
import './App.css'
import Layout from "./components/layout/Layout.jsx";

import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";
import {ApolloProvider} from "@apollo/client/react";

const client = new ApolloClient({
    link: new HttpLink({ uri: "localhost:4000/graphql" }),
    cache: new InMemoryCache(),
});

function App() {
  const [count, setCount] = useState(0)

  return (
    <ApolloProvider client = {client}>
      <div className="bg-white">
        <Layout/>
      </div>
    </ApolloProvider>
  )
}

export default App
