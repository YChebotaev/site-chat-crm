import { useEffect } from "react";
import { createAuth0 } from "../lib/createAuth0";

export const AuthCallbackPage = () => {
  useEffect(() => {
    const auth0 = createAuth0();
    auth0.popup.callback();
  }, []);

  return null;
};
