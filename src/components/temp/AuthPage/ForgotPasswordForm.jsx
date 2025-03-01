import { useState } from "react"

const ForgotPasswordForm = ({onSwitchForm}) => {
  const [queryValue,setQueryValue] = useState('')
  const emailRegEx = /^(?=.*@)(?=.*\.).+$/
  return (
 
    <div className='container-forgotPassword flex flex-col items-center w-[350px] px-4'>
        <h1 className="text-center mb-4">Forgot password</h1>
        <div className="relative flex flex-center mb-4 w-full">
            <input
              required
              className='w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]' 
              type="email" 
              placeholder='Email'  
              value={queryValue}
              onChange={(e)=>setQueryValue(e.target.value)}
            />
            <i className="fa-solid fa-envelope absolute ml-[90%]"></i>
        </div>
        <button 
          type="submit"
          className='button max-w-20 hover:underline transition duration-300 mb-1 disabled:text-[--btn-inactive] disabled:cursor-not-allowed'
          disabled={!emailRegEx.test(queryValue.trim())}
        >Submit</button>
        <p><button onClick={() => onSwitchForm('login')} id="btnLink" className="hover:underline">Go back</button></p>
    </div>
  )
}

export default ForgotPasswordForm