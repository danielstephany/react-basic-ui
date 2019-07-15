import React, { Component } from 'react';
import './App.scss';
import AddContactFrom from './containers/addContactForm/addContactForm.js';
import MainSection from 'components/mainSection/mainSection.js';
import Container from 'components/container/Container.js';
import Col from 'components/col/Col.js';
import Row from 'components/row/Row.js';
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
          <Container noGutters >
          <Row>
            <IconButton light disabled first onClick={() => { this.drawerToggle() }}><Menu /></IconButton>
            <Col xs="2"><h2>Logo</h2></Col>
          </Row>
          </Container>
        </AppHeader>
        <Drawer transitionTime={250} maxWidth={400} slideFrom="left" preventBodyScroll={false} drawerToggle={this.drawerToggle} isOpen={this.state.drawerOpen}>
          test
        </Drawer>
        <MainSection className="form-section">
          <Container>
            <Row>
              <Col sm="12" md="6" offsetMd="3">
                <AddContactFrom addContact={this.addContact} updatePendingCard={this.updatePendingCard} />
              </Col>
            </Row>
            <Row>
              <CardList cards={this.state.cardList} pendingCard={this.state.pendingCard} />
            </Row>
          </Container>
        </MainSection>
      </DrawerContainer>
    );
  }
}

export default App;
