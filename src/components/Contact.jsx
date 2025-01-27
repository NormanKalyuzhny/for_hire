import React from 'react'

export default function Contact({isContactVisible,setIsContactVisible}) {
  return (
    <form action="https://api.web3forms.com/submit" method="POST" id="form"
      className={`${!isContactVisible ? 'hidden' : ''} contact-block absolute flex flex-col items-center justify-center bottom-0 mb-[64px] w-full min-h-[300px] backdrop-blur-md bg-overlay`}
    >
      <input type="hidden" name="access_key" value="84fa6896-627f-486e-9c95-ad8be50787a0"/>
      <input type="hidden" name="subject" value="New message from My App website"/>
      <div className="modal-container w-full flex justify-center" id="modal-open">
        <div id="sectionBlock" className='py-5 flex flex-col items-center w-[400px]'>
          <div className="contact-form flex flex-col min-w-[200px] w-full h-full px-4">
            <p className=''></p>
            <input 
              type="name" 
              name="name" 
              id="form-name" 
              required 
              autoComplete="off" 
              placeholder="Enter your name"
              className="box pl-2 bg-transparent border-b-[1px] border-gray-300/90 outline-none focus:placeholder-gray-400/30 rounded-[0.3rem]" 
            />
            <p className='mt-5'></p>
            <input 
              type="email" 
              name="email" 
              id="form-email" 
              required 
              placeholder="Enter your email" 
              className="box pl-2 bg-transparent border-b-[1px] border-gray-300/90 outline-none focus:placeholder-gray-400/30 rounded-[0.3rem]" 
            />
            <p className='mt-5'></p>
            <textarea 
              name="message" 
              id="form-message"  
              required 
              placeholder="Enter your message"
              className="box max-h-[400px] min-h-[50px] bg-transparent  border-b-[1px] border-gray-300/90 outline-none focus:placeholder-gray-400/30 px-2 rounded-[0.3rem]"
            ></textarea>
            </div>
            <div className="flex justify-center gap-5 mt-5">
                <input 
                  type="submit"  
                  id="send-data-btn"
                  className="button w-20 rounded-[0.5rem] border-2 border-gray-300/50 text-gray-400 hover:text-green-500 hover:border-green-500 transition duration-300" 
                />
                <button 
                  onClick={()=>setIsContactVisible(false)}
                  type="cancel" 
                  id="cancel-btn"
                  className="cancel-btn button w-20 rounded-[0.5rem] border-2 border-gray-300/50 text-gray-400 hover:text-red-500 hover:border-red-500 transition duration-300" 
                >Cancel</button>
            </div>
          </div> 
        <div id="result"></div>
      </div>
    </form>
  )
}
