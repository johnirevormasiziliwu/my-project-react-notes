import React from "react";

function NotesItemBody({  title, createAt, body }) {
  return (
    <div className="body-item__body flex justify-center    ">
      
      <div className="lg:w-[400px]  sm:w-[400px] md:w-[400px] md:h-52 w-[350px]  my-3 border-2 border-orange-600 md:p-3 p-3  rounded-t-md  ">
      <h3 className="body-item__title text-lg font-semibold py-0">{title}</h3>
      <span className="body-item__createat text-zinc-400 text-sm">{createAt}</span>
      <p className="body-item__body font-normal">{body}</p>
      </div>
    </div>
  );
}

export default NotesItemBody;
