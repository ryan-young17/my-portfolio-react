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
      <h1 className='m-5 d-flex justify-content-center display-3'>About Me</h1>
      <div className='container'>
        <div className='row justify-content-center m-3'>
          <div className='col-12 col-md-4 col-lg-3 mb-3'>
            <img className="img-fluid" style={styles.image} src={image} alt='Image of Ryan Young'></img>
          </div>
          <div className='col-12 col-md-8 col-lg-9'>
            <p>
              Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
              Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
              mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
              lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
              imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
              in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}