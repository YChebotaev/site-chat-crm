import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { ListOfSites } from "../components/ListOfSites";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export const SitesPage = () => {
  return (
    <MainLayout>
      <Breadcrumb>
        <BreadcrumbItem active>Sites</BreadcrumbItem>
      </Breadcrumb>
      <ListOfSites />
    </MainLayout>
  );
};
