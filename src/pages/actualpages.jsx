import { useParams } from "react-router-dom"
import postlist from "../posts/posts.json"
import Markdown from "react-markdown"

export default function Actualpages(){

const {postId} = useParams()

const post = postlist.find(post => String(post.id) === postId)


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
                        <p><strong>Date Created:</strong> {post.date_created}</p>
                        <p><strong>Author:</strong> {post.author}</p>
                        <p><strong>Description:</strong> {post.blurb}</p>
                    </div>
                </div>
                <hr width="75%"/>
                <div className="content-wrapper">
                    
                    <Markdown className="content">{post.content}</Markdown>
                </div>
            </div>
        </>
    )
}
