import React from 'react';
import PropTypes from 'prop-types';
import List from './List';


function Admin(props){
  console.log(props.currentRouterPath);
  return(
    <div>
      <h2>Admin</h2>
      <List itemList={props.itemList}/>
    </div>
  );
}

Admin.propTypes = {
  itemList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default Admin;
