import React from 'react';

// Import needed image
import octobiwan from '../../assets/images/octobiwan.jpg';

// Import needed styles
import './error.scss';

export default({ error }) =>
  <div>
    {error && error.hasOwnProperty('status') ?
      <div id="error">
        <img src={octobiwan} alt="Octobiwan" />
        <h3>Error: <b>{error.status}</b> -> {error.message}</h3>
        <pre>{JSON.stringify(error)}</pre>
      </div> : null}
  </div>;
