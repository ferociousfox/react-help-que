import React from 'react'; // always import core React library
import { Switch, Route } from 'react-router-dom';
import NewItemControl from './NewItemControl';
import Header from './Header';
import List from './List';
import Error404 from './Error404';
import reactLogo from '../assets/images/react-logo.svg';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterItemList: []
    };
    this.handleAddingNewItemToList = this.handleAddingNewItemToList.bind(this);
  }

  handleAddingNewItemToList(newItem){
    let newMasterItemList = this.state.masterItemList.slice();
    newMasterItemList.push(newItem);
    this.setState({masterItemList: newMasterItemList});
  }

  render(){
    let reactLogoStyle = {
      maxWidth: 300
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
          <Route exact path='/' render={() => <List itemList={this.state.masterItemList} />} />
          <Route path='/newitem' render={() => <NewItemControl onNewItemCreation={this.handleAddingNewItemToList} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
