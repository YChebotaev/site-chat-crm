import Auth0 from "auth0-js";

const auth0 = new Auth0.WebAuth({
  domain: process.env.REACT_APP_AUTH0_DOMAIN,
  clientID: process.env.REACT_APP_AUTH0_CLIENT_ID,
  redirectUri: `${window.location.protocol}//${window.location.host}/auth/callback`,
  responseType: "token id_token",
  scope: "openid"
});

export const createAuth0 = () => {
  return auth0;
};
