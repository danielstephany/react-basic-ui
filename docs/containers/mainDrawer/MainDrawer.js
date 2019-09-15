import React from 'react';
import PropTypes from 'prop-types';
import Drawer from 'components/drawer/drawer.js';
import List from 'components/list/list.js';
import ListItem from 'components/listItem/listItem.js';
import ListItemSecondary from 'components/listItemSecondary/listItemSecondary.js';
import ListItemIcon from 'components/listItemIcon/ListItemIcon.js';
import ListItemAction from 'components/listItemAction/ListItemAction.js';
import Menu from 'components/icons/menu.js';
import { NavLink } from 'react-router-dom';


const MainDrawer = (props) => {

    return (
        <Drawer transitionTime={250} maxWidth={400} slideFrom="left" preventBodyScroll={false} drawerToggle={props.drawerToggle} isOpen={props.drawerOpen}>
            <List>
                <ListItem hasAction >
                    <ListItemAction component={NavLink} to="/" >Home</ListItemAction>
                </ListItem>
                <ListItem hasAction >
                    <ListItemAction component={NavLink} to="/grid" >Grid</ListItemAction>
                </ListItem>
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
                <ListItem hasAction >
                    <ListItemAction href="./test" >link 4</ListItemAction>
                    <ListItemSecondary><Menu /></ListItemSecondary>
                </ListItem>
                <ListItem hasAction >
                    <ListItemAction button ><ListItemIcon> <Menu /> </ListItemIcon>link 5</ListItemAction>
                    <ListItemSecondary><Menu /></ListItemSecondary></ListItem>
                <ListItem hasAction >
                    <ListItemAction button ><ListItemIcon> <Menu /> </ListItemIcon>link 6</ListItemAction>
                </ListItem>
            </List>
        </Drawer>
    );
}

MainDrawer.propTypes = {
    drawerToggle: PropTypes.func.isRequired,
    drawerOpen: PropTypes.bool.isRequired
}

export default MainDrawer;