import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { ApolloProvider } from "react-apollo-hooks";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router";
import { ModalProvider } from "react-modal-hook";
import { createApolloClient } from "./lib/createApolloClient";
import { Authentication } from "./components/Authentication";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";
import { RequestsPage } from "./pages/RequestsPage";
import { SitesPage } from "./pages/SitesPage";
import { EditSitePage } from "./pages/EditSitePage";
import { AddSitePage } from "./pages/AddSitePage";
import { SnippetSitePage } from "./pages/SnippetSitePage";
import { AuthCallbackPage } from "./pages/AuthCallbackPage";

// http://localhost:3000/auth/callback#access_token=1zNWnHEJYxsfFOmxVAjHy5sp7_asbYOx&expires_in=7200&token_type=Bearer&state=F-oZG2E9i7HtftH~-JVvnHemJwk6L3g_&id_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9UWkNNak14TmpoQ01UYzJNVFZDTmtJd05FRkNNVFEyUWtZeVJFWXdOemhFTXpZMFJEZzRRZyJ9.eyJpc3MiOiJodHRwczovL3ljaGVib3RhZXYuZXUuYXV0aDAuY29tLyIsInN1YiI6Imdvb2dsZS1vYXV0aDJ8MTAzMzM0OTkwNTMwODg1NDc0NzkzIiwiYXVkIjoiN1FyelN0YzNHb0NMRnNZdGRKT3BNNmZBczd1c2RmQk0iLCJpYXQiOjE1NTA2NTMyMTEsImV4cCI6MTU1MDY4OTIxMSwiYXRfaGFzaCI6IlBpcUtQUWtYczlKOF91OTNjSHBPelEiLCJub25jZSI6ImNEeFJhQnB4RTBqdGg5VG1PQjUuS2dVNDduQy5tUGRtIn0.OfYDxYsK_Zw_dP3FT_rwtjKS_oYYPGVtCNsIckgs-Ym06Vyl4wBjwTrloZoqz2tQcpjzA6UpNOk0apRhRsLsPAiw7WZhS4-5jAgFZXfh97Rdh0hahA92jiNMx2zshNYP6Z4Bop-lnU-VWmfeeAsap4C64YFLfT3DUVbF7VY6uFbqwEAF4gGijiMC8UjDs2XVWd0MOQp3Ae_X65ecu4F61O6AYYWQJgMvTY781zRmOTYBj31gUlj0Anslqj2AUxS2CW_vbu9PtNVS6H6Kt300n-FUkCPQeQHXEAH4RTU-j23qIiLjh0razdhC3BGjeH9LKSbMUtLaiXQH2DHXv_OfEA

import "./styles/react-bootstrap-table.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const apolloClient = createApolloClient();

const app = (
  <ApolloProvider client={apolloClient}>
    <Suspense fallback="Loading...">
      <ModalProvider>
        <Authentication>
          {isAuthenitcated => {
            if (isAuthenitcated) {
              return (
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/" component={MainPage} />
                    <Route exact path="/sites/" component={SitesPage} />
                    <Route
                      exact
                      path="/sites/:siteId/edit"
                      component={EditSitePage}
                    />
                    <Route
                      exact
                      path="/sites/:siteId/snippet"
                      component={SnippetSitePage}
                    />
                    <Route exact path="/sites/add" component={AddSitePage} />
                    <Route exact path="/requests/" component={RequestsPage} />
                  </Switch>
                </BrowserRouter>
              );
            } else {
              return (
                <BrowserRouter>
                  <Switch>
                    <Route exact path="/login/" component={LoginPage} />
                    <Route
                      exact
                      path="/auth/callback/"
                      component={AuthCallbackPage}
                    />
                    <Redirect from="*" to="/login/" />
                  </Switch>
                </BrowserRouter>
              );
            }
          }}
        </Authentication>
      </ModalProvider>
    </Suspense>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
