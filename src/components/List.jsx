import React from 'react'; // always import core React library
import ListItem from './ListItem';
import PropTypes from 'prop-types';

// the component is a function! the name is capitalized and matches the filename
function List(props){
  // the return is JSX that renders content
  // map takes an iterated item (object) from an array and corresponding index position
  List.propTypes = {
    itemList: PropTypes.array
  }

  return (
    <div>
      <hr/>
      {props.itemList.map((item, index) =>
        <ListItem
          names={item.names}
          location={item.location}
          issue={item.issue}
          key={index}/>
      )}
    </div>
  );
}

export default List;
