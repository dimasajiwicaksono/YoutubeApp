import React , {useState, useEffect} from 'react';
import Dexie from "dexie";

const DBServices = () => {
    
    //set the database 
    const db = new Dexie("ReactDexie");
    //create the database store
    db.version(1).stores({
        posts: "user, url"
    })
    db.open().catch((err) => {
        console.log(err.stack || err)
    })
    
    //set the state and property
    const [postUser, setUser] = useState("");
    const [postUrl, setUrl] = useState("");
    const [posts, setPosts] = useState("");



    //read the file and decode it
    // const getFile = (e) => {
    //     console.log(e)

    //     let reader = new FileReader();
    //     reader.readAsDataURL(e[0]);
    //     reader.onload= (e) => {
    //         setFile(reader.result);
    //     }
    // }
    // const deletePost = async(id) => {
    //     console.log(id);
    //     db.posts.delete(id);
    //     let allPosts = await db.posts.toArray();
    //     //set the posts
    //     setPosts(allPosts);
    // }

    //submit 
    const getPostInfo = (e) => {
        e.preventDefault();
        if(postUser !== "" && postUrl !== ""){
            let post = {
                user : postUser,
                url : postUrl
            }
    
            db.posts.add(post).then(async() => {
                //retrieve all posts inside the database
                let allPosts = await db.posts.toArray();
                //set the posts
                setPosts(allPosts);
            });
            
        }
        
        
    }

    useEffect(() => {

        //get all posts from the database
        const getPosts = async() => {
            let allPosts = await db.posts.toArray();
            setPosts(allPosts);
        }
        getPosts();
  
    }, [])



    let postData;

    // if(posts.length > 0) {

    //     postData = <div className="postsContainer">
    //                 {
    //                     posts.map(post => {

    //                          return <div className="post" key={post.user}>
    //                                     <div  />
    //                                         <h2>{post.url}</h2>
    //                                         {/* <p>{post.content}</p> */}
    //                                         {/* <button className="delete" onClick={() => deletePost(post.title)}>Delete</button> */}
    //                                     </div>       
    //                     })
    //                 }
    //                </div>
    // }else{
    //     postData = <div className="message">
    //                  <p>There are no posts to show</p>
    //                </div>
    // }

    return (
    <React.Fragment>
        <form onSubmit={getPostInfo}>
           <div className="control">
           <label>Title</label>
            <input type="text" name="title"  onChange={e => setUser(e.target.value)} />
           </div>
           <div className="control">
           <label>Content</label>
            <textarea name="content"  onChange={e => setUrl(e.target.value)} />
           </div>
            <input type="submit" value="Submit" />
        </form>
        
        {postData}
    </React.Fragment>
  );
}

export default DBServices;