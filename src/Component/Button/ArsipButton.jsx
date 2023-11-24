// ArsipButton.jsx

import React from 'react';

const ArsipButton = ({  onArsipClick, archived }) => {
 
const buttonText = archived ? 'Arsip' : 'Pindah' 
  // return (
  //   <div className="notes-button  border-b-2  border-r-2 rounded-br-md border-orange-600 ">
  //    <button className="notes-button-delete text-center sm:w-[200px] w-[168px] md:w-[194px] h-10 text-lg font-semibold" onClick={onArsipClick}>{buttonText}</button>
  //   </div>
  // );
};

export default ArsipButton;
