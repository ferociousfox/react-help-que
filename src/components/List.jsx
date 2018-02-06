import React from 'react'; // always import core React library
import ListItem from './ListItem';

// hardcoded list
let masterItemList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

// the component is a function! the name is capitalized and matches the filename
function List(){
  // the return is JSX that renders content
  // map takes an iterated item (object) from an array and corresponding index position
  return (
    <div>
      <hr/>
      {masterItemList.map((object, index) =>
        <ListItem
          names={object.names}
          location={object.location}
          issue={object.issue}
          key={index}/>
      )}
    </div>
  );
}

export default List;
