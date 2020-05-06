import React from 'react';
import Image from '../../assets/images/react.png';

const Gif = ({ selectedGif }) => (
  <div className="selected-gif">
    {selectedGif ? (
      <img src={selectedGif} alt="gif" className="gif" />
    ) : (
      <img src={Image} alt="react" className="gif" />
    )}
  </div>
);

export default Gif;
