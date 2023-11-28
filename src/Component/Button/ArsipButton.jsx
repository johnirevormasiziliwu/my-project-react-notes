// ArsipButton.jsx

import React from 'react';

const ArsipButton = ({  onArsipClick, archived }) => {
 
const buttonText = archived ? 'Arsip' : 'Pindah' 
  return (
   <div className='w-full'>
    <button className='absolute  top-[275px] md:left-[280px] left-[245px]' onClick={onArsipClick}>{buttonText}</button>
   </div>
  );
};

export default ArsipButton;
