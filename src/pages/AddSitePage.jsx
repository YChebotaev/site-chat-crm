import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { SiteCreateForm } from "../forms/SiteCreateForm";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";

export const AddSitePage = () => {
  return (
    <MainLayout>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/sites/">Sites</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>New site</BreadcrumbItem>
      </Breadcrumb>
      <SiteCreateForm />
    </MainLayout>
  );
};
