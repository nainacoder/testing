import axios from "axios";
import React from "react";
import "./Login.css";

const Login = () => {
  const [error, setError] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [user, setUser] = React.useState({});
  const[loading,setLoading]=React.useState(false)

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );
      setUser(data)
     
     
    } catch {
      setError(true);
    }
    setLoading(false)
    setEmail("")
    setUsername("")
    setPassword("")
   
  };

  return (
    <>
   
      <form>
      <h2>{user.title}</h2> 
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        {/* <button disabled="true">Submit</button> */}
        <button
          disabled={!username || !email || !password }
          onClick={handleClick}
        >
          {loading?"please wait":"Submit"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          {" "}
          Something went wrong! Please try again.
        </span>
      </form>
    </>
  );
};

export default Login;
