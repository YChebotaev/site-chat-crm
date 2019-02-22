import { useEffect } from "react";
import { createAuth0 } from "../lib/createAuth0";
import { withRouter } from "react-router";
import { handleSession } from "../lib/handleSession";
import { objectStorage } from "../lib/objectStorage";

export const LoginPage = withRouter(({ history }) => {
  useEffect(() => {
    const auth0 = createAuth0();

    objectStorage.setItem("isAuthenticating", true);
    auth0.popup.authorize(
      {
        redirectUri: "http://localhost:3000/auth/callback"
      },
      (error, authResult) => {
        if (error) {
          console.error(error);
        } else {
          handleSession(authResult);
          history.replace("/");
        }
      }
    );
  }, []);

  return null;
});
