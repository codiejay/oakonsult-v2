import React from 'react';
import '../Scss/SectionIcon.scss';

const SectionIcon = (props) => {
  const iconStyle = {
    height: '100px',
    width: '100px',
    background: `url(${props.image}), #009ba7`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '50%',
  };
  return <div id='IconDiv' style={iconStyle}></div>;
};

export default SectionIcon;
