import React from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import NotesApp from "./Component/Notes/NotesApp";



const root = createRoot(document.getElementById("root"));
root.render(<NotesApp />);
