import React from 'react';
import { Route, Link } from 'react-router-dom'
import Bread from './bread.component'


class Layout extends React.Component {
  render() {
    return (
      <section>
      <nav>
          <div className="nav-wrapper yellow darken-1">
            <a href="/main" className="brand-logo">Samwise Rowe</a>
            <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">
              <li><a href="/cake">Cake</a></li>
              <li><a href="/cookies">Cookies</a></li>
              <li><a href="/bread">Bread</a></li>
            </ul>
            <ul className="side-nav" id="mobile-demo">
              <li><a href="/cake">Cake</a></li>
              <li><a href="/cookies">Cookies</a></li>
              <li><a href="/bread">Bread</a></li>
            </ul>
          </div>
        </nav>
      <div className="container">
        <Route exact path='/cake' component={Bread} />
        <Route exact path='/bread' component={Bread} />
      </div>
      </section>
    );
  }
}

export default Layout;
