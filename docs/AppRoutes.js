import React, {PureComponent} from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from './views/home/Home.js';
import GridView from './views/gridView/GridView.js';
import ListView from './views/listView/ListView.js';
import TableView from './views/TableView/TableView.js';
import FormElementsView from './views/FormElementsView/FormElementsView.js';

class AppRoutes extends PureComponent {
    render = () => {
        return (
            <Switch>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/grid" render={props => <GridView />} />
                <Route exact path="/list" render={props => <ListView {...props} />} />
                <Route exact path="/table" render={props => <TableView {...props} />} />
                <Route exact path="/form-elements" render={props => <FormElementsView {...props} />} />
            </Switch>
        );
    }
}

export default AppRoutes;