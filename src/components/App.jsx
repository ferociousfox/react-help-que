import React from 'react'; // always import core React library
import { Switch, Route } from 'react-router-dom';
import { v4 } from 'uuid';
import NewItemControl from './NewItemControl';
import Header from './Header';
import List from './List';
import Admin from './Admin';
import Error404 from './Error404';
import reactLogo from '../assets/images/react-logo.svg';
// import Moment from 'moment';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterItemList: {},
      selectedItem: null
    };
    this.handleAddingNewItemToList = this.handleAddingNewItemToList.bind(this);
    this.handleChangingSelectedItem = this.handleChangingSelectedItem.bind(this);
    this.handleDeletingItem = this.handleDeletingItem.bind(this);
  }

  componentDidMount(){
    this.waitTimeUpdateTimer = setInterval(()=>
      this.updateItemElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateItemElapsedWaitTime() {
    let newMasterItemList = Object.assign({}, this.state.masterItemList);
    Object.keys(newMasterItemList).forEach(itemId =>
      newMasterItemList[itemId].formattedWaitTime = newMasterItemList[itemId].timeOpen.fromNow(true)
    );
    this.setState({masterItemList: newMasterItemList});
  }

  handleDeletingItem(itemId){
    let newMasterItemList = Object.assign({}, this.state.masterItemList);
    delete newMasterItemList[itemId];
    this.setState({masterItemList: newMasterItemList});


  }
  handleAddingNewItemToList(newItem){
    let newItemId = v4();
    let newMasterItemList = Object.assign({}, this.state.masterItemList, {
      [newItemId]: newItem
    });
    newMasterItemList[newItemId].formattedWaitTime = newMasterItemList[newItemId].timeOpen.fromNow(true);
    this.setState({masterItemList: newMasterItemList});
  }

  handleChangingSelectedItem(itemId){
    this.setState({selectedItem: itemId});
  }

  render(){
    console.log(this.state.masterItemList);
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
          <Route exact path='/' render={() =>
            <List itemList={this.state.masterItemList} />} />

          <Route path='/newitem' render={() =>
            <NewItemControl
              onNewItemCreation={this.handleAddingNewItemToList} />} />

          <Route path='/admin' render={(props) =>
            <Admin
              itemList={this.state.masterItemList}
              currentRouterPath={props.location.pathname}
              onItemSelection={this.handleChangingSelectedItem}
              onItemDelete={this.handleDeletingItem}
              selectedItem={this.state.selectedItem}/>} />

          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

export default App;
