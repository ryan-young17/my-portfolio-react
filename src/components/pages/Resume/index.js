import React from 'react';
import pdf from './assets/young_resume.pdf';
import image from './assets/young_resume.png';

export default function Resume() {
  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-12 col-md-4 col-lg-3 mt-5 mb-1'>
            <h4>Download Resume Below:</h4>
            <button className='btn btn-primary'>
              <a className='text-light text-decoration-none' href={pdf} download>Download Here</a>
            </button>
        </div>
        <div className='col-12 col-md-8 col-lg-9 mt-5 mb-5'>
          <img className='border border-2 border-primary img-fluid' src={image} width='850px' height='1100px' alt='Image of resume'></img>
        </div>
      </div>
    </div>
  );
}