import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {Edit, Home, Create} from '../pages'

export function Router({notes, setNotes,deleteNote}){
    return(
        <Switch>
            <Route exact path="/"><Home notes={notes} deleteNote={deleteNote}/></Route>
            <Route exact path="/create"><Create notes={notes} setNotes={setNotes} /></Route>
            <Route exact path="/edit/:id"><Edit notes={notes} setNotes={setNotes} /></Route>
            <Route>404 not found. This page not exist.</Route>
        </Switch>
    );
}