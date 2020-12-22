import React from 'react'

function ModifyPost(props) {
    return (
        <div>
                 <form>
        <h1>Modify Post</h1>
        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          text
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="contents"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <button onClick ={props.updatePost}>Update Post</button>
      </form>
        </div>
    )
}

export default ModifyPost
