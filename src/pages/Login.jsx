import { useEffect, useState } from "react";
import styles from "./Login.module.css";
import PageNav from "../components/PageNav";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const {login , isAuthenticated} = useAuth(); 
  const navigate = useNavigate();
  function handleClick(e)
   {
      e.preventDefault();
        login(email , password);
        navigate("/app" , {replace:true});
   }
  useEffect(function(){
    if(isAuthenticated)
    {
      navigate("/app");
    }
  
  } ,[navigate])
  return (
    <>
    <main className={styles.login}>
    <PageNav></PageNav>
      <form className={styles.form}>
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <button onClick={handleClick}>Login</button>
        </div>
      </form>
    </main>
    </>
  );
}
