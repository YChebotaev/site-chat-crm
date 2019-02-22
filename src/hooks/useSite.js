import { useQuery, useMutation } from "react-apollo-hooks";
import gql from "graphql-tag";

const GET_SITE = gql`
  query($id: ID) {
    site(where: { id: $id }) {
      id
      domain
    }
  }
`;

const UPDATE_SITE = gql`
  mutation($id: ID, $domain: String) {
    updateSite(data: { domain: $domain }, where: { id: $id }) {
      id
      domain
    }
  }
`;

export const useSite = siteId => {
  const updateSite = useMutation(UPDATE_SITE);
  const { data, loading } = useQuery(GET_SITE, {
    variables: {
      id: siteId
    }
  });

  const saveSite = site => {
    return updateSite({
      variables: {
        id: siteId,
        ...site
      }
    });
  };

  return [data.site, saveSite, loading];
};
