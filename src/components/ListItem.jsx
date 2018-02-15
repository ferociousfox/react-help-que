import React from 'react'; // always import core React library
import PropTypes from 'prop-types'; // needed where PropTypes are declared - under the function code block
// import Moment from 'moment';
// the component is a function! the name is capitalized and matches the filename
function ListItem(props){ // requires "props" parameter to store incoming properties
  // styles live inside the component they affect
  let css = {
    backgroundColor: '#ecf0f1',
    fontFamily: 'sans-serif',
    padding: '20px',
    margin: '5px'
  };
  let cssUl = {
    padding: 15,
    borderRadius: 30,
    backgroundColor: 'honeydew'
  };
  let cssSpan = {
    fontWeight: 900
  };
  const itemInfo =
    <div style={css}>
      <style jsx>{`
        li{
          background-color: peachpuff;
          list-style: none;
          text-align: left;
        }
    `}</style>
      <h3>ListItem Content</h3>
      <ul style={cssUl}>
        <li><em>{props.formattedWaitTime}</em></li>
        <li><span style={cssSpan}>Name:</span> {props.names}</li>
        <li><span style={cssSpan}>Location:</span> {props.location}</li>
        <li>{props.keg}</li>
      </ul>
    </div>;

  // the return is JSX that renders content
  if (props.currentRouterPath === '/admin'){
    //try removing the curly brace, it works still.
    return(
      <div onClick={() => {props.onItemSelection(props.itemId);}}>
        {itemInfo}
      </div>
    );
  } else { // YA GOTTA WRAP THE RETURN IN A DIV, YOU JUST GOTTA
    return (
      <div>
        {itemInfo}
      </div>
    );
  }
}
// import PropTypes at top, then attach propTypes as property to function with an object that has key value pairs for checking types
ListItem.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  keg: PropTypes.number,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onItemSelection: PropTypes.func,
  itemId: PropTypes.string.isRequired
};

export default ListItem;
