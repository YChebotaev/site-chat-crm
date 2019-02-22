import React, { useState, useCallback } from "react";
import { Button } from "reactstrap";
import { useModal } from "react-modal-hook";
import { DeleteRequestModal } from "../modals/DeleteRequestModal";
import "./ListOfRequestsMenu.css";
import { useRequest } from "../hooks/useRequest";
import { get } from "lodash";
import { useRequestCallback } from "../hooks/useRequestCallback";
import { ShowError } from "./ShowError";

export const DeleteButton = ({ requestId, disabled }) => {
  const [showModal, hideModal] = useModal(() => {
    const handleClose = () => {
      hideModal();
      window.location.reload();
    };

    return (
      <DeleteRequestModal
        requestId={requestId}
        onClose={handleClose}
        onCancel={hideModal}
      />
    );
  }, [requestId]);

  return (
    <Button onClick={showModal} color="danger" disabled={disabled}>
      Delete request
    </Button>
  );
};

export const MarkCallback = ({ onError, requestId, disabled }) => {
  const { markCallback } = useRequestCallback(requestId);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useCallback(() => {
    if (error) {
      onError(error);
    }
  }, [error]);

  const handleClick = async () => {
    setPending(true);
    setError(null);
    try {
      await markCallback();
      window.location.reload();
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      color="primary"
      disabled={pending || disabled}
    >
      Mark CallBack
    </Button>
  );
};

export const UnmarkCallback = ({ onError, requestId, disabled }) => {
  const { unmarkCallback } = useRequestCallback(requestId);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  useCallback(() => {
    if (error) {
      onError(error);
    }
  }, [error]);

  const handleClick = async () => {
    setPending(true);
    setError(null);
    try {
      await unmarkCallback();
      window.location.reload();
    } catch (error) {
      setError(error);
    } finally {
      setPending(false);
    }
  };

  return (
    <Button
      onClick={handleClick}
      color="secondary"
      disabled={pending || disabled}
    >
      Unmark CallBack
    </Button>
  );
};

export const CallbackButton = ({ onError, requestId, isNew, disabled }) => {
  if (isNew) {
    return (
      <MarkCallback
        onError={onError}
        requestId={requestId}
        disabled={disabled}
      />
    );
  } else {
    return (
      <UnmarkCallback
        onError={onError}
        requestId={requestId}
        disabled={disabled}
      />
    );
  }
};

export const ListOfRequestsMenu = ({ requestId }) => {
  const [request, loading] = useRequest(requestId);
  const [error, setError] = useState(null);

  if (loading) {
    return null;
  }

  return (
    <>
      <ShowError error={error} />
      <div className="ListOfRequestsMenu">
        <CallbackButton
          requestId={requestId}
          isNew={get(request, "isNew")}
          disabled={!requestId}
          onError={setError}
        />
        &nbsp;
        <DeleteButton requestId={requestId} disabled={!requestId} />
      </div>
    </>
  );
};
