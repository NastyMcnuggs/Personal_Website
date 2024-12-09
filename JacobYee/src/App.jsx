import React from 'react'
import './App.css'


function App() {
  return (
    
    <div id="App">

      <div className='background'>
        
        <div className='center-picture'>
          <div className='profile-picture'></div>
        </div>

        <div className='text-block'>
          <h2 className='header'>Who Am I?</h2>
          <div className='normal-text'>
            I am a Senior at Louisiana Tech University
            and currently work at the LaTech Helpdesk 
            as an Information Technology technician.
          </div>
          <h2 className='header'>What do I do?</h2>
          <div className='normal-text'>
            I work as an IT technician at LaTech University.
            Most of my interests stem from robotics and building
            computers. 
          </div>
          <h2 className='header'>My Skills</h2>
          <div className='normal-text'>
            I have experience in coding languages such as:
            C, Python, Java, JavaScript, CSS, HTML, Arduino, and Swift.
          </div>
          <div className='normal-text'>
            I know much about building computers and the compatibility
            of hardware.
          </div>
        </div>

        <div className='objectives-block'>
          <h2 className='header'>Objective</h2>
          <div className='normal-text'>
          Seeking an opportunity to gain experience in the 
          STEM field in the realm of computer engineering 
          and have passion for computer science and embedded systems.
          </div>
          

        </div>
      </div>
      
      <section id="navbar-container">  
          <nav id="navbar">
            <h3 position="center">Contact Me</h3>
            <div>Phone: (318)-376-8581      
                Email: jacoby27@comcast.net
            </div>
            
          </nav>
          </section>

    </div>
  );
}

export default App
