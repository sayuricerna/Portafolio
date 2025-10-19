import React from 'react';
const spritePath = '/tech-icons.svg'; 

function SvgIcon({ iconId, className, style }) {
  return (
    <svg className={className} style={style}>
      <use xlinkHref={`${spritePath}#${iconId}`} />
    </svg>
  );
}

export default SvgIcon;