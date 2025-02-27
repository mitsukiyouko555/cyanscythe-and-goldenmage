import postlist from "../posts/posts.json"
import { Link } from "react-router-dom"
import Markdown from "react-markdown"
import { HashRouter, Router, Route, useNavigate } from "react-router-dom"
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
                                <li key={post.id} className="bloglink">
                                    <Link to={`/${post.id}`}>
                                        <h2>{post.title}</h2>
                                    </Link>
                                </li>
                                <small>Date Created: {post.date_created}</small>
                                <br/>
                                <small>Author: {post.author}</small>
                                <br/>
                                <br/>
                                <strong><small>Description:</small></strong>
                                <br/>
                                <small>{post.blurb}</small>
                                {/* <span><Markdown>{post.content}</Markdown></span> */}
                            </div>
                        )}
                    })
                }
            </div>
        </>
    )
}