import React from 'react'; // always import core React library
import { Switch, Route } from 'react-router-dom';
import NewItemForm from './NewItemForm';
import Header from './Header';
import List from './List';
import Error404 from './Error404';
import reactLogo from '../assets/images/react-logo.svg';

function App(){ // the component is a function! the name is capitalized and matches the filename
  let reactLogoStyle = {
    width: 500
  };
  return ( // the return is JSX that renders content
    <div>
      <style jsx global>{`
        * {
          text-align: center;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
      `}</style>
      <img src={reactLogo} style={reactLogoStyle}/>
      <h1>App Content</h1>
      <Header/>
      <Switch>
        <Route exact path='/' component={List} />
        <Route path='/newitem' component={NewItemForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
