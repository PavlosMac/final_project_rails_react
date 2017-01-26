import React from 'react'
import Clients from './Clients.jsx'
import Materials from './Materials.jsx'
import ListingsContainer from './ListingsContainer.jsx'
import {Link} from 'react-router'
const LoginBox = require('../auth/LoginBox')

class Main extends React.Component {

constructor(props) {
  super(props);

  this.onLogin = this.onLogin.bind(this);

  this.state = {
    login: false
  };
}

onLogin() {
  this.setState({login: true});
}

render(){

  if(!this.state.login) {
    return <LoginBox  url='http://localhost:5000/' onLogin={this.onLogin} />
  }else{
    return(
      <div>
        <h4>Giclee Printing</h4>
        <ul className="header">
          <li><Link to='/Clients'>Clients</Link></li>
          <li><Link to='/Materials'>Materials</Link></li>
          <li><Link to='/ListingsContainer'>Listings</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

}

export default Main;
