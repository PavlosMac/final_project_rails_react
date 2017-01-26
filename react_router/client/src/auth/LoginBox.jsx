import React from 'react'
const SignIn = require('./SignIn')
const SignUp = require('./SignUp')
const SignOut = require('./SignOut')


const LoginBox = React.createClass({

  getInitialState: function(){
    return { currentUser: null }
  },

  setUser: function(user){
    this.props.onLogin();
  },

  fetchUser: function(){
    var request = new XMLHttpRequest()
    request.open('GET', this.props.url + "users.json")

    request.setRequestHeader('Content-Type', 'application/json')
    request.withCredentials = true

    request.onload = () => {
      if(request.status === 200){
        console.log("request: ", request.responseText)
        this.props.onLogin();
      }else if(request.status === 401){
      }
    }
    request.send(null)
  },

  componentDidMount: function(){
    this.fetchUser()
  },

  render: function(){
    var mainDiv = <div>
      <h4>Please Sign in Up</h4>
      <SignIn url={this.props.url + "users/sign_in.json"} onSignIn={this.setUser}/>
      <SignUp url={this.props.url + 'users.json'} onSignUp={this.setUser}/>
    </div>
    if(this.state.currentUser){
      mainDiv = <div>
        <h4>Welcome {this.state.currentUser.email}</h4>
        <SignOut url={this.props.url + "users/sign_out.json"} onSignOut={this.setUser}/>
      </div>
    }
    return(
      <div>
        {mainDiv}
      </div>
    )
  }

})

module.exports =  LoginBox
