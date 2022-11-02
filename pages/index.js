import Head from 'next/head'
import {BsFillMoonFill,Bsmoon} from 'react-icons/bs';
import { AiFillLinkedin, AiFillGithub, AiFillPlayCircle} from 'react-icons/ai';
import Image from "next/image";
import deved from "./public/dev-josh-wave.png";
import score from "./public/dev-score-wave.png";
import health from "./public/dev-health-wave.png";
import chat from "./public/dev-chat-wave.png";
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Joshua Guerra Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-800'>
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className='text-xl font-burtons dark:text-white'>developedbyed</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonFill onClick={() => setDarkMode(!darkMode)}  className='cursor-pointer text-2xl'/>
            </li>
          </ul>
        </nav>
        <div className='text-center p-10'>
          <h2 className='text-5xl py-2 text-cyan-500 font-medium'>Joshua Guerra</h2>
          <h3 className='text-2xl py-2 dark:text-white'> Software Developer & System Administrator</h3>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'>
            Entery level developer and cybersecurity student looking to break into the tech field.
          </p>
          <p className='text-md py-5 leading-8 text-gray-800 dark:text-white'> Feel free to contact me on Linkedin via the link below. </p>
          </div>
          <div className='text-5xl flex justify-center gap-10 py-3 text-gray-600'>
            <a href='https://www.linkedin.com/in/joshuaguerra94'> <AiFillLinkedin /></a>
        
        </div>
        <div className=' relative mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
          <Image src={deved} alt="memoji Logo" layout='fill' objectFit='cover'/>
        </div> 
   
        <div className=' text-center py-20 dark:text-white'>
          <h3 className='text-3xl '>PROJECTS</h3>
          <p className='text-md py-2 leading-8 text-gray-800'>
          </p>
        </div>
        <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:text-white'>
          <a className='text-5xl text-gray-600' href='https://Thyroid-App.mrjjg94.repl.co'> <AiFillPlayCircle/></a>
            <Image src={health} alt="health logo" width={300} height={300}/> 
            <h3 className='text-lg font-medium pt-6 pb-2 text-cyan-500'> Thyroid App</h3>
            <p className='py-2'>
            Built a Thyroid web app using the jQuery Mobile Framework that allows patients to track their cancer type, state, and TSH range.
          Learned how to structure an app using HTML while utilizing local storage and coding the JavaScript for password and data entry. Worked with HTML5 software libraries such as RGraph to graph the data over time.
            </p>
            <h4 className='py-4 text-cyan-500'> Tools Used</h4>
            <p className='text-gray-800 py-1 dark:text-white'>Next.js</p>
            <p className='text-gray-800 py-1 dark:text-white'>JQuery</p>
            <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
            <p className='text-gray-800 py-1 dark:text-white'>Tailwind CSS</p>
            <p className='text-gray-800 py-1 dark:text-white'>HTML</p>

          </div>
        <div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:text-white'>
          <a className='text-5xl text-gray-600' href='https://chapter-07-lab-Mrjjg94.mrjjg94.repl.co'> <AiFillPlayCircle/></a>
          <Image src={score} alt="Credit score logo" width={200} height={200}/>
            <h3 className='text-lg font-medium pt-6 pb-2 text-cyan-500'> Credit Score Tracker</h3>
            <p className='py-2 '>
            Built a Credit Score Tracker app with the jQuery Mobile Framework. I managed to track credit scores over time wille pushing out advice after input and graphing your score using RGraph.
            </p>
            <h4 className='py-4 text-cyan-500'> Tools Used</h4>
            <p className='text-gray-800 py-1 dark:text-white'>Replit</p>
            <p className='text-gray-800 py-1 dark:text-white'>JQuery</p>
            <p className='text-gray-800 py-1 dark:text-white'>JavaScript</p>
            <p className='text-gray-800 py-1 dark:text-white'>CSS</p>
            <p className='text-gray-800 py-1 dark:text-white'>HTML</p>

          </div>
          <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:text-white'>
            <Image src={chat} alt="Chatbot logo" width={300} height={300}/>
            <h3 className='text-lg font-medium pt-6 pb-2 text-cyan-500'> Math Chatbot</h3>
            <p className='py-2'>
            Built a rule-based math chatbot in React for gathering data sets to chart linear regression.
            Learned App.JS for frontend development while using Firebase to authenticate users and React to work with real-time data.
            </p>
            <h4 className='py-4  text-cyan-500 '> Tools Used</h4>
            <p className='text-gray-800 py-1 dark:text-white'>React</p>
            <p className='text-gray-800 py-1 dark:text-white'>Firebase</p>
            <p className='text-gray-800 py-1 dark:text-white'>Javascript</p>
            <p className='text-gray-800 py-1 dark:text-white'>CSS</p>
            <p className='text-gray-800 py-1 dark:text-white'>HTML</p>

          </div>
       
        </div>
      </section>
      </main>
    </div>
  );
  }
