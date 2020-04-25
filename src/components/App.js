import React, { Component } from 'react';
import Channels from './channels';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channels: ["Politics", "Economics", "World"],
    };
  }

  render() {
    return (
      <div>
        <Channels channels={this.state.channels}/>
      </div>
    );
  }
}

export default App;
