import React from 'react';
import moment from 'moment';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import HomeNight from './pages/Home/HomeNight';
import AccessTerms from './pages/Terms/AccessTerms';
import PrivacyPolicy from './pages/Terms/PrivacyPolicy';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          { moment().isAfter("23:00") && moment().isBefore("06:00") ? ( <HomeNight /> ) : ( <Home /> ) }
        </Route>
        <Route exact path="/AccessTerms">
          <AccessTerms />
        </Route>
        <Route exact path="/PrivacyPolicy">
          <PrivacyPolicy />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
