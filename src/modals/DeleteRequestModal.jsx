import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ShowError } from "../components/ShowError";
import { useDeleteRequest } from "../hooks/useDeleteRequest";

export const DeleteRequestModal = ({ requestId, onClose, onCancel }) => {
  const [deleteRequest] = useDeleteRequest(requestId);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const handleDelete = async () => {
    setPending(false);
    setError(false);
    try {
      await deleteRequest();
      onClose();
    } catch (error) {
      setError(error);
    } finally {
      setPending(true);
    }
  };

  return (
    <Modal isOpen toggle={onCancel}>
      <ModalHeader toggle={onCancel}>Are you sure? </ModalHeader>
      <ModalBody>
        <ShowError error={error} />
        <p>Are you sure to delete this request?</p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete} disabled={pending}>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};
