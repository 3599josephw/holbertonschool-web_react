import React from 'react';
import { getFullYear, getFooterCopy } from '../utils/utils';
import './Footer.css';


function Footer() {
  const year = getFullYear();
  const footerText = getFooterCopy(true);
  return (
    <p id="Copyright">
      Copyright {year} - {footerText}
    </p>
  );
}

export default Footer;
