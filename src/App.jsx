import React, { Fragment } from "react";
import { Header } from "./components/layouts";
import EnterpriseList from "./components/Enterprises/EnterpriseList";
import EditEnterprise from "./components/Enterprises/EditEnterprise";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateEnterprise from "./components/Enterprises/CreateEnterprise";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export default class extends React.Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/enterprises" component={EnterpriseList} />
            <Route exact path="/new-enterprise" component={CreateEnterprise} />
            <Route
              exact
              path="/enterprises/:id/edit"
              component={CreateEnterprise}
            />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}
