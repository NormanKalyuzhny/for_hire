import React from "react";
import "./AuthorizationForm.css";
import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWS_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = ({ onSwitchForm }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  
  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  
  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, [])
  
  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(PWS_REGEX.test(pwd));
    setValidMatch(pwd == matchPwd);
  },[pwd, matchPwd])
  
  useEffect(() => {
    setErrMsg('')
  }, [user,pwd,matchPwd])

  return (
    <div className="container-register">
 
      <form action="">
        <h1>Register</h1>
        <div className="input-box">
          <label htmlFor="username"></label>
          <input 
            type="text" 
            placeholder="Username" 
            id="username"
            ref={userRef}
            autoComplete="off"
            onChange={(e)=>setUser(e.target.value)} 
            required
            aria-invalid={validName ? "false" : "true"}
            aria-describedby="uidnote"
            onFocus={() => setUserFocus(true)}
            onBlur={()=> setUserFocus(false)}
          />
            <i className="fa-solid fa-user"></i>
            <p id="uidnote" className={user && !validName ? "instructions" : "offscreen"}>
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
        </div>
        <div className="input-box">
          <input type="email" placeholder="Email" required />
          <i className="fa-solid fa-envelope"></i>
        </div>
        <div className="input-box">
          <label htmlFor="password"></label>
          <input
            type="password" 
            placeholder="Password"
            id="password"
            onChange={(e)=>setPwd(e.target.value)} 
            required 
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={()=> setPwdFocus(false)}
          />
          <i className="fa-solid fa-lock"></i>
          <p id="pwdnote" className={!validPwd ? "instructions" : "offscreen"}>
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters, a number and a special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
        </div>

        <div className="input-box">
          <label htmlFor="confirm_pwd"></label>
          <input 
            type="password" 
            placeholder="Confirm Password" 
            id="confirm_pwd"
            onChange={(e)=>setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={()=> setMatchFocus(false)}
          />
          <i className="fa-solid fa-lock"></i>
          <p id="confirmnote" className={!validMatch ? "instructions" : "offscreen"}>Must match the first password input field.
          </p>
        </div>
        <button type="submit" className="btn" disabled={!validName || !validPwd || !validMatch ? true : false}>
          Register
        </button>
        <div className="register-link"></div>

        <p>
          Already have an account?{" "}
          <button onClick={() => onSwitchForm("login")} id="btnLink">
            Login
          </button>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
