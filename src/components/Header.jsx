import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h2>Header Content</h2>
      <Link to="/">Home</Link> | <Link to="/newitem">Create Item</Link>
    </div>
  );
}

export default Header;
