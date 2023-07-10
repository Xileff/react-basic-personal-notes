import React from "react";
import NoteItem from './NoteItem.js'

function NotesList({ dataList, fnDelete, fnArchive, fnUnarchive }){
    if(dataList.length > 0){
        return (
            <section className="notes-list">
                {
                    dataList.map(data => (
                        <NoteItem key={data.id} data={data} fnDelete={fnDelete} fnArchive={fnArchive} fnUnarchive={fnUnarchive} />
                    ))
                }
            </section>
        )
    }

    else {
        return (
            <p className="notes-list__empty-message">Tidak ada catatan</p>
        )
    }
}

export default NotesList