import React,{useState,useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {Storage,SessionStorage} from '../services';
import { toast } from 'react-toastify';
import './styles/edit.css';

/**The Edit Note page will need to have a form that allows a user to edit a note.
The user can edit the ‘title’ and ‘content’ property of a note.
There needs to be a Save Note button that submits the form and updates the note. The user
should also be navigated back to the previous page when submitting the form. */

export function Edit({notes,setNotes}){
 
    const {id}=useParams();
    const history= useHistory();
    const [title,setTitle]= useState('');
    const [content,setContent]=useState('');

    useEffect(()=>{
        setTitle(SessionStorage.getSessionItem('title',notes[id].title));
        setContent(SessionStorage.getSessionItem('content',notes[id].content));
        setNotes(Storage.getItem('notes',[]));
    },[]);

   

    function onClickSave(){
        let newListNotes=Array.from(notes);
        let note=newListNotes[id];
        note.title=title;
        note.content=content;
        setNotes(newListNotes);
        Storage.setItem('notes',newListNotes);
        SessionStorage.removeSessionItem('title');
        SessionStorage.removeSessionItem('content');
        toast.success('My note is updated successfully.',{
            position: "top-center",
            autoClose: 3000,
        });
        history.push('/');
    }
    return(
        <div className="edit-form">
            <h1>Let Me Edit This Note</h1>
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
            <button className="btn-CreateNewNote" onClick={onClickSave}>Save Changes</button>
        </div>
    );
}