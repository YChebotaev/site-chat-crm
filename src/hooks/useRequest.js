import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_REQUEST = gql`
  query($id: ID) {
    request(where: { id: $id }) {
      id
      status
      phone
      email
      text
      date
      time
      type
      isNew
      site {
        domain
      }
    }
  }
`;

export const useRequest = id => {
  const {
    data: { request },
    loading
  } = useQuery(GET_REQUEST, { variables: { id } });
  return [request, loading];
};
