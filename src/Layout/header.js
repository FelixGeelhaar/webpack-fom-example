import React from 'react';

// Import needed image
import inspectocat from '../../assets/images/inspectocat.jpg';

// Import needed styles
import './header.scss';

export default() =>
  <header>
    <img src={inspectocat} alt="Inspectocat" />
    <h2>Find your Github Followers</h2>
  </header>;
