import React from 'react'

const CreateNewPost=(props)=> {
    return (
        <div>
          <form onSubmit={props.savePost}>
      <h1>Create New Post</h1>
      <input type ="text" onChange={props.savePostTitleToState} ref={props.getTitle} placeHolder="title" size="39" required></input>
      <br />
      <br />
      <textarea placeHolder="contents" onChange={props.savePostContentToState} ref={props.getContent} rows="8" cols="41"required></textarea>
      <br />
      <br />
      <button>Save Post</button>
</form>  
        </div>
    )
}

export default CreateNewPost
