import React from 'react'; // always import core React library

// the component is a function! the name is capitalized and matches the filename
function Header(props){
  // the return is JSX that renders content
  return (
    <div>
      <h2>Header Content</h2>
    </div>
  );
}

export default Header;
