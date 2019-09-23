import React from 'react';

export default props => (
  <div
    style={{

      backgroundColor: '#18d26e',
      height: '15px',
      width: '15px',
      border: '2px solid white',
      icon: 'default'

    }}
    onClick={() => props.handleLocationClick(props.id)}
  >
    {props.children}
  </div>
);
