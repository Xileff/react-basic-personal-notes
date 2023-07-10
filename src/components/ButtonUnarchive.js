import React from "react";

function ButtonUnarchive({ dataId, fnUnarchive }) {
    return (
        <button className="note-item__archive-button" onClick={() => { fnUnarchive(dataId) }}>Move</button>
    )
}

export default ButtonUnarchive