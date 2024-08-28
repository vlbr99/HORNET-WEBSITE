import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import './app.scss';
import req from './image.png';
import url from './image2.png';
import status from './image3.png';
import console from './image4.png';
import body from './image5.png';
import num from './image6.png';
import rq from './image7.png';

const App = () => {
  // State to store the screen width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect to update the screen width when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Check if the screen width is less than 1000px
  const isScreenTooSmall = windowWidth < 1000;

  return (
    <>
      {isScreenTooSmall ? (
        <main>
          <h1>Unsupported Device</h1>
          <p>This website is only supported on PC. Please visit us using a larger screen.</p>
        </main>
      ) : (
        <>
          <Header />
          <main>
            <h1>Lightweight Desktop App for API Testing</h1>
            <p>Discover a streamlined platform designed for efficient API testing, available at no cost. Our user-friendly documentation ensures a quick start without any registration requirements. Explore the full potential of our tool effortlessly!</p>
            <div id="main_buttons">
              <button>Download (.exe)</button>
              <button>Source Code</button>
            </div>
          </main>
          <main>
            <h1>Documentation</h1>
            <p><img src={req} alt="Request type dropdown menu" /> Click this button to open a dropdown menu where you can select the type of request to be made.</p>
            <p><img src={url} alt="URL field" /> Enter the URL where the request will be sent in this field.</p>
            <p><img src={status} alt="Status bar" /> The status bar indicates network connectivity. The application operates correctly if the status reads "CONNECTED TO NETWORK."</p>
            <p><img src={console} alt="Console button" /> Click this button to open the console and view the request data.</p>
            <p><img src={body} alt="Request body button" /> Click this button to modify the request body, which is formatted in JSON.</p>
            <p><img src={num} alt="Number of requests button" /> Click this button to select the number of requests to be sent.</p>
            <p><img src={rq} alt="Request execution interval button" /> Click this button to set the interval for request execution.</p>
          </main>
          <section style={{ marginBottom: "50px" }}>
            <h1>As Simple As That</h1>
            <p>Get started with HORNET today.</p>
            <div id="main_buttons">
              <button>Download (.exe)</button>
              <button>Source Code</button>
            </div>
          </section>
        </>
      )}
    </>
  );
}

export default App;
