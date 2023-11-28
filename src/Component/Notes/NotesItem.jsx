

import React from 'react';
import NotesItemBody from './NotesItemBody';
import DeleteButton from '../Button/DeleteButton';
import ArsipButton from '../Button/ArsipButton';

function NotesItem({ title, createAt, body, id, onDelete, onArsip, archived }) {
  const handleArsipClick = () => {
    onArsip(id);
  };

  return (
    <div className='notes-item  mb-10 relative '>
      <NotesItemBody title={title} createAt={createAt} body={body} />
      <div className="flex justify-between mt-[-12px] ">
        <DeleteButton id={id} onDelete={onDelete} />
        <ArsipButton archived={archived} onArsipClick={handleArsipClick} />
      </div>
    </div>
  );
}

export default NotesItem;
