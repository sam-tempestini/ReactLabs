import React from 'react';

export default class Stamp extends React.Component {
  render(){
    const styleObj = {
      position: 'absolute',
      top: '10px',
      right: '10px',
      border: '1px solid #999',
      width: '70px',
      height: '80px',
      textTransform: 'uppercase',
      color: '#777',
      fontWeight: '600',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Rock Salt', cursive"
    };

    return (
      <div style={styleObj}>
        <span style={{transform: 'rotate(-45deg)'}}>Stamp</span>
      </div>
    );
  }
}

