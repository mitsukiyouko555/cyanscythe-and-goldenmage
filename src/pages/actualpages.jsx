import { useParams } from "react-router-dom"
import postlist from "../posts/posts.json"
export default function Actualpages(){

//When someone click on the link to a blog, that link shoudl bring them to the blog's actual page..

//This page would be the blog's actual page. this should show the following using PROPS:
//Page Title
//Page Creation date
//Page Author
//Page Content

const {postId} = useParams()

const post = postlist.find(post => String(post.id) === postId)


    if (!post){
        return(
            <div>Blog Post Not Found!</div>
        )
    }

    return(
        <>
            <h1>{post.title}</h1>
            <p>Date Created: {post.date_created}</p>
            <p>Author: {post.author}</p>
            <br/>

            {/* <span><Markdown>{post.content}</Markdown></span> */}
        </>
    )
}
