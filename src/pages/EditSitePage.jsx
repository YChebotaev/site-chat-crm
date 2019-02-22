import React from "react";
import { MainLayout } from "../layout/MainLayout";
import { SiteEditForm } from "../forms/SiteEditForm";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { useSite } from "../hooks/useSite";

export const EditSitePage = withRouter(({ match: { params } }) => {
  const [site] = useSite(params.siteId);

  return (
    <MainLayout>
      <Breadcrumb>
        <BreadcrumbItem>
          <Link to="/sites/">Sites</Link>
        </BreadcrumbItem>
        {site && <BreadcrumbItem active>{site.domain}</BreadcrumbItem>}
      </Breadcrumb>
      <SiteEditForm />
    </MainLayout>
  );
});
