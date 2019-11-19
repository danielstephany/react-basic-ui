import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Drawer from 'components/drawer/drawer.js';
import List from 'components/list/List.js';
import ListItem from 'components/listItem/ListItem.js';
import ListItemSecondary from 'components/listItemSecondary/ListItemSecondary.js';
import ListItemIcon from 'components/listItemIcon/ListItemIcon.js';
import ListItemAction from 'components/listItemAction/ListItemAction.js';
import Menu from 'components/icons/menu.js';
import { NavLink } from 'react-router-dom';
import CollapseBox from 'components/collapseBox/CollapseBox.js';


const MainDrawer = (props) => {
    const [formElemDrawerOpen, setFormElemDrawer] = useState(false);
    const [layoutDrawerOpen, setLayoutDrawer] = useState(false);
    console.log(props);

    const closeAndGoTo = (location) =>  (e) => {
            console.log(e);
            props.drawerToggle()
            .then(() => {
                props.history.push(location);
            });
        };

    return (
        <Drawer transitionTime={250} maxWidth={400} slideFrom="left" preventBodyScroll={false} drawerToggle={props.drawerToggle} isOpen={props.drawerOpen}>
            <List>
                <ListItem hasAction >
                    <ListItemAction component={NavLink} to="/" onClick={props.drawerToggle}>Home</ListItemAction>
                </ListItem>
                <ListItem hasAction >
                    <ListItemAction onClick={() => {setLayoutDrawer(!layoutDrawerOpen)}}>Layout</ListItemAction>
                    <CollapseBox open={layoutDrawerOpen} transitionDuration="0.2s">
                        <List>
                            <ListItem hasAction >
                                <ListItemAction component={NavLink} to="/grid" onClick={props.drawerToggle}>Grid</ListItemAction>      
                            </ListItem>
                        </List>
                    </CollapseBox>
                </ListItem>
                <ListItem hasAction >
                    <ListItemAction component={NavLink} to="/list" onClick={props.drawerToggle}>List</ListItemAction>
                </ListItem>
                <ListItem hasAction >
                    <ListItemAction component={NavLink} to="/table" onClick={props.drawerToggle}>Table</ListItemAction>
                </ListItem>
                <ListItem hasAction >
                    <ListItemAction button onClick={() => { setFormElemDrawer(!formElemDrawerOpen)}}>Form Elements</ListItemAction>
                    <CollapseBox open={formElemDrawerOpen}>
                        <List>
                            <ListItem hasAction >
                                <ListItemAction component={NavLink} to="/form-elements" onClick={props.drawerToggle}>Form</ListItemAction>
                            </ListItem>
                            <ListItem hasAction >
                                <ListItemAction component={NavLink} to="/form-item" onClick={props.drawerToggle}>FormItem</ListItemAction>
                            </ListItem>
                            <ListItem hasAction >
                                <ListItemAction component={NavLink} to="/base-input" onClick={props.drawerToggle}>BaseInput</ListItemAction>
                            </ListItem>
                            <ListItem hasAction >
                                <ListItemAction component={NavLink} to="/text-box" onClick={props.drawerToggle}>TextBox</ListItemAction>
                            </ListItem>
                            <ListItem hasAction >
                                <ListItemAction component={NavLink} to="/base-radio" onClick={props.drawerToggle}>BaseRadio</ListItemAction>
                            </ListItem>
                        </List>
                    </CollapseBox>
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