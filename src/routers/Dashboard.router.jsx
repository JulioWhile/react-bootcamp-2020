import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Navbar } from '../components/Navbar/Navbar.component';
import { FavoritesPage } from '../pages/Favorites/Favorites.page';
import { HomePage } from '../pages/Home/Home.page';
import { VideoPage } from '../pages/Video/Video.page';

export const DashboardRouter = () => {
  return (
    <div>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/video/:videoId" component={VideoPage} />
          <Route exact path="/favorites" component={FavoritesPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </div>
  );
};
