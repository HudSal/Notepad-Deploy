import React from 'react';
import './styles/header.css';
import {useHistory} from 'react-router-dom';
import { Storage } from '../services';
import { toast } from 'react-toastify';
import MyNote from '../images/MyNote.png';
import MyNote1 from '../images/MyNote1.png';

//The header component needs to have a Title of your application & have a Clear All button to clear the list from storage

export function Header({setNotes}){
const history= useHistory();


function onClearAllClick(){
    toast.success("All Notes are deleted successfully.", {
        position: 'top-center',
        autoClose: 3000,
    });
    Storage.removeItem('notes');
    setNotes([]);
    history.push('/');
}
    return(
        <header >
            <div className="header-container">
            <img src={MyNote} className="mylogo" alt="My Notes" onClick={()=>history.push('/')} />
            <h1 onClick={()=>history.push('/')}>My Notes</h1>            
            <button className="clearAllButton" onClick={onClearAllClick}>Clear All Notes</button>
            </div>
            {/* <img src={MyNote1} className="myNotes" alt="My Notes"/>
            <img src={MyNote1} className="myNotes" alt="My Notes"/>
            <img src={MyNote1} className="myNotes" alt="My Notes"/>
            <img src={MyNote1} className="myNotes" alt="My Notes"/>
            <img src={MyNote1} className="myNotes" alt="My Notes"/> */}
        </header>
    );
}