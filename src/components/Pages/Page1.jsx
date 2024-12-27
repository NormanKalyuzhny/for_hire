import React, { useEffect } from 'react'
import './Pages.css'
import CV from '../CV/CV';

export default function Page1({tagArray = []}) {

  useEffect(() => {
    console.log('tagArray',tagArray)
  }, [tagArray]); // Следим за изменениями tagArray

  const styleText={
    color:'lightyellow',
  }
  return (
      <div class="page-area">
        <i class="fa-solid fa-share" id='outer'></i>
        <div className='page-content'>
          <div className="main-content">
            <h1>Norman Kalyuzhny</h1>
            <h3>Junior Front-End Developer</h3>
            <br></br>
            <p><b>SUMMARY</b></p>
            <hr/>
            <br/>
              Have a long history in QA, that I won't spoil it here.<br />
              I will say it cost me a 12 years of my life<br />
            <br/>
           
              I've completed a course on Java Script automation at Hillel IT
              school <a href="https://certificate.ithillel.ua/view/92804927">Hillel Certificate</a>
              <br />
          
              <p style={styleText}>After struggling to find a job, I immersed myself in learning Java Script, CSS and HTML. 
              Now I can create web applications.<br />
              <br />
              0 years of experience (you all love it)
              </p>
          
            <br />
            <p><b>SKILLS</b></p>
            <hr/>
            <CV/>
            <ul className="tags">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Git</li>
              <li>GitHub</li>
            </ul>
            <br/>
            <p><b>EDUCATION</b></p>
            <hr/>
            <br/>
            <section className='data-container'>
              <div id='text'>
                <li>
                Computerized automation and control systems at Odessa
                National Polytechnic University
                </li>
              </div>
              <div id="date">
                2005-2009
              </div>
            </section>
            <section className='data-container'>
              <div id='text'>
                <li>
                Control and automation systems at Odessa National Polytechnic
                University
                </li>
              </div>
              <div id="date">
                2009-2011
              </div>
            </section>
            <br />
            <p><b>WORK EXPERIENCE</b></p>
            <hr/>
            <br/>
            <section className='data-container'>
            <div id='text list'>
              <li>Manual QA at AB-Soft</li>
              <section id='list-column'>
              - Much has been achieved
              </section>
            </div>
            <div id="date">2011-2023</div>
            </section>
          </div>
          <div className="side-content">
            <p>Contacts</p>
            <hr/>
            <br/>
            <div className="contact-block">
              <p>Location</p>
              <div id='text'>
                <p>Odesa, Odesa Oblast, Ukraine</p>
              </div>
            </div>
            <br/>
            <div className="contact-block">
              <p>Email</p>
              <div id='text'>
                <p><a href="mailto:innerspiritu@gmail.com">Inner Spiritu</a></p>
              </div>
            </div>
            <br/>
            <div className="contact-block">
              <p>Telegram</p>
              <div id='text'>
                <p><a href="https://t.me/SpirituInteriore">Spiritu Interiore</a></p>
              </div>
            </div>
            <br/>
            <div className="contact-block">
              <p>Linkedin</p>
              <div id='text'>
                <p><a href="https://linkedin.com/in/norman-kalyuzhny-7808752a0">Norman Kalyuzhny</a></p>
              </div>
            </div>
            <br/>
            <div className="contact-block">
              <p>GitHub</p>
              <div id='text'>
                <p><a href="https://github.com/NormanKalyuzhny">Norman Kalyuzhny</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>  
  )
}