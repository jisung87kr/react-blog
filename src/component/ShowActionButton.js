import React from "react";

const ShowActionButton = ({goBack, onEdit, onDelete}) => {
    return (
        <div>
            <button onClick={goBack} className="btn btn-primary">back</button>
            <button onClick={onEdit} className="btn btn-secondary mx-2">edit</button>
            <button onClick={onDelete} className="btn btn-danger">delete</button>
        </div>
    )
}

export default ShowActionButton;