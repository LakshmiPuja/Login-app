// Write your code here
import {Component} from 'react'

import Message from '../Message'

import Login from '../Login'

import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {
    isLogin: false,
  }

  loginButton = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  changeMessageText = () => {
    const {isLogin} = this.state
    return isLogin ? 'Welcome User' : 'Please Login'
  }

  render() {
    const changeMessage = this.changeMessageText()
    const {isLogin} = this.state

    return (
      <div className="container">
        <div className="card">
          <Message message={changeMessage} />
          {isLogin ? (
            <Logout changeButton={this.loginButton} />
          ) : (
            <Login changeButton={this.loginButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
