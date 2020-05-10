import React from 'react';

import ReactGiphySearchbox from "react-giphy-searchbox";

const GifBox = (props) => {
  return(
    <ReactGiphySearchbox
      apiKey={process.env.REACT_APP_GIPHY_SEARCHBOX}
      onSelect={item => props.onSelectGif(item)}
      masonryConfig={[
        { columns: 2, imageWidth: 110, gutter: 5 },
        { mq: "700px", columns: 2, imageWidth: 110, gutter: 5 }
      ]}
    />
  )
}

export default GifBox;
