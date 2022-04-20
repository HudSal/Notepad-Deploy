import React,{useState,useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {Storage,SessionStorage} from '../services';
import { toast } from 'react-toastify';
import './styles/create.css';
/**The Add Note page will need to have a form that allows a user to add a note.
A note will have a ‘title’ and a ‘content’ property.
Title will be a regular input and content will be a textarea.
The form data will need to be stored using session storage.
There needs to be an Add Note button that submits the form and adds a new note using the form
data. The form data should also be cleared from session storage on click. The user should also be
navigated back to the previous page when submitting the form. */

export function Create({notes, setNotes}){
    const history= useHistory();
    const [title,setTitle]= useState('');
    const [content,setContent]=useState("");


    useEffect(()=>{
        setTitle(SessionStorage.getSessionItem('title',''));
        setContent(SessionStorage.getSessionItem('content',''));
        setNotes(Storage.getItem('notes',[]));
    },[]);

    function onClickCreate(){
        if(title&&content){
            let note={};
            note.title=SessionStorage.getSessionItem('title','');
            note.content=SessionStorage.getSessionItem('content','');
            let newListNotes=[...notes,note];
            setNotes(newListNotes);
            Storage.setItem('notes',newListNotes);
            SessionStorage.removeSessionItem('title');
            SessionStorage.removeSessionItem('content');
            toast.success('Great!! My new note is added successfully.',{
                position: "top-center",
                autoClose: 3000,
            });
            history.push('/');
        }
        else{
            toast.error("Don't forget the Title and Content are required to create new Note", {
                position: 'top-center',
                autoClose: 5000,
            });
        }
        
    }
    return(
        <div className='create-form'>
            <h1>Let Me Add New Note</h1>
            <br/>
            <label>Title:</label>
            <p>
                <input 
                    className="title-form"
                    placeholder="Title" 
                    value={title}
                    onChange={
                        (event)=>{
                            let newTitle= event.target.value;
                            setTitle(newTitle);
                            SessionStorage.setSessionItem('title',newTitle);
                        }
                    }
                />
            </p>
            <br/>
            <label>Content:</label>
            <p>
                <textarea 
                    className="title-form"
                    placeholder="Content" 
                    value={content}
                    rows={10}
                    onChange={
                        (event)=>{
                            let newContent= event.target.value;
                            setContent(newContent);
                            SessionStorage.setSessionItem('content',newContent);
                        }
                    }
                />
            </p>
            <button className="btn-CreateNewNote" onClick={onClickCreate}>Create New Note</button>
        </div>
    );
}