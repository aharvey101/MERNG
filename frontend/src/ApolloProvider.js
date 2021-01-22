import App from './App.js'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'

const cache = new InMemoryCache()
const link = createHttpLink({
  uri: 'http://localhost:5000/',
})

const client = new ApolloClient({
  // Provide required constructor fields
  cache: cache,
  link: link,
})
export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
