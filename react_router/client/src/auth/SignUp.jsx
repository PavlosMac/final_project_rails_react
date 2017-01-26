const React = require('react')


const SignUp = React.createClass({

  getInitialState: function(){
    return {email:"", password:"", passwordConfirmation:""}
  },

  signUp:function(e){
    e.preventDefault()
    const request = new XMLHttpRequest()
    request.open("POST", this.props.url)
    request.setRequestHeader("Content-Type", "application/json")
    request.withCredentials = true
    request.onload = () => {
      if(request.status === 201){
        let user = JSON.parse(request.responseText)
        this.props.onSignUp(user)
      }
    }
    const data = {
      user:{
        email:this.state.email,
        password:this.state.password,
        password_confirmation: this.state.passwordConfirmation
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


    onChangePasswordConfirmation: function(e){
      this.setState({
        passwordConfirmation: e.target.value
      });
    },

  render: function() {
    return (
      <form onSubmit={this.signUp} className='login-form'>
        <input type="text" onChange={this.onChangeEmailText} value={this.state.email} placeholder="Email" />
        <input type="password" onChange={this.onChangePasswordText} value={this.state.password} placeholder="Password" />
        <input type="password" onChange={this.onChangePasswordConfirmation} value={this.state.passwordConfirmation} placeholder="Password Confirmation" />

        <button type="submit">  Sign Up </button>
      </form>
    )
  }
})

module.exports = SignUp
