import { useState } from "react";
export default function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
 
 


  async function handleSubmit(event) {
    event.preventDefault();


    try {
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <>
      <h2>Sign Up</h2>
      <button onclick="( Token)">Authenticate Button</button>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Username:{" "}
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </>
  );
}
const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup");
const result = await response.json();
console.log(result);


async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = await response.json();
      setSuccessMessage(result.message);
    } catch (error) {
      setError(error.message);
    }
  }

