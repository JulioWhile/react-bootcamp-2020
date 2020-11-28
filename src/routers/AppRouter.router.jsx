import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LoginPage } from '../pages/Login/Login.page';
import { DashboardRouter } from './Dashboard.router';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}

        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route path="/" component={DashboardRouter} />
        </Switch>
      </div>
    </Router>
  );
};
