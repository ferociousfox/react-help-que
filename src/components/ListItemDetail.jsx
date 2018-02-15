import React from 'react';
import PropTypes from 'prop-types';

function ListItemDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedItem.names} - {props.selectedItem.location}</h1>
      <h2>Submitted {props.selectedItem.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedItem.issue}</em></h4>
    </div>
  );
}

ListItemDetail.propTypes = {
  selectedItem: PropTypes.object
};

export default ListItemDetail;
