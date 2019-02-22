import { objectStorage } from "./objectStorage";

export const handleSession = authResult => {
  if (authResult) {
    objectStorage.setItem("isAuthenticated", true);
    objectStorage.setItem("isAuthenticating", false);
    objectStorage.setItem("accessToken", authResult.accessToken);
    objectStorage.setItem("idToken", authResult.idToken);
    objectStorage.setItem("expiresIn", authResult.expiresIn);
  } else {
    debugger;
  }
};
