import React from "react";
import "./MyCV.css";

export default function MyCV() {
  return (
    <div className="page-area pb-4 text-[#2a3d50]">
      <div className="page-content flex justify-between gap-2">
        <div className="main-content flex flex-col rounded-md max-w-[600px] py-2 px-4 bg-[#c8d6e8]">
          <h1>Norman Kalyuzhny</h1>
          <h3>Junior Front-End Developer</h3>
          <p className="mt-4">
            <b>SUMMARY</b>
          </p>
          <hr />
          <p className="mt-4">Have a long history in QA, from junior QA specialist to team leader / mentor / project supervisor</p>
          <p className="mt-4">
            I've completed a course on Java Script automation at Hillel IT school <a href="https://certificate.ithillel.ua/view/92804927">Hillel Certificate</a>
          </p>

          <p className="mt-4">After struggling to find a job, I immersed myself in learning Java Script, CSS and HTML. Now I can create web applications.</p>
          <p className="mt-4">0 years of experience</p>

          <p className="mt-4">
            <b>SKILLS</b>
          </p>
          <hr />
          <ul className="tags relative flex flex-wrap justify-center w-full gap-2 pt-4 [&>li]:bg-[#95a7bf] [&>li]:p-2 [&>li]:rounded-xl">
            <li>HTML</li>
            <li>CSS</li>
            <li>Tailwind</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
          <p className="mt-4">
            <b>EDUCATION</b>
          </p>
          <hr />
          <section className="data-container flex mt-4">
            <ul className="flex justify-between w-full">
              <li>Computerized automation and control systems at Odessa National Polytechnic University</li>
              <li className="text-sm mt-[3px] min-w-fit">2005-2009</li>
            </ul>
          </section>
          <section className="data-container flex">
            <ul className="flex justify-between w-full">
              <li>Control and automation systems at Odessa National Polytechnic University</li>
              <li className="text-sm mt-[3px] min-w-fit">2009-2011</li>
            </ul>
          </section>
          <p className="mt-4">
            <b>WORK EXPERIENCE</b>
          </p>
          <hr />
          <section className="data-container flex mt-4">
            <ul className="flex justify-between w-full">
              <li>Manual QA at AB-Soft</li>
              <li className="text-sm mt-[3px] min-w-fit">2011-2023</li>
            </ul>
          </section>
        </div>
        <div className="side-content flex flex-col rounded-md py-2 px-4 bg-[#c8d6e8] max-w-[600px]">
          <p>
            <b>Contacts</b>
          </p>
          <hr />
          <div>
            <p className="mt-2">Location</p>
            <p className="text-sm flex justify-start">Odesa, Odesa Oblast, Ukraine</p>
          </div>
          <div>
            <p className="mt-2">Email</p>
            <a className="text-sm flex justify-start" href="mailto:innerspiritu@gmail.com">
              Inner Spiritu
            </a>
          </div>
          <div>
            <p className="mt-2">Telegram</p>
            <a className="text-sm flex justify-start" href="https://t.me/SpirituInteriore">
              Spiritu Interiore
            </a>
          </div>
          <div>
            <p className="mt-2">Linkedin</p>
            <a className="text-sm flex justify-start" href="https://linkedin.com/in/norman-kalyuzhny-7808752a0">
              Norman Kalyuzhny
            </a>
          </div>
          <div>
            <p className="mt-2">GitHub</p>
            <a className="text-sm flex justify-start" href="https://github.com/NormanKalyuzhny">
              Norman Kalyuzhny
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}