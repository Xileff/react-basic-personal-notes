import React from "react";
import { getInitialData } from '../utils/data.js'
import Header from "./Header.js";
import NotesList from "./NotesList.js";
import InputNote from "./InputNote.js";

class NotesApp extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            data: getInitialData(),
            keyword: ''
        }

        this.addNewNote = this.addNewNote.bind(this)
        this.deleteExistingNote = this.deleteExistingNote.bind(this)
        this.archiveExistingNote = this.archiveExistingNote.bind(this)
        this.unarchiveExistingNote = this.unarchiveExistingNote.bind(this)
        this.getNotes = this.getNotes.bind(this)
    }

    addNewNote({ id, title, body, archived, createdAt }){
        this.setState(state => {
            return {
                data: [
                    ...state.data,
                    {
                        id, title, body, archived, createdAt
                    }
                ]
            }
        })
    }

    deleteExistingNote(id){
        this.setState(() => {
            return {
                data: this.state.data.filter(d => d.id !== id)
            }
        })
    }

    archiveExistingNote(id){
        this.setState(() => {
            return {
                data: this.state.data.map(d => {
                    if(d.id === id) {
                        d.archived = true
                    }
                    return d
                })
            }
        })
    }

    unarchiveExistingNote(id) {
        this.setState(() => {
            return {
                data: this.state.data.map(d => {
                    if(d.id === id) {
                        d.archived = false
                    }
                    return d
                })
            }
        })
    }

    getNotes(keyword) {
        this.setState(() => {
            return {
                keyword: keyword
            }
        })
    }

    render(){
        return (
            <div className="container-fluid">
                <Header fnGetNotes={this.getNotes} />
                <div className="note-app__body">
                    <InputNote addNewNote={this.addNewNote} />
                    <h2 className="poppins">Catatan Aktif</h2>
                    <NotesList 
                        dataList={this.state.data.filter(d => !d.archived && d.title.toLowerCase().includes(this.state.keyword.toLowerCase())) } 
                        fnDelete={this.deleteExistingNote} 
                        fnArchive={this.archiveExistingNote} 
                        fnUnarchive={this.unarchiveExistingNote}/>
                    <h2 className="poppins">Arsip</h2>
                    <NotesList 
                        dataList={this.state.data.filter(d => d.archived && d.title.toLowerCase().includes(this.state.keyword.toLowerCase()))} 
                        fnDelete={this.deleteExistingNote} 
                        fnArchive={this.archiveExistingNote} 
                        fnUnarchive={this.unarchiveExistingNote}/>
                </div>
            </div>
        )
    }
}

export default NotesApp