import React from "react";

function ButtonArchive({ dataId, fnArchive }){
    return (
        <button className="note-item__archive-button" onClick={() => { fnArchive(dataId) }}>Archive</button>
    )
}

export default ButtonArchive