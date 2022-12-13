// Write your code here
import './index.css'

const Logout = props => {
  const {changeButton} = props

  return (
    <button className="button" type="button" onClick={changeButton}>
      Logout
    </button>
  )
}

export default Logout
