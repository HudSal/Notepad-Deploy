import React from 'react';
import './styles/row.css';


/**Create a functional component called Row.
Each row in the list on the homepage needs to use a Row component to display the note title and
a delete button.
When delete is clicked the current note is removed from the list of notes.
When a row is clicked the user is sent to the Edit Note page. */

export function Row({onClickDeleteRow,value,index,onClickRow}){


    return(
        <div className="row-container"> 
            <div key={"name" + index} className="row-notelist" >
                {index + 1}. <span  onClick={onClickRow}>{value.title}:</span> <span onClick={onClickRow}>{value.content}</span>
                <button className="btn-DleteOneNote" onClick={onClickDeleteRow}>Delete This Note</button>  
		    </div>   
                  
        </div>
    );
}