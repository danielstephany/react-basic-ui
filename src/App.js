import React, { Component } from 'react';
import './App.scss';
import AddContactFrom from './containers/addContactForm/addContactForm.js';
import MainSection from 'components/mainSection/mainSection.js';
import MainContainer from 'components/mainContainer/mainContainer.js';
import FlexCol from 'components/flexCol/flexCol.js';
import FlexRow from 'components/flexRow/flexRow.js';
import CardList from './containers/cardList/cardList.js';
import DrawerContainer from 'components/drawerContainer/DrawerContainer.js';
import Drawer from 'components/drawer/drawer.js';
import AppHeader from 'components/appHeader/appHeader.js';
import IconButton from 'components/iconButton/iconButton.js';
import Menu from 'components/icons/menu.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      drawerOpen: false,
      cardList: [],
      pendingCard: undefined
    }
  }
  componentDidMount(){
    console.dir(this.header);
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
      <DrawerContainer>
        <AppHeader ref={(header) => { this.header = header } }>
          <MainContainer noGutters >
          <FlexRow>
            <IconButton light disabled first onClick={() => { this.drawerToggle() }}><Menu /></IconButton>
            <FlexCol xs="2"><h2>Logo</h2></FlexCol>
          </FlexRow>
          </MainContainer>
        </AppHeader>
        <Drawer transitionTime={250} maxWidth={400} slideFrom="left" preventBodyScroll={false} drawerToggle={this.drawerToggle} isOpen={this.state.drawerOpen}>
          test
        </Drawer>
        <MainSection className="form-section">
          <MainContainer>
            <FlexRow>
              <FlexCol sm="12" md="6" offsetMd="3">
                <AddContactFrom addContact={this.addContact} updatePendingCard={this.updatePendingCard} />
              </FlexCol>
            </FlexRow>
            <FlexRow>
              <CardList cards={this.state.cardList} pendingCard={this.state.pendingCard} />
            </FlexRow>
          </MainContainer>
        </MainSection>
      </DrawerContainer>
    );
  }
}

export default App;
