import "./AuthorizationForm.css";
import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = ({ onSwitchForm, isDisabled }) => {
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

  // useEffect(() => {
  //   userRef.current.focus();
  // }, [])
  
  useEffect(() => {
    setValidName(USER_REGEX.test(user))
  }, [user])

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd == matchPwd);
  },[pwd, matchPwd])
  
  useEffect(() => {
    setErrMsg('')
  }, [user,pwd,matchPwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
        setErrMsg("Invalid Entry");
        return;
    }
   }
  return (
    <div className="w-[350px] px-4">
      <form onSubmit={handleSubmit} className="flex flex-col flex-center">
        <h1 className="text-center">Register</h1>
        <div className="relative flex flex-center mb-4 w-full">
          <label htmlFor="username"></label>
          <input
            className="w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]" 
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
            disabled={isDisabled}
          />
            <i className="fa-solid fa-user absolute ml-[90%]"></i>
            <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
        </div>
        <div className="relative flex flex-center mb-4 w-full">
          <input 
            className="w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]"
            type="email" 
            placeholder="Email" 
            required 
            disabled={isDisabled}
          />
          <i className="fa-solid fa-envelope absolute ml-[90%]"></i>
        </div>
        <div className="relative flex flex-col items-center mb-4 w-full">
          <label htmlFor="password"></label>
          <input
            className="w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]"
            type="password" 
            placeholder="Password"
            id="password"
            onChange={(e)=>setPwd(e.target.value)} 
            required 
            aria-invalid={validPwd ? "false" : "true"}
            aria-describedby="pwdnote"
            onFocus={() => setPwdFocus(true)}
            onBlur={()=> setPwdFocus(false)}
            disabled={isDisabled}
          />
          <i className="fa-solid fa-lock absolute ml-[90%]"></i>
          <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
            8 to 24 characters.<br />
            Must include uppercase and lowercase letters, a number and a special character.<br />
            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
          </p>
        </div>

        <div className="relative flex flex-col items-center mb-4 w-full">
          <label htmlFor="confirm_pwd"></label>
          <i className="fa-solid fa-lock absolute ml-[90%]"></i>
          <input 
            className="relative w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]"
            type="password" 
            placeholder="Confirm Password" 
            id="confirm_pwd"
            onChange={(e)=>setMatchPwd(e.target.value)}
            required
            aria-invalid={validMatch ? "false" : "true"}
            aria-describedby="confirmnote"
            onFocus={() => setMatchFocus(true)}
            onBlur={()=> setMatchFocus(false)}
            disabled={isDisabled}
          />
          <p id="confirmnote" className={!validMatch ? "instructions" : "offscreen"}>Must match the first password input field.
          </p>
        </div>
        <button type="submit" className="max-w-20 hover:underline transition duration-300 mb-1 disabled:text-[--btn-inactive] disabled:cursor-not-allowed" disabled={!validName || !validPwd || !validMatch ? true : false}>
          Register
        </button>
        <div className="register-link"></div>

        <p>
          Already have an account?{" "}
          <button onClick={() => onSwitchForm("login")} id="btnLink" className="hover:underline">
            Login
          </button>{" "}
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
