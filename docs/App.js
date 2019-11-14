import React, { Component } from 'react';
import './App.less';
import { HashRouter, Route } from 'react-router-dom';
import MainSection from 'components/mainSection/mainSection.js';
import Grid from 'components/grid/Grid.js';
import DrawerContainer from 'components/drawerContainer/DrawerContainer.js';
import AppHeader from 'components/appHeader/AppHeader.js';
import IconButton from 'components/iconButton/iconButton.js';
import Menu from 'components/icons/menu.js';
import MainDrawer from './containers/mainDrawer/MainDrawer.js';

import AppRoutes from './AppRoutes.js';

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
          <AppHeader>
            <Grid container noGutters >
              <Grid row>
                <IconButton light first onClick={() => { this.drawerToggle() }}><Menu /></IconButton>
                <Grid col xs="3"><h2>React Basic UI</h2></Grid>
              </Grid>
            </Grid>
          </AppHeader>
          <MainDrawer drawerToggle={this.drawerToggle} drawerOpen={this.state.drawerOpen} />
          <MainSection className="form-section">
            <AppRoutes/>
          </MainSection>
        </DrawerContainer>
      </HashRouter>
    );
  }
}

export default App;
