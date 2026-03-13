import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({ NAME: '', EMAIL: '', SUBJECT: '', MESSAGE: '' });

  useEffect(() => {
    // 1. Sticky Header
    const handleScroll = () => {
      const header = document.querySelector(".header-area");
      header.classList.toggle("sticky", window.scrollY > 1);
    };

    // 2. Original ScrollReveal
    const sr = window.ScrollReveal({
      distance: "100px",
      duration: 2000,
      delay: 200
    });
    sr.reveal(".header a, .profile-photo, .about-content, .education", { origin: "left" });
    sr.reveal(".header ul, .profile-text, .about-skills, .internship", { origin: "right" });
    sr.reveal(".project-title, .contact-title", { origin: "top" });
    sr.reveal(".projects, .contact", { origin: "bottom" });

    // 3. Typed.js
    const typed = new window.Typed(".typing-text", {
      strings: ["College Student","Full Stack Developer", "Python Developer", "Data Scientist", "Musician"],
      loop: true,
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 500
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      typed.destroy();
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      alert("Stay tuned");
      setFormData({ NAME: '', EMAIL: '', SUBJECT: '', MESSAGE: '' });
    } catch (err) { console.error(err); }
  };

  return (
    <div className="App">
      <header className="header-area">
        <div className="container">
          <div className="header">
            <a href="#home" className="logo">
              <h3>Naveen</h3>
              <i className="fa fa-music" style={{ color: 'yellow' }}></i>
            </a>
            <ul className="navbar">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* HOME */}
      <section className="FirstElement" id="home">
        <div className="profile-photo">
          <img src="images/Naveen.jpeg" alt="profile" />
        </div>
        <div className="profile-text">
          <div className="profile-text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
  <h5 style={{ margin: '0', fontSize: '1.2rem', fontWeight: '400', color: '#ccc' }}>Hi I'm</h5>
  <h1 style={{ 
    lineHeight: '1.1', 
    margin: '0 0 10px 0', 
    fontSize: '4.5rem', 
    fontWeight: '800' 
  }}>NaveeN</h1>
  
  <p style={{ margin: '15px 0 25px 0', fontSize: '1.4rem' }}>
    I am a <span className="typing-text" style={{ color: 'yellow' }}></span>
  </p>
  
  <div className="btn-group" style={{ display: 'flex', gap: '12px' }}>
    <a href="/naveen resume.pdf" className="btn active" style={{ padding: '12px 28px' }}>Download Resume</a>
    <a href="mailto:naveen16004@gmail.com" className="btn" style={{ padding: '12px 28px' }}>Contact</a>
  </div>
</div>
          
         </div>
      </section>

      {/* ABOUT */}
      <section className="about-area" id="about">
        <div className="container">
          <div className="about">
            <div className="about-content">
              <h4>About Me</h4>
              <ul>
                <li>College student passionate about academics and music.</li>
                <li>Foundation in Java, Python, and Full Stack Development.</li>
                <li>Teaching guitar at a music academy.</li>
              </ul>
            </div>
            <div className="about-skills">
              <ul>
                <li>Name: T.Naveen</li>
                <li>Age: 21</li>
                <li>From: India</li>
                <li>Experience: &lt;1yr</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION & INTERNSHIP */}
      {/* EDUCATION & INTERNSHIP SECTION */}
<section className="education-content" id="education">
  <div className="container">
    <div className="row">
      
      
      {/* Education Column */}
      <div className="education" style={{ flex: '1', minWidth: '300px' }}>
        <h3 className="title">Education</h3>
        <div className="row" style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
          <div className="timeline-box">
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">B.tech CSE</h3>
                <h4 className="timeline-title">Bharath Institute of Higher Education and Research</h4>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> 2022-2026
                </h4>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">HSC-72%</h3>
                <h4 className="timeline-title">Kalaimagal Vidhya Mandhir Matriculation Higher Secondary School</h4>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">SSLC-60%</h3>
                <h4 className="timeline-title">Kalaimagal Vidhya Mandhir Matriculation Higher Secondary School</h4>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Internship Column */}
      <div className="internship" style={{ flex: '1', minWidth: '300px' }}>
        <h3 className="title">Internship</h3>
        <div className="row">
          <div className="timeline-box">
            <div className="timeline">
              
              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">DATA SCIENCE</h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> JUL-OCT-2025
                </h4>
                <p className="timeline-text">
                  Successfully completed the Data Science Master Internship by VCODEZ, 
                  gaining hands-on real time experience in data analysis, visualization, 
                  and predictive modeling.
                </p>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">DATA SCIENCE</h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> JAN-MAR-2025
                </h4>
                <p className="timeline-text">
                  Successfully completed the Data Science Master Virtual Internship by Altair, 
                  gaining hands-on experience in predictive modeling and business problem solving.
                </p>
              </div>

              <div className="timeline-item">
                <div className="circle-dot"></div>
                <h3 className="timeline-title">FULL STACK DEVELOPMENT</h3>
                <h4 className="timeline-title">
                  <i className="fa fa-calendar"></i> NOV-DEC-2024
                </h4>
                <p className="timeline-text">
                  Successfully completed the Full Stack Development program at CodeTech IT Solutions, 
                  mastering both front-end and back-end technologies.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

{/* PROJECTS SECTION */}
<section className="project-content" id="projects">
  <div className="container">
    <div className="project-title">
      <h4>My Projects</h4>
      <p>Discover my projects, where creativity meets innovation</p>
    </div>
    <div className="projects">
      
      <div className="project">
        <a href="https://github.com/naveen16004/Book-Look">
          <i className="fa fa-book"></i>
          <h4>Book Look</h4>
          <p>This is a Simple application the mainly focused on Java Script</p>
        </a>
      </div>
       
      <div className="project">
        <a href="https://github.com/naveen16004/Guessing-Game">
          <i className="fa fa-car"></i>
          <h4>GUESSING GAME</h4>
          <p>A Guess game which is having a 15 attempts to find the number using Frontend</p>
        </a>
      </div>
      
      <div className="project">
        <a href="https://github.com/naveen16004/Movie">
          <i className="fa fa-film"></i>
          <h4>Movie Site</h4>
          <p>A Movie finding Website which is fully based on Frontend</p>
        </a>
      </div>
      
    </div>
  </div>
</section>

 {/* CONTACT */}
      <section className="contact-content" id="contact">
        <div className="container">
          <div className="contact-title"><h4>Contact Me</h4></div>
          <form className="contact" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" required value={formData.NAME} onChange={(e) => setFormData({ ...formData, NAME: e.target.value })} />
            <input type="email" placeholder="Email" required value={formData.EMAIL} onChange={(e) => setFormData({ ...formData, EMAIL: e.target.value })} />
            <textarea placeholder="Message" value={formData.MESSAGE} onChange={(e) => setFormData({ ...formData, MESSAGE: e.target.value })}></textarea>
            <button type="submit" className="submit">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;