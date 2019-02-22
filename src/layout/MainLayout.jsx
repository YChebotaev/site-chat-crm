import React from "react";
import { Container } from "reactstrap";
import { TopBar } from "../components/TopBar";
import { Sider } from "../components/Sider";
import "./MainLayout.css";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <TopBar />
      <Container>
        <div className="row MainLayout__container">
          <div className="col-2 MainLayout__sider">
            <Sider />
          </div>
          <div className="col-10 MainLayout__content">{children}</div>
        </div>
      </Container>
    </div>
  );
};
