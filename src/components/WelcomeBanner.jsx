import {useContext} from 'react'
import { AuthContext } from '../context/AuthContext.js'

function WelcomeBanner() {
  const { userRole, logout } = useContext(AuthContext)

  return (
    <div className="welcome-banner">
    <h2>
    Welcom {userRole ? userRole.charAt(0).toUpperCase() + userRole.slice(1) : 'Guest'}!
    </h2>
    {userRole && (
      <button onClick={logout} className="logout-button">
        Logout
        </button>
    )}
    </div>
)
  }
export default WelcomeBanner
