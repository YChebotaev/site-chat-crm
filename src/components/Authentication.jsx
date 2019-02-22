import React, { useState, useEffect } from "react";
import { objectStorage } from "../lib/objectStorage";
import { createAuth0 } from "../lib/createAuth0";
// import { getRandomNonce } from "../lib/getRandomNonce";
import { ShowError } from "./ShowError";
import { handleSession } from "../lib/handleSession";

export const Authentication = ({ children }) => {
  const isAuthenticated = objectStorage.getItem("isAuthenticated");
  const isAuthenticating = objectStorage.getItem("isAuthenticating");
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  if (isAuthenticating) {
    return children(isAuthenticated);
  }

  if (isAuthenticated) {
    return children(isAuthenticated);
  } else {
    useEffect(() => {
      setError(null);
      setPending(true);
      const auth0 = createAuth0();
      auth0.checkSession({}, (error, authResult) => {
        setPending(false);
        if (error && error.error !== "login_required") {
          setError(error);
        } else if (!error) {
          handleSession(authResult);
          window.location.reload();
        }
      });
    }, []);
  }

  if (error) {
    return <ShowError error={error} />;
  }

  if (pending) {
    return null;
  }

  return children(isAuthenticated);

  // ---------------------------------------------------------------------------------

  // const [isAuthenticated, setIsAuthenticated] = useState(
  //   objectStorage.getItem("isAuthenticated")
  // );
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // if (!isAuthenticated) {
  //   useEffect(() => {
  //     const auth0 = createAuth0();
  //     setError(null);
  //     setIsPending(true);
  //     auth0.checkSession(
  //       {
  //         // nonce: getRandomNonce()
  //       },
  //       (error, authResult) => {
  //         setIsPending(false);
  //         if (error) {
  //           if (error.error === "login_required") {
  //             setIsAuthenticated(false);
  //           } else {
  //             setError(error);
  //           }
  //         } else {
  //           setIsAuthenticated(true);
  //           handleSession(authResult);
  //         }
  //       }
  //     );
  //   }, []);
  // } else {
  //   useEffect(() => {
  //     setIsPending(false);
  //   }, []);
  // }

  // if (isPending) {
  //   return null;
  // }

  // if (error) {
  //   return <ShowError error={error} />;
  // }

  // return children(isAuthenticated);

  // ---------------------------------------------------------------------------------

  // const isAuthenticated = objectStorage.getItem("isAuthenticated");

  // useEffect(() => {
  //   const auth0 = createAuth0();
  //   auth0.parseHash((error, authResult) => {
  //     if (authResult && authResult.accessToken && authResult.idToken) {
  //       objectStorage.setItem("isAuthenticated", true);
  //       window.location.reload();
  //     } else {
  //       console.error(error);
  //     }
  //   });
  // }, []);

  // return children(isAuthenticated);
};
