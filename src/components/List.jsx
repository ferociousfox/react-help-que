import React from 'react'; // always import core React library
import ListItem from './ListItem';
import PropTypes from 'prop-types';

// the component is a function! the name is capitalized and matches the filename
function List(props){
  // the return is JSX that renders content
  // map takes an iterated item (object) from an array and corresponding index position
  console.log(props.itemList);

  return (
    <div>
      <hr/>
      {Object.keys(props.itemList).map((itemId) =>
        let item = props.itemList[itemId];
          return <ListItem
          names={item.names}
          location={item.location}
          issue={item.issue}
          formattedWaitTime={item.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={item.id}
          onItemSelection={props.onItemSelection}
          itemId={item.id} />
      )}
    </div>
  );
}

List.propTypes = {
  itemList: PropTypes.object
};

export default List;
