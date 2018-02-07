import React from 'react'; // always import core React library
import PropTypes from 'prop-types'; // needed where PropTypes are declared - under the function code block

// the component is a function! the name is capitalized and matches the filename
function ListItem(props){ // requires "props" parameter to store incoming properties
  // styles live inside the component they affect
  let css = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    padding: '20px',
    margin: '5px'
  };
  // the return is JSX that renders content
  return (
    <div style={css}>
      <style jsx>{`
        li{
          background-color: peachpuff;
          list-style: none;
          text-align: left;
        }`}</style>
      <h3>ListItem Content</h3>
      <ul>
        <li>Name: {props.names}</li>
        <li>Number: {props.issue}</li>
        <li>Location: {props.location}</li>
      </ul>
    </div>
  );
}

// import PropTypes at top, then attach propTypes as property to function with an object that has key value pairs for checking types
ListItem.propTypes = {
  names: PropTypes.string,
  issue: PropTypes.string.isRequired, // this property is required
  location: PropTypes.string
};

export default ListItem;
