import React from "react";

function ButtonDelete({ dataId, fnDelete }){
    return (
        <button className="note-item__delete-button" onClick={() => { fnDelete(dataId) }}>Delete</button>
    )
}

export default ButtonDelete