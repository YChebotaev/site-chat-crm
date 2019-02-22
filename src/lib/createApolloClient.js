import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";

export const createApolloClient = () => {
  const httpLink = createHttpLink({
    uri: "https://api-euwest.graphcms.com/v1/cjsajd6d3ciq801gjs9v7ff7j/master"
  });

  const authLink = setContext((_, { headers }) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ2ZXJzaW9uIjoxLCJ0b2tlbklkIjoiZjczZTc1NGUtYjA1OC00ZmYxLTkzNTctYThiMWNlMGFhMTQ5In0.cP4R3xwFgnVwZHhqqYA1s3UqAiXEsndBFEo-FyaTsPE";
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : ""
      }
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });
};
