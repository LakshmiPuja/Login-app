// Write your code here
import './index.css'

const Login = props => {
  const {changeButton} = props

  return (
    <button className="button" type="button" onClick={changeButton}>
      Login
    </button>
  )
}

export default Login
