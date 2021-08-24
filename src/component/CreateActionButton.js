const CreateActionButton = ({onSubmit, onCancle}) => {
    return(
        <div>
            <button className="btn btn-primary" onClick={onSubmit}>submit</button>
            <button className="btn btn-secondary" onClick={onCancle}>back</button>
        </div>
    )
}

export default CreateActionButton;