import React from 'react';
import Button from './Button';
import './FullHeader.scss';
import logo from '../fs-logo.png';

function FullHeader() {
  return (
    <header className="fs-header-full">
      <div className="fs-header-logo">
        <a href="#"><img src={logo} alt="Future State" /></a>
      </div>
      <div className="fs-header-nav">
        <Button type="filled" size="small" variant="primary">Get a Quote</Button>
      </div>
    </header>
  );
}

export default FullHeader;