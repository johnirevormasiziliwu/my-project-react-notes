import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <div className="notes-button rounded-bl-md border-b-2 border-l-2 border-r-2 border-orange-600 ">
     <button className="notes-button-delete text-center sm:w-[200px] w-[176px] md:w-[200px] h-10 text-lg font-semibold" onClick={() => onDelete(id)}>Hapus</button>
    </div>
  );
}

export default DeleteButton;
