import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const DELETE_REQUEST = gql`
  mutation($id: ID) {
    deleteRequest(where: { id: $id }) {
      id
    }
  }
`;

export const useDeleteRequest = id => {
  const deleteRequest = useMutation(DELETE_REQUEST, {
    variables: { id }
  });

  return [deleteRequest];
};
