import React from 'react';

// Import needed image
import stormtroopocat from '../../assets/images/stormtroopocat.png';

export default ({ url = stormtroopocat, altText="No Avatar" }) =>
  <img src={url} alt={altText} title={altText} />;
