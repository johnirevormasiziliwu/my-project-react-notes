import React from "react";

function NotesItemBody({ title, createAt, body }) {
  return (
    <div className="notes-item__body h-80 w-full border-2 relative border-orange-600 rounded-md bg-white shadow p-3">
      <h1 className="text-xl font-semibold py-1 w-full">{title}</h1>
      <h5 className="text-gray-600 font-normal">{createAt}</h5>
      <p className="text-justify py-1">{body}</p>
      <div>
        
        <hr className="border  border-orange-600 w-full absolute left-0 top-64 " />
        
        <hr className="border border-orange-600  absolute left-1/2 top-64  h-[62px] " />
      </div>
    </div>
  );
}

export default NotesItemBody;
