import React from 'react'

function Post(props) {
    return (
        <div>
           <section>
               
    <h3>{props.title}</h3>
    <p> {props.content}</p>
    <button onClick={()=>props.editPost(props.id)}>Edit</button>
    <button onClick={()=>props.deletePost(props.id)}>Delete</button>
    </section>  
        </div>
    )
}

export default Post
