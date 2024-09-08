import React from 'react';
import MyPdf from "../assets/Resume.pdf"; 

const About = () => {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <div style={styles.title}>
          <h2>About Me</h2>
        </div>
        <div style={styles.content}>
          <p>
          My name is Mona Fakhri. I am a student in the 
computer science program Cairo university, interested in analyzing biological data for bioinformatics. Use the R programming language and Linux operating system For next generation data analysis.
and I am also interested in Build machine learning models for machine learning. Use python and TensorFlow.
I also have a great interest in the field of front-end development and have implemented many projects.
now I am studying and taking care of my studies. 📜
          </p>

          <h3>Education</h3>
          <ul>
            <li>
              <strong>Bachelor of Science in Computer Science</strong>
              <br />
              Cairo University 
            </li>
            <li>
              <strong>Web Development Bootcamp</strong>
              <br />
          
            </li>
          </ul>

          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Front-End Developer</strong> 
              <br />
         
            </li>
           
          </ul>

          <a href={MyPdf} download style={styles.downloadButton}>
            Download My Resume
          </a>
        </div>
      </div>
    </section>
  );
};

const styles = {
    about: {
      display: 'flex',
      alignItems: 'flex-start', 
      justifyContent: 'flex-start',
      backgroundColor: '#FAEBD7', 
      color: 'black',
      padding: '100px',
      height: '70vh',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
    },
    title: {
      flex: 1,
      textAlign: 'left', 
      marginTop: '100px', 
      fontFamily: "Sans-Serif",
    },
    content: {
      flex: 2,
      paddingLeft: '10px',
      fontFamily: "Sans-Serif",
    },
    downloadButton: {
      display: 'inline-block',
      marginTop: '20px',
      padding: '10px 15px',
      backgroundColor: 'orange',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '25px',
    },
  };
  

  


export default About;