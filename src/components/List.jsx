import React from "react"; // always import core React library
import ListItem from "./ListItem";

// the component is a function! the name is capitalized and matches the filename
function List(props){
  // the return is JSX that renders content
  return (
    <div>
      <h2>List Content</h2>
      <ListItem
        name="Chris Johnson"
        number="503-799-9447"
        location="Portland, OR"/>
    </div>
  );
}

export default List;
