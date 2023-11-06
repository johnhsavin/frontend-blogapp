import { useContext } from "react"
import { UserContext } from "../App"


export default function NavBar() {
const { userState, setUserState} = useContext(UserContext)

  return (
    <header>
      <ul>
        <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
        {/* <li><a href="http://" target="_blank" rel="noopener noreferrer">Add Post</a></li> */}
        <li><a href="/login" target="_blank" rel="noopener noreferrer">Login</a></li>
        <li><a href="/signup" target="_blank" rel="noopener noreferrer">Signup</a></li>
        <li style={{color: 'white'}}>{userState.email}</li>
      </ul>
    </header>
  )
}