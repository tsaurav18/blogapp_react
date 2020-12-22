import React, {useState, useRef}from 'react'
import CreateNewPost from './CreateNewPost'
import Post from './Post'
import ModifyPost from "./ModifyPost"

function  DisplayAllPosts() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [allPosts, setAllPosts] = useState([])
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");
     // Initialize useRef
    const getTitle = useRef();
    const getContent = useRef();

// save form data into list 
    const savePost =(event)=>{
      event.preventDefault();
      const id = Date.now();
      setAllPosts([...allPosts, {title, content, id}])
      console.log(allPosts);
      getTitle.current.value="";
      getContent.current.value="";
      toggleCreateNewPost()
     
    } //onchange state for title
    const savePostTitleToState = event => {
        setTitle(event.target.value);
        
      };
      //onchange for content
      const savePostContentToState = event => {
        setContent(event.target.value);
  
      };
      //toggle for create new post
      const toggleCreateNewPost =()=>{
        setIsCreateNewPost(!isCreateNewPost)
    }
    //toggle for modify post
    const toggleModifyPostComponent = () => {
      setIsModifyPost(!isModifyPost)
    }
    const editPost = id => {
      setEditPostId(id);
     
      toggleModifyPostComponent();
    };
    const deletePost = id => {
      const modifiedPost = allPosts.filter(eachPost => {
        return eachPost.id !== id;
      });
      setAllPosts(modifiedPost);
    };

    const updatePost = (event) => {
      event.preventDefault();
      const updatedPost = allPosts.map(eachPost => {
        if (eachPost.id === editPostId) {
          return {
            ...eachPost,
            title: title || eachPost.title,
            content: content || eachPost.content
          };
        }
        return eachPost;
      });
      setAllPosts(updatedPost);
      toggleModifyPostComponent();
    };
    if(isCreateNewPost){
      return (
        <div>

              <CreateNewPost  savePostTitleToState = {savePostTitleToState}
    savePostContentToState = {savePostContentToState} getTitle={getTitle}
    getContent={getContent} savePost={savePost}/>
        </div>
    )
    }
    else if (isModifyPost) {
      const post = allPosts.find(post => {
        return post.id === editPostId;
      });
      return (
        <ModifyPost
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
        />
      );
    }
    return (
      <>
      <h2>All Posts</h2>
      {!allPosts.length?( <div>
          <h3>There is nothing to see here!</h3>
        </div>):(allPosts.map(eachpost=>{return (
          <Post id={eachpost.id} key={eachpost.key} title={eachpost.title} content={eachpost.content} editPost={editPost} deletePost={deletePost}/>
        )}))}

      <br/>
      <button onClick={toggleCreateNewPost}>Create New</button>
      </>
  )

    
}

export default  DisplayAllPosts
