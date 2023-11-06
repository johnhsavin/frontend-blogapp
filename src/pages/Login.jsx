import { useContext } from "react"
import { UserContext } from "../App"

import { useNavigate } from "react-router-dom"

export default function Login() {
  const { setUserState } = useContext(UserContext)
  const navigate = useNavigate()

const handleFormSubmit = e => {
  e.preventDefault()

  const formData = {
    email: e.target.email.value,
    password: e.target.password.value,
  }

  fetch('http://localhost:8080/login', {
  method: 'POST',
  headers: {'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
  })

  .then(res => res.json())
  .then(data => {
    setUserState(data)
    navigate('/')
  })
}

  return (
    <form action="submit" onSubmit={handleFormSubmit}>
      <label htmlFor="">
        Email:
        <input type="email" name="email"/>
        </label>
      <label htmlFor="">
        Password:
        <input type="password" name="password"/>
        </label>
        <button>Login</button>
        </form>
    )
}