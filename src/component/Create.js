import {useEffect} from "react";

function Create({title, content, changeFeild, createPost}){
    const onChangeField = (event) => {
        changeFeild(
            {
                key: event.target.name,
                value: event.target.value
            }
        );
    }

    return(
        <div>
            <div className="mb-3 row">
                <label htmlFor="title" className="col-sm-2 col-form-label">title</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="title" name="title" value={title} onChange={onChangeField}/>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="content" className="col-sm-2 col-form-label">content</label>
                <div className="col-sm-10">
                    <textarea name="content" id="content" cols="30" rows="10" className="form-control" value={content} onChange={onChangeField}></textarea>
                </div>
            </div>
        </div>
    )
}

export default Create;