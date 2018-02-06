import React from 'react';
import { Link } from 'react-router-dom';

function Header(props){
  return (
    <div>
      <h2>Header Content</h2>
      <Link to="/">Home</Link> | <Link to="/newitem">Create Item</Link>
    </div>
  );
}

export default Header;
