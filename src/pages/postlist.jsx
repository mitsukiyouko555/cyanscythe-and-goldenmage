import postlist from "../categories/posts.json"
import Markdown from "react-markdown"
export default function Postlist(){

    //title
    //date_created
    //date_modified
    //author
    //tag
    //content
    
    return(
        <>
            <h1>All Posts</h1>
            {postlist.length && 
                postlist.map((post, i) => {
                    return(
                        <div className="post-card">
                            <hr/>
                            <h2>{post.title}</h2>
                            <small>Date Created: {post.date_created} by {post.author}</small>
                            <br/>
                            <small>Date Modified: {post.date_modified}</small>
                            <br/>
                            <Markdown>{post.content}</Markdown>
                        </div>
                    )
                })
            }
        </>
    )
}