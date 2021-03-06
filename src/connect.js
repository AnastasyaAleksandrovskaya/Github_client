import {createHttpLink} from "apollo-link-http";
import {setContext} from "apollo-link-context";
import {AUTH_TOKEN} from "./constants";
import {ApolloClient} from "apollo-client";
import {InMemoryCache} from "apollo-cache-inmemory";

const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem(AUTH_TOKEN)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

export default client;
