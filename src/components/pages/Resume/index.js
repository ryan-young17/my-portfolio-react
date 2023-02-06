import React from 'react';
import pdf from './assets/young_resume.pdf';
import image from './assets/young_resume.png';

export default function Resume() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3 mt-5 pt-5'>
            <h4>Download Resume Below:</h4>
            <button className='btn btn-primary ms-5 mt-2'>
              <a className='text-light text-decoration-none' href={pdf} download>Download Here</a>
            </button>
        </div>
        <div className='col-9 mt-5 pt-4 mb-5'>
          <img className='border border-2 border-primary' src={image} width='850px' height='1100px' alt='Image of resume'></img>
        </div>
      </div>
    </div>
  );
}