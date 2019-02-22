import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const MARK_CALLBACK = gql`
  mutation($id: ID) {
    updateRequest(where: { id: $id }, data: { isNew: false }) {
      id
    }
  }
`;

const UNMARK_CALLBACK = gql`
  mutation($id: ID) {
    updateRequest(where: { id: $id }, data: { isNew: true }) {
      id
    }
  }
`;

export const useRequestCallback = id => {
  const markCallback = useMutation(MARK_CALLBACK, { variables: { id } });
  const unmarkCallback = useMutation(UNMARK_CALLBACK, { variables: { id } });
  return { markCallback, unmarkCallback };
};
