import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home.jsx';
import Main from './components/Main.jsx';
import Materials from './components/Materials.jsx'
import Clients from './components/Clients.jsx';
import ListingsContainer from './components/ListingsContainer.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';


window.onload = () => {
  ReactDOM.render(
    <Router  history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path="/ListingsContainer" components={ListingsContainer} />
        <Route path="/Clients" components={Clients} />
        <Route path="/Materials" components={Materials} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
}
