export default function Signup() {
const handleFormSubmit = e => {
  e.preventDefault()

  const formData = {
    email: e.target.email.value,
    password: e.target.password.value,
  }

  fetch('http://localhost:8080/signup', {
  method: 'POST', headers: {'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => console.log(data))
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