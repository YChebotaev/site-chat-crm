import Auth0 from "auth0-js";

const auth0 = new Auth0.WebAuth({
  domain: "ychebotaev.eu.auth0.com",
  clientID: "7QrzStc3GoCLFsYtdJOpM6fAs7usdfBM",
  redirectUri: "http://localhost:3000/auth/callback",
  responseType: "token id_token",
  scope: "openid"
});

export const createAuth0 = () => {
  return auth0;
};
