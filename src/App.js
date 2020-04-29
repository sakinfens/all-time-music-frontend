import React from 'react';
import ApolloClient from 'apollo-client';
import SongList from './components/SongList';
import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';

import './App.css';

const httpLink = createHttpLink({
  uri: 'https://intense-shelf-73978.herokuapp.com/'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});


function App() {
  return (
    <div>
    <ApolloProvider client={client}>

       <SongList />
    </ApolloProvider>
    </div>
  );
}

export default App;
