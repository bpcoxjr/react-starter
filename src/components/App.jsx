import React from 'react';
import Button from './Button';

import '../css/styles.scss';

class App extends React.Component {
  
  testReact() {
    alert('React works!');
  }
  
  render() {
    return (
     <div className="container">
        <img src={require('../img/react.png')} alt="react logo" className="logo" />
        <Button testReact={this.testReact}/>
      </div>);
  }
}

export default App;