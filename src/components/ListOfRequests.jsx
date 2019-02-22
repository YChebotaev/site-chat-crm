import React, { useState } from "react";
import { useRequests } from "../hooks/useRequests";
import BootstrapTable from "react-bootstrap-table-next";
import overlayFactory from "react-bootstrap-table2-overlay";
import { ListOfRequestsMenu } from "./ListOfRequestsMenu";

const columns = [
  {
    dataField: "phone",
    text: "Phone Number"
  },
  {
    dataField: "date",
    text: "Date",
    formatter: value => {
      return [
        "Прямо сейчас",
        "В течении часа",
        "В ближайший рабочий день",
        "В эти выходные"
      ][value];
    }
  },
  {
    dataField: "time",
    text: "Time",
    formatter: value => {
      return [
        "С утра",
        "Днем",
        "В обед",
        "После обеда",
        "Вечером",
        "Ночью",
        "В первой половине дня",
        "Во второй половине дня"
      ][value];
    }
  },
  {
    dataField: "email",
    text: "Email Address"
  },
  {
    dataField: "text",
    text: "Email Message"
  },
  {
    dataField: "site.domain",
    text: "Site"
  }
];

export const ListOfRequests = () => {
  const [requests, loading] = useRequests();
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const selectRow = {
    mode: "radio",
    clickToSelect: true,
    selected: selectedRequestId ? [selectedRequestId] : undefined,
    onSelect: row => {
      setSelectedRequestId(row.id);
    }
  };

  const getRowClasses = row => {
    const classes = [];
    if (row.isNew) {
      classes.push("is-new");
    }
    return classes;
  };

  return (
    <>
      <ListOfRequestsMenu requestId={selectedRequestId} />
      <BootstrapTable
        bootstrap4
        keyField="id"
        data={requests}
        columns={columns}
        selectRow={selectRow}
        noDataIndication="No requests found"
        loading={loading}
        overlay={overlayFactory()}
        rowClasses={getRowClasses}
      />
    </>
  );
};
