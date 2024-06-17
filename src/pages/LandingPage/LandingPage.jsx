import React, { useState, useEffect } from 'react';

import "./Landingpage.css";

const images = [
  "https://image-resource.creatie.ai/127027295676199/127027295676201/fee8dcc68324dddddec89d2635056fe1.png",
  "https://image-resource.creatie.ai/127027295676199/127027295676201/38d201530f7eda297d843e6992db18f4.png",
  "https://image-resource.creatie.ai/127027295676199/127027295676201/847d1192c3029948a309c2c83c338302.png"
];

const Root = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={'landing-page'}>
      <div className={'frame-1'}>
        <img src={images[currentIndex]} className={'unsplashwtbjpqu-0vq'} />
        <div className={'rectangle-1'}></div>
      </div>
      <div className={'frame-2'}>
        <div className={'rectangle-2'}></div>
        <img src="https://image-resource.creatie.ai/127027295676199/127027295676201/433b812c0a9d44e397ebe3c48ba9107f.png" className={'asset-2-1'} />
      </div>
      <div className={'saarthi'}>SAARTHI</div>
      <div className={'one-stop-for-all-tours'}>One Stop for all Tours</div>
      <div className={'frame-3'}>
        <div className={'get-started'}>Get Started</div>
        <svg id="0:33" className={'icon-iconoir-arrow-right'}></svg>
      </div>
    </div>
  );
};

export default Root;
