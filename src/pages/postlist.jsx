import postlist from "../posts/posts.json"
import Markdown from "react-markdown"
export default function Postlist(props){
    return(
        <>
            <h1>{props.blogtype} Posts</h1>
            <img className="post-img" src={props.image}/>
            <div className="post-chunk">
            {postlist.length && 
                postlist.map((post, i) => {
                    if (post.tag == props.tag){
                        return(
                            <div className="post-card">
                                <span><h2>{post.title}</h2></span>
                                <span><small>Date Created: {post.date_created} by {post.author}</small></span>
                                <br/>
                                <span><small>Date Modified: {post.date_modified}</small></span>
                                <br/>
                                <span><Markdown>{post.content}</Markdown></span>
                            </div>
                    )}
                })
            }
            </div>
        </>
    )
}