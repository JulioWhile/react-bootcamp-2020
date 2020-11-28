import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <Link className="navbar-brand" to="/">
        YouTube
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink activeClassName="active" className="nav-item nav-link" exact to="/">
            Home
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/favorites"
          >
            Favorites
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
