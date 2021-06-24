import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import ListPage from './ListPage';
import CreatePage from './CreatePage';
import DetailPage from './DetailPage';
import Header from './Header.js';

export default class App extends React.Component { 
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact render={(routerProps) => <ListPage {...routerProps} />} /> 
            <Route path="/games/:id" exact render={(routerProps) => <DetailPage {...routerProps} />} />
            <Route path="/create" exact render={(routerProps) => <CreatePage {...routerProps} />} />          
          </Switch>
        </div>
      </Router>
    );
  }
}