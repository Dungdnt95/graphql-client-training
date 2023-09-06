import React, { useState } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import CreateUser from "./Components/CreateUser";
import ListOfUsers from "./Components/ListOfUsers";
function App() {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <ApolloProvider client={client}>
        <CreateUser />
        <ListOfUsers />
      </ApolloProvider>
    </>
  );
}

export default App;
