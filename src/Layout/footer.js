import React from 'react';

// Import needed styles
import './footer.scss';

export default() =>
  <footer>
    &copy; {new Date().getFullYear()} Felix Geelhaar felix@felixgeelhaar.de
  </footer>;
