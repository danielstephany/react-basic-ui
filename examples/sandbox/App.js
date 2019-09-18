import React, { Component } from 'react';
import './App.less';
import AddContactFrom from './containers/addContactForm/addContactForm.js';
import MainSection from 'components/mainSection/mainSection.js';
// import Container from 'components/container/Container.js';
// import Col from 'components/col/Col.js';
// import Row from 'components/row/Row.js';
import Grid from 'components/grid/Grid.js';
import CardList from './containers/cardList/cardList.js';
import DrawerContainer from 'components/drawerContainer/DrawerContainer.js';
import Drawer from 'components/drawer/drawer.js';
import AppHeader from 'components/appHeader/AppHeader.js';
import IconButton from 'components/iconButton/iconButton.js';
import Menu from 'components/icons/menu.js';
import List from 'components/list/list.js';
import ListItem from 'components/listItem/listItem.js';
import ListItemSecondary from 'components/listItemSecondary/ListItemSecondary.js';
import ListItemIcon from 'components/listItemIcon/ListItemIcon.js';
import Paper from 'components/paper/Paper.js';

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
        <AppHeader fixed="top" fixedSpacer ref={(header) => { this.header = header } }>
          <Grid container noGutters >
            <Grid row>
              <IconButton light disabled first onClick={() => { this.drawerToggle() }}><Menu /></IconButton>
              <Grid col xs="2"><h2>Logo</h2></Grid>
            </Grid>
          </Grid>
        </AppHeader>
        <Drawer transitionTime={250} maxWidth={400} slideFrom="left" preventBodyScroll={false} drawerToggle={this.drawerToggle} isOpen={this.state.drawerOpen}>
          <List>
            <ListItem>link 1</ListItem>
            <ListItem>link 2<ListItemSecondary> <Menu /> </ListItemSecondary></ListItem>
            <ListItem>link 3</ListItem>
            <List>
              <ListItem><ListItemIcon> <Menu /> </ListItemIcon>sublink 4</ListItem>
              <ListItem>sublink 5</ListItem>
              <ListItem>sublink 6</ListItem>
            </List>
          </List>
          <List>
            <ListItem link >
              <a href="./test" >link 4</a>
              <ListItemSecondary><Menu /></ListItemSecondary>
            </ListItem>
            <ListItem button ><button>link 5</button><ListItemSecondary><Menu /></ListItemSecondary></ListItem>
            <ListItem><ListItemIcon> <Menu /> </ListItemIcon>link 6<ListItemSecondary><Menu /></ListItemSecondary></ListItem>
          </List>
        </Drawer>
        <MainSection className="form-section">
          <Grid container vMargin="8">
            <Paper>
              <h2>test header</h2>
              <h3>this is the test subheader</h3>
              <p>Lorem ipsum dolor amet kinfolk chambray quinoa, tousled dreamcatcher unicorn irony. Skateboard normcore man braid quinoa waistcoat everyday carry. Paleo listicle hexagon, seitan thundercats poke normcore messenger bag deep v. Tattooed jean shorts plaid, </p>
            </Paper>
          </Grid>
          <Grid container>
            <Grid row>
              <Grid col sm="12" md="6" offsetMd="3">
                <AddContactFrom addContact={this.addContact} updatePendingCard={this.updatePendingCard} />
              </Grid>
            </Grid>
            <Grid row>
              <CardList cards={this.state.cardList} pendingCard={this.state.pendingCard} />
            </Grid>
          </Grid>
        </MainSection>
      </DrawerContainer>
    );
  }
}

export default App;
