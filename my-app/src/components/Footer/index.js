import React from 'react';
import gitHub from './assets/github-mark-white.png';
import linkedIn from './assets/linkedin-mark-white.png';
import twitter from './assets/twitter-mark-white.png';

const styles = {
    image: {
      margin: 20,
      maxHeight: 30,
    }
  };

export default function FooterTabs() {
    return (
        <footer className='footer bg-primary p-2 d-flex justify-content-center'>
            <ul>
                <a href='https://github.com/ryan-young17' target="_blank">
                    <img style={styles.image} src={gitHub} alt='GitHub Logo'></img>
                </a>
                <a href='https://www.linkedin.com/in/ryan-young-77491a19b/' target="_blank">
                    <img style={styles.image} src={linkedIn} alt='LinkedIn Logo'></img>
                </a>
                <a href='https://twitter.com/ryan_young08' target="_blank">
                    <img style={styles.image} src={twitter} alt='Twitter Logo'></img>
                </a>
            </ul>
        </footer>
    );
};