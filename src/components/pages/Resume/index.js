import React from 'react';
import pdf from './assets/young_resume.pdf';
import image from './assets/young_resume.png';

export default function Resume() {
  return (
    <div className='container'>
      <h1 className='mt-5 mb-3 text-light d-flex justify-content-center display-3'>Resume</h1>
      <div className='d-flex justify-content-center mb-4'>
        <button className='btn btn-primary'>
          <a className='text-light text-decoration-none' href={pdf} download>Download Here</a>
        </button>
      </div>
      <div className='d-flex justify-content-center'>
        <img className='border border-2 border-secondary img-fluid' src={image} width='850px' height='1100px' alt='Image of resume'></img>
      </div>
    </div>
  );
}