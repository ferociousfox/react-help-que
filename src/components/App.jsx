import React from 'react'; // always import core React library
import Header from './Header';
import List from './List';

function App(props){ // the component is a function! the name is capitalized and matches the filename
  return ( // the return is JSX that renders content
    <div>
      <h1>React Prototype</h1>
      <h1>App Content</h1>
      <Header/>
      <List/>
    </div>
  );
}

export default App;
