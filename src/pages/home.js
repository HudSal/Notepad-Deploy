//The homepage needs to display the current list of notes stored in local storage.
//A note is an object with a “title” & “content” property. The list is an array of note objects.
//The homepage will also need to have an Add Note button below the list to navigate the user to
//the Add Note page.

import React from 'react';
import {useHistory} from 'react-router-dom';
import {Row} from '../components';
import './styles/home.css';
import { toast } from 'react-toastify';

export function Home({notes, deleteNote}){
    const history= useHistory();

    function renderData(){
        let items = [];
		//loop: for forEach map
		for(let i = 0; i < notes.length; i++) {
			function onRowDelete() {
                toast.success(" Note is deleted successfully ", {
                    position: 'top-center',
                    autoClose: 3000,
                });
				deleteNote(i);
			}
            function onClickNoteRow(){
                history.push(`./edit/${i}`)
            }
			//  Add row number: {i+1}
			items.push(
				<Row
					index={i}
					value={notes[i]}
                    onClickRow={onClickNoteRow}
					onClickDeleteRow={onRowDelete}
				/>
			);
		}
		return items;

    }

    function onClickAddNew(){
        history.push('./create');
    }
    return(
        <div className="home-container">
            <h1>My Note List </h1>
			<div>
				{renderData()}
			</div>
            <br/>
            <button className="btn-AddNewNote" onClick={onClickAddNew}>+ Create New Note</button>
        </div>
        
     
    );
}