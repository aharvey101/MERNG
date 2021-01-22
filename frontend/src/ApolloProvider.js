import App from './App.js'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache(),
})

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
