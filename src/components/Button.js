import React from 'react';

class Button extends React.Component {
  
  render() {
    return (
      <div>
        <button onClick={this.props.testReact} className="test-button">
          Test React
        </button>
      </div>
    )
  }
}

export default Button;