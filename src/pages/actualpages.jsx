import { useParams } from "react-router-dom"
import postlist from "../posts/posts.json"
import Markdown from "react-markdown"
import {createSlug} from "/src/utils.js"


export default function Actualpages(){

// This PostTitleSlug was created with the help of Gemini
const { postTitleSlug } = useParams();
const post = postlist.find(post => createSlug(post.title) === postTitleSlug);

    if (!post){
        return(
            <div>
                <br/>
                <h1>Blog Post Not Found!</h1>
            </div>
        )
    }

    return(
        <>
            <div className="blogpost-itself">
                <div className="post-wrapper">
                    <div className="title-content">
                        <h1>{post.title}</h1>
                        <p><strong>Date Created: </strong>{post.date_created}</p>
                        <p><strong>Author: </strong> {post.author}</p>
                        <p><strong>Description: </strong> {post.blurb}</p>
                    </div>
                </div>
                <hr width="70%"/>
                <div className="content-wrapper">
                    
                    <Markdown className="content">{post.content}</Markdown>
                </div>
            </div>
        </>
    )
}
