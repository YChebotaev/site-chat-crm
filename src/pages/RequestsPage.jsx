import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { ListOfRequests } from "../components/ListOfRequests";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export const RequestsPage = () => {
  return (
    <MainLayout>
      <Breadcrumb>
        <BreadcrumbItem active>Requests</BreadcrumbItem>
      </Breadcrumb>
      <ListOfRequests />
    </MainLayout>
  );
};
