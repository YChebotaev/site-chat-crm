import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_SITES = gql`
  query {
    sites {
      id
      domain
    }
  }
`;

export const useSites = () => {
  const { data, loading } = useQuery(GET_SITES);

  return [data.sites || [], loading];
};
