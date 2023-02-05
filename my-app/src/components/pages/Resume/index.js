import React from 'react';
import pdf from './assets/young_resume.pdf';
import image from './assets/young_resume.png';

export default function Resume() {
  return (
    <div>
      <h1 className='mt-5 mb-3  d-flex justify-content-center display-3'>Resume</h1>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary mb-2'>
          <a className='text-light text-decoration-none' href={pdf} download>Download Here</a>
        </button>
      </div>
      <div className='d-flex justify-content-center mt-4 mb-5'>
        <img className='border border-2 border-primary' src={image} width='850px' height='1100px' alt='Image of resume'></img>
      </div>
    </div>
  );
}