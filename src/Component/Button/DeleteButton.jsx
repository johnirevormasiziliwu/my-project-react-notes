import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <div>
      <button className="absolute top-[275px] left-20 " onClick={() => onDelete(id)}>Hapus</button>
    </div>
  );
}

export default DeleteButton;
