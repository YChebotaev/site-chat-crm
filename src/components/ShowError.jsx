import React from "react";
import { Alert } from "reactstrap";

export const ShowError = ({ error }) => {
  if (!error) {
    return null;
  } else if (error.stack) {
    return <Alert color="danger">{error.stack}</Alert>;
  } else if (error.error && error.error_description) {
    return (
      <Alert color="danger">
        {error.error}
        <br />
        {error.error_description}
      </Alert>
    );
  } else {
    debugger;
  }
};
