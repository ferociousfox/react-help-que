import React from 'react'; // always import core React library
import PropTypes from 'prop-types'; // needed where PropTypes are declared - under the function code block

// the component is a function! the name is capitalized and matches the filename
function ListItem(props){ // requires "props" parameter to store incoming properties
  // the return is JSX that renders content
  return (
    <div>
      <h3>ListItem Content</h3>
      <ul>
        <li>Name: {props.name}</li>
        <li>Number: {props.number}</li>
        <li>Location: {props.location}</li>
      </ul>
    </div>
  );
}

// import PropTypes at top, then attach propTypes as property to function with an object that has key value pairs for checking types
ListItem.propTypes = {
  name: PropTypes.string.isRequired, // this property is required
  number: PropTypes.string,
  location: PropTypes.string
};

export default ListItem;
