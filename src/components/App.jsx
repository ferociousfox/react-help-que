import React from 'react'; // always import core React library
import Header from './Header';
import List from './List';
import { Switch, Route } from 'react-router-dom';
import NewItemForm from './NewItemForm';

function App(){ // the component is a function! the name is capitalized and matches the filename
  return ( // the return is JSX that renders content
    <div>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <h1>React Prototype</h1>
      <h1>App Content</h1>
      <Header/>
      <Switch>
        <Route exact path='/' component={List} />
        <Route path='/newitem' component={NewItemForm} />
      </Switch>
    </div>
  );
}

export default App;
