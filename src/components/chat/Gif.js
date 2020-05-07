import React from 'react';
import Image from '../../assets/images/react.png';

const Gif = ({ selectedGif }) => {
  if (selectedGif) {
    return <img src={selectedGif} alt="gif" className="gif" />
  }
    return <img src={Image} alt="react" className="gif" />
};

export default Gif;

