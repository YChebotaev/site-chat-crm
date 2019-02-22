import React, { useState } from "react";
import { useSites } from "../hooks/useSites";
import BootstrapTable from "react-bootstrap-table-next";
import overlayFactory from "react-bootstrap-table2-overlay";
import { ListOfSitesMenu } from "./ListOfSitesMenu";

const columns = [
  {
    dataField: "domain",
    text: "Domain"
  }
];

export const ListOfSites = () => {
  const [sites, loading] = useSites();
  const [selectedSiteId, setSelectedSiteId] = useState(null);

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    selected: selectedSiteId ? [selectedSiteId] : undefined,
    onSelect: row => {
      setSelectedSiteId(row.id);
    }
  };

  return (
    <>
      <ListOfSitesMenu siteId={selectedSiteId} />
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={sites}
        columns={columns}
        selectRow={selectRow}
        noDataIndication="No requests found"
        loading={loading}
        overlay={overlayFactory()}
      />
    </>
  );
};
