import React from 'react';
import PropTypes from 'prop-types';
import List from './List';
import ListItemDetail from './ListItemDetail';

function Admin(props){
  console.log(props.currentRouterPath);
  let optionalSelecedItemContent = null;
  if (props.selectedItem != null){
    optionalSelecedItemContent = <ListItemDetail />;
  }
  return(
    <div>
      <h2>Admin</h2>
      {optionalSelecedItemContent}
      <List
        itemList={props.itemList}
        currentRouterPath={props.currentRouterPath}
        onItemSelection={props.onItemSelection}
        />
    </div>
  );
}

Admin.propTypes = {
  itemList: PropTypes.array,
  currentRouterPath: PropTypes.string,
  onItemSelection: PropTypes.func.isRequired,
  selectedItem: PropTypes.object
};

export default Admin;
