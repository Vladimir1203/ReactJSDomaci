import React from 'react';
import './AppHeader.css';

const AppHeader = () => (
  <div className="wrapper">
    <ul>
      <li><a href="/" className="recipeBook">Najbolji programski jezici!</a></li>
      <li><a href="/">Jezici</a></li>
      <li><a href="/detalji">Detalji</a></li>
    </ul>
  </div>
);

AppHeader.propTypes = {};

AppHeader.defaultProps = {};

export default AppHeader;
