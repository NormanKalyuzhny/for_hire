import { useTranslation } from "react-i18next"
export default function Contact({isContactVisible,setIsContactVisible}) {
  const {t} = useTranslation('contactForm')
  return (
    <>
    {isContactVisible &&(
    <form action="https://api.web3forms.com/submit" method="POST" id="form"
      className={`contact-block absolute flex flex-center flex-col bottom-0 mb-[64px] w-full sm:w-[540px] min-h-[300px]  bg-modal rounded-xl shadow-container`}
    >
      <input type="hidden" name="access_key" value="84fa6896-627f-486e-9c95-ad8be50787a0"/>
      <input type="hidden" name="subject" value="New message from My App website"/>
      <div className="modal-container w-full flex justify-center" id="modal-open">
        <div id="sectionBlock" className='py-5 flex flex-col items-center w-[400px]'>
          <div className="contact-form flex flex-col min-w-[200px] w-full h-full px-4 gap-2">
            <p className=''></p>
            <input 
              type="text" 
              name="name" 
              id="form-name" 
              required
              autoFocus 
              autoComplete="off" 
              placeholder={t('name')}
              className="box input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive] " 
            />
            <p className=''></p>
            <input 
              type="email" 
              name="email" 
              id="form-email" 
              required 
              placeholder={t('email')} 
              className="box input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive]" 
            />
            <p className=''></p>
            <textarea 
              name="message" 
              id="form-message"  
              required 
              placeholder={t('msg')} 
              className="box max-h-[400px] min-h-[50px] input-style placeholder-[--text-color] focus:placeholder-[--btn-inactive] px-2"
            ></textarea>
            </div>
            <div className="flex justify-center gap-5 mt-6">
                <input 
                  type="submit"  
                  id="send-data-btn"
                  className="button min-w-20 btn-inactive hover:btn-submit-active transition duration-300"
                  value={t('submit')}
                />
                <button 
                  onClick={()=>setIsContactVisible(false)}
                  type="cancel" 
                  id="cancel-btn"
                  className="cancel-btn button min-w-20 btn-inactive hover:btn-cancel-active transition duration-300" 
                >{t('cancel')}</button>
            </div>
          </div> 
        <div id="result"></div>
      </div>
    </form>
    )}
    </>
  )
}
