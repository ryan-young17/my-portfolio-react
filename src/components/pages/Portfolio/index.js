import React from 'react';
import noteImage from './assets/noteTaker.png';
import teamImage from './assets/teamGenerator.png';
import blogImage from './assets/techBlog.png';
import todoImage from './assets/todoScheduler.png';
import weatherImage from './assets/weatherDash.png';
import duetImage from './assets/duet.png';

export default function Portfolio() {
  return (
    <div>
      <h1 className='m-5 text-light d-flex justify-content-center display-3'>Portfolio</h1>
      <div className='container mb-5'>
        <div className='row justify-content-center m-3'>
          <div className="col card m-1 border-dark bg-dark">
            <img src={blogImage} alt='Screenshot of The Tech Blog site.' height='200' className="card-img-top"></img>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light"><strong>The Tech Blog</strong></h5>
              <p className="card-text text-dark">The Tech Blog is a CMS-style blog site where users can create blog posts and interact with other blog posts by commenting and sharing opinions.</p>
            </div>
            <div className="card-body bg-secondary">
              <a href="https://thawing-gorge-80777.herokuapp.com/" className="btn btn-dark text-light mb-1 me-2">Live Site</a>
              <a href="https://github.com/ryan-young17/tech-blog" className="btn btn-dark text-light mb-1">Repo</a>
            </div>
          </div>
          <div className="col card m-1 border-dark bg-dark">
            <img src={duetImage} alt='Screenshot of Duet site.' height='200' className="card-img-top"></img>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light"><strong>Duet Dating App</strong></h5>
              <p className="card-text text-dark">Duet is a new way to connect with people across the world through a love of common music interests or a pursuit of something new.</p>
            </div>
            <div className="card-body bg-secondary">
              <a href="https://frozen-garden-71099.herokuapp.com/" className="btn btn-dark text-light mb-1 me-2">Live Site</a>
              <a href="https://github.com/ryan-young17/duet" className="btn btn-dark text-light mb-1">Repo</a>
            </div>
          </div>
          <div className="col card m-1 border-dark bg-dark">
            <img src={weatherImage} alt='Screenshot of The Tech Blog site.' height='200' className="card-img-top"></img>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light"><strong>Weather Dashboard</strong></h5>
              <p className="card-text text-dark">The Weather Dashboard application allows a user to input any major city in the search form and receive that city's current weather, and its five-day forecast.</p>
            </div>
            <div className="card-body bg-secondary">
              <a href="https://ryan-young17.github.io/weather-forecast/" className="btn btn-dark text-light mb-1 me-2">Live Site</a>
              <a href="https://github.com/ryan-young17/weather-forecast" className="btn btn-dark text-light mb-1">Repo</a>
            </div>
          </div>
        </div>
        <div className='row justify-content-center m-3'>
          <div className="col card m-1 border-dark bg-dark">
            <img src={noteImage} alt='Screenshot of The Tech Blog site.' height='200' className="card-img-top"></img>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light"><strong>The Note Taker</strong></h5>
              <p className="card-text text-dark">This application allows users to input notes with a title and a description, while also allowing them to save for future review.</p>
            </div>
            <div className="card-body bg-secondary">
              <a href="https://whispering-beyond-64371.herokuapp.com/" className="btn btn-dark text-light mb-1 me-2">Live Site</a>
              <a href="https://github.com/ryan-young17/note-taker" className="btn btn-dark text-light mb-1">Repo</a>
            </div>
          </div>
          <div className="col card m-1 border-dark bg-dark">
            <img src={teamImage} alt='Screenshot of The Tech Blog site.' height='200' className="card-img-top"></img>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light"><strong>Team Generator</strong></h5>
              <p className="card-text text-dark">This application was created to help users create a webpage with their team's information using their local terminal.</p>
            </div>
            <div className="card-body bg-secondary">
              <a href="https://ryan-young17.github.io/team-profile-generator/" className="btn btn-dark text-light mb-1 me-2">Live Site</a>
              <a href="https://github.com/ryan-young17/team-profile-generator" className="btn btn-dark text-light mb-1">Repo</a>
            </div>
          </div>
          <div className="col card m-1 border-dark bg-dark">
            <img src={todoImage} alt='Screenshot of The Tech Blog site.' height='200' className="card-img-top"></img>
            <div className="card-body bg-secondary">
              <h5 className="card-title text-light"><strong>The Todo Scheduler</strong></h5>
              <p className="card-text text-dark">This work-day scheduler allows a user to input their daily to-dos for each hour of the day with an option to save for later review.</p>
            </div>
            <div className="card-body bg-secondary">
              <a href="https://ryan-young17.github.io/todo-schedule/" className="btn btn-dark text-light mb-1 me-2">Live Site</a>
              <a href="https://github.com/ryan-young17/todo-schedule" className="btn btn-dark text-light mb-1">Repo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}