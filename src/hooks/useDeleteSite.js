import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const DELETE_SITE = gql`
  mutation($id: ID) {
    deleteSite(where: { id: $id }) {
      id
    }
  }
`;

export const useDeleteSite = id => {
  const deleteSite = useMutation(DELETE_SITE, {
    variables: { id }
  });

  return [deleteSite];
};
