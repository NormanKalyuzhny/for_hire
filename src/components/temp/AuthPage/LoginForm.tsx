import './AuthorizationForm.css'

 interface LoginFormProps{
  onSwitchForm:(value:string) => void;
  isDisabled:boolean;
 } 
 const LoginForm = ({ onSwitchForm, isDisabled }:LoginFormProps) => {

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); 
  };
  
  return (
    <div className='flex w-[350px] px-4'>
        <form onSubmit={handleSubmit} className='relative w-full flex flex-col '>
            <h1 className='text-center'>Login</h1>
            <div className="relative flex flex-center mb-4 w-full">
                <input 
                  type="text" 
                  placeholder='Username' 
                  required disabled={isDisabled} 
                  className='w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]'
                />
                <i className="fa-solid fa-user absolute ml-[90%]"></i>
            </div>

            <div className="relative flex flex-center mb-4 w-full">
                <input 
                  type="password" 
                  placeholder='Password' 
                  required 
                  autoComplete=''
                  disabled={isDisabled} 
                  className='w-full input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]'/>
                <i className="fa-solid fa-lock absolute ml-[90%]"></i>
            </div>

            <div className="flex justify-between">
              <label className='cursor-pointer'>
                <input type="checkbox"/> Remember me
              </label>
             <p> <button onClick={() => onSwitchForm('forgot')} className='hover:underline'> Forgot password?</button></p>
            </div>
            <div className='w-full flex justify-center'>
              <button
                className='max-w-20 hover:underline transition duration-300 mb-1 disabled:text-[--btn-inactive] disabled:cursor-not-allowed' 
                type="submit"
                disabled
              >Login</button>
            </div>
            <div className="flex justify-between">
            <p>Don't have an account?</p>
            <button onClick={() => onSwitchForm('register')} className='hover:underline'>Register</button>
            </div>
        </form>
    </div>
  )
}

export default LoginForm