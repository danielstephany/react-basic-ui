import React, { Component } from 'react';
import './App.scss';
import AddContactFrom from './containers/addContactForm/addContactForm.js';
import MainSection from 'components/mainSection/mainSection.js';
import MainContainer from 'components/mainContainer/mainContainer.js';
import MainCol from 'components/mainCol/mainCol.js';
import MainRow from 'components/mainRow/mainRow.js';
import CardList from './containers/cardList/cardList.js';
import DrawerContainer from 'components/drawerContainer/drawerContainer.js';
import Drawer from 'components/drawer/drawer.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
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

  render() {
    return (
      <DrawerContainer>
        <Drawer ref={(drawer) => { this.drawer = drawer }}>
          test
        </Drawer>
        <MainSection className="form-section" onClick={() => { this.drawer.toggleDrawer() }}>
          <MainContainer>
            <MainRow>
              <MainCol sm="12" md="6" offset-md="3">
                <AddContactFrom addContact={this.addContact} updatePendingCard={this.updatePendingCard} />
              </MainCol>
            </MainRow>
            <MainRow>
              <CardList cards={this.state.cardList} pendingCard={this.state.pendingCard} />
            </MainRow>
          </MainContainer>
        </MainSection>
      </DrawerContainer>
    );
  }
}

export default App;
