import React, { useEffect } from 'react';
import "./index.scss";
const Logo2 = () => {
  useEffect(() => {
    // Create script element for iframeResizer
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://testimonial.to/js/iframeResizer.min.js';
    script.onload = () => {
      // Once the script is loaded, execute the iFrameResize function
      if (window.iFrameResize) {
        window.iFrameResize({ log: false, checkOrigin: false }, '#testimonialto-bhavya-s-profile-tag-all-dark');
      }
    };
    document.body.appendChild(script);

    return () => {
      // Cleanup the script from the DOM
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      id='testimonialto-bhavya-s-profile-tag-all-dark'
      src='https://embed-v2.testimonial.to/w/bhavya-s-profile?theme=dark&card=base&loadMore=on&initialCount=20&tag=all'
      frameBorder='0'
      scrolling='no'
      width='100%'
      
    ></iframe>
  );
};

export default Logo2;
