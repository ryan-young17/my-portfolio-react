import React from 'react';
import image from './assets/headshot.png';

const styles = {
  image: {
    maxHeight: 300,
    borderRadius: '50%',
  }
};

export default function About() {
  return (
    <div>
      <h1 className='m-5 d-flex justify-content-center display-3 text-light'>About Me</h1>
      <div className='container'>
        <div className='row justify-content-center m-3'>
          <div className='col-12 col-md-4 col-lg-3 mb-3'>
            <img className="img-fluid" style={styles.image} src={image} alt='Image of Ryan Young'></img>
          </div>
          <div className='col-12 col-md-8 col-lg-9'>
            <p className='text-light p-5'>
            I am a full-stack web developer with experience in various programming languages such as HTML, CSS, JavaScript, SQL, NoSQL, etc., and a passion for web design. I also have a background in marketing, writing, and graphic design, giving me an advanced perspective on web applications UI/UX. Blending these skills gives me the unique ability to understand both design and client-expectations, and how they coincide with the structure of the application. I look forward to any future projects, opportunities, and collaborations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}