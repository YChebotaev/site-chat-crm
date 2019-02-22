import { useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

export const useAddSite = () => {
  const createSite = useMutation(gql`
    mutation($domain: String) {
      createSite(data: { domain: $domain }) {
        id
      }
    }
  `);

  return [
    async variables => {
      const { data } = await createSite({
        variables
      });
      return data.createSite;
    }
  ];
};
