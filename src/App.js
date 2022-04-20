import './App.css';
import React,{useEffect, useState} from 'react';
import {Header,Router} from './components';
import {Storage} from './services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyNote1 from '../src/images/MyNote1.png';

function App() {
  const [notes,setNotes]= useState([]);
  const [title,setTitle]= useState('');
  const [content,setContent]=useState("");
  useEffect(()=>{
    setNotes(Storage.getItem('notes',[{title:title,content:content}]));
  },[]);

  function deleteOneNote(index){
    let new_note_array = Array.from(notes);
		new_note_array.splice(index, 1);
    Storage.setItem('notes',new_note_array)
		setNotes(new_note_array);
  }

  return (
    <div className="App">
      <Header notes={notes} setNotes={setNotes} />
      <Router notes={notes} setNotes={setNotes} deleteNote={deleteOneNote} />
      <ToastContainer />
    </div>
  );
}

export default App;
