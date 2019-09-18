import React, { Component } from 'react';
import './App.less';
import { HashRouter, Route } from 'react-router-dom'
import MainSection from 'components/mainSection/mainSection.js';
import Grid from 'components/grid/Grid.js';
import DrawerContainer from 'components/drawerContainer/DrawerContainer.js';
import AppHeader from 'components/appHeader/AppHeader.js';
import IconButton from 'components/iconButton/iconButton.js';
import Menu from 'components/icons/menu.js';
import Home from './views/home/Home.js';
import GridView from './views/gridView/GridView.js';
import MainDrawer from './containers/mainDrawer/MainDrawer.js';
import ListView from './views/listView/ListView.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      cardList: [],
      pendingCard: undefined
    }
  }

  updatePendingCard = (pendingCardData) => {
    this.setState({ pendingCard: pendingCardData });
  }

  addContact = (data) => {
    this.setState({ 
      cardList: [...this.state.cardList, data],
      pendingCard: undefined
     });
  }

  drawerToggle = () => {
    this.setState({drawerOpen: !this.state.drawerOpen})
  }

  render() {
    return (
      <HashRouter>
        <DrawerContainer>
          <AppHeader ref={(header) => { this.header = header } } onClick={()=> {console.log(this.header)}}>
            <Grid container noGutters >
              <Grid row>
                <IconButton light first onClick={() => { this.drawerToggle() }}><Menu /></IconButton>
                <Grid col xs="2"><h2>Logo</h2></Grid>
              </Grid>
            </Grid>
          </AppHeader>
          <MainDrawer drawerToggle={this.drawerToggle} drawerOpen={this.state.drawerOpen} />
          <MainSection className="form-section">
        
            <Route exact path="/" component={props => <Home {...props}/>}/>
            <Route exact path="/grid" component={props => <GridView {...props} />} />
            <Route exact path="/list" component={props => <ListView {...props} />} />
    
          </MainSection>
        </DrawerContainer>
      </HashRouter>
    );
  }
}

export default App;
