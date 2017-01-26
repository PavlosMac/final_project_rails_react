const React = require('react')





const SignIn = React.createClass({

  getInitialState: function(){
    return {email: "", password: ""}
  },

  signIn: function(e){
    e.preventDefault()

    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 201){
        let user = JSON.parse(request.responseText)
        this.props.onSignIn(user)
      }
    }

    const data = {
      user:{
        email: this.state.email,
        password: this.state.password
      }
    }

    request.send(JSON.stringify(data))

  },

  onChangeEmailText: function(evt) {
    this.setState({
      email: evt.target.value
    });
  },

  onChangePasswordText: function(e){
    this.setState({
      password: e.target.value
    });
  },

  render: function(){
    return (
      <form className='login-form'>
        <input type="text" onChange={this.onChangeEmailText} value={this.state.email} placeholder="Email" />
        <input type="password" onChange={this.onChangePasswordText} value={this.state.password} placeholder="Password" />
        <button type="submit" onClick={this.signIn}>Sign In</button>

      </form>
    )
  }
})

module.exports = SignIn
