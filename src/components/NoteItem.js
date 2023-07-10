import React from "react";
import { showFormattedDate } from '../utils/data.js'
import ButtonDelete from './ButtonDelete.js'
import ButtonArchive from './ButtonArchive.js'
import ButtonUnarchive from "./ButtonUnarchive.js";

function NoteItem({ data, fnDelete, fnArchive, fnUnarchive }){
    return (
        <div className="note-item rounded-4 p-1">
            <section className="note-item__content">
                <h3 className="note-item__title montserrat">{data.title}</h3>
                <p className="note-item__date">{showFormattedDate(data.createdAt)}</p>
                <p className="note-item__body">{data.body}</p>
            </section>
            <section className="note-item__action">
                <ButtonDelete dataId={data.id} fnDelete={fnDelete} />
                { data.archived ? <ButtonUnarchive dataId={data.id} fnUnarchive={fnUnarchive} /> : <ButtonArchive dataId={data.id} fnArchive={fnArchive} /> }
            </section>
        </div>
    )
}

export default NoteItem