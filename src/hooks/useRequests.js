import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";
import { useSites } from "./useSites";
import { map } from "lodash";

export const useRequests = () => {
  const [sites] = useSites();
  const sitesIds = map(sites, "id");

  const {
    data: { requests = [] },
    loading
  } = useQuery(
    gql`
      query {
        requests (where: {
          site: {
            id_in: ${JSON.stringify(sitesIds)}
          }
        }
        orderBy: createdAt_DESC
        ) {
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
    `
  );
  return [requests, loading];
};
