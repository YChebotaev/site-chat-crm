import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { useModal } from "react-modal-hook";
import { DeleteSiteModal } from "../modals/DeleteSiteModal";
import "./ListOfSitesMenu.css";

export const DeleteButton = ({ siteId, disabled }) => {
  const [showModal, hideModal] = useModal(() => {
    const handleClose = () => {
      hideModal();
      window.location.reload();
    };

    return (
      <DeleteSiteModal
        siteId={siteId}
        onClose={handleClose}
        onCancel={hideModal}
      />
    );
  }, [siteId]);

  return (
    <Button onClick={showModal} color="danger" disabled={disabled}>
      Delete site
    </Button>
  );
};

export const ListOfSitesMenu = ({ siteId }) => {
  return (
    <div className="ListOfSitesMenu">
      <Button tag={Link} to={"/sites/add"}>
        Add site
      </Button>
      &nbsp;
      <Button tag={Link} to={`/sites/${siteId}/edit`} disabled={!siteId}>
        Edit
      </Button>
      &nbsp;
      <Button tag={Link} to={`/sites/${siteId}/snippet`} disabled={!siteId}>
        Show snippet
      </Button>
      &nbsp;
      <DeleteButton siteId={siteId} disabled={!siteId} />
    </div>
  );
};
