import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const handleInputChange = (event) => {
    const { target } = event;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setErrMessage('Please enter your name.');
      return;
    } 
    if (!validateEmail(email)) {
      setErrMessage('Please enter a valid email address.');
      return;
    }
    if (!message) {
      setErrMessage('Please include a message.');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
    setErrMessage('');
  };

  return (
    <div className='container'>
      <h1 className='ms-5 mt-5 mb-3 display-3 text-light d-flex justify-content-center'>Contact</h1>
      <div className='m-5'>
        <form className='needs-validation'>
          <div className="mb-3 form-outline">
            <input className="form-control" name='name' value={name} type="text" placeholder="Name" onChange={handleInputChange} required/>
          </div>
          <div class="mb-3 form-outline">
            <input className="form-control" name='email' value={email} type="email" placeholder="Email" onChange={handleInputChange} required/>
          </div>
          <div className="mb-3 form-outline">
            <textarea className="form-control" name='message' value={message} type="text" placeholder="Message" onChange={handleInputChange} required/>
          </div>
          {errMessage && (
            <div>
              <p className="error-text text-danger">{errMessage}</p>
            </div>
          )}
          <button type="submit" className="btn btn-primary" onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
}