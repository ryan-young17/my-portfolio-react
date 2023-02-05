import React from 'react';

export default function Contact() {
  return (
    <div>
      <h1 className='ms-5 mt-5 mb-3 display-3'>Contact</h1>
      <div className='ms-5 me-5'>
        <form>
          <div class="mb-3 form-outline w-50">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" />
          </div>
          <div class="mb-3 form-outline w-50">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
          </div>
          <div class="mb-3 input-group-lg form-outline w-50">
            <label class="form-label">Message</label>
            <textarea type="text" class="form-control" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
