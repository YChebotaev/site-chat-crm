import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ShowError } from "../components/ShowError";
import { useDeleteSite } from "../hooks/useDeleteSite";

export const DeleteSiteModal = ({ siteId, onClose, onCancel }) => {
  const [deleteSite] = useDeleteSite(siteId);
  const [error, setError] = useState(null);
  const [pending, setPending] = useState(false);

  const handleDelete = async () => {
    setPending(false);
    setError(false);
    try {
      await deleteSite();
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
        <p>Are you sure to delete this site?</p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={handleDelete} disabled={pending}>
          Delete
        </Button>
      </ModalFooter>
    </Modal>
  );
};
