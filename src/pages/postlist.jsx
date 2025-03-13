import postlist from "../posts/posts.json"
import { Link } from "react-router-dom"

export default function Postlist(props){

    const sortedPosts = [...postlist];
    sortedPosts.sort((a,b) => {
        const dateA = new Date(a.date_created);
        const dateB = new Date(b.date_created);
        return dateB - dateA;
    });

    return(
        <>
            <img className="post-img" src={props.image}/>
            <h1>{props.blogtype} Posts</h1>
            <div className="post-chunk">
            {sortedPosts.length && 
                sortedPosts.map((post, i) => {
                    const tags = post.tag.split(',').map(tag => tag.trim())
                    if (tags.includes(props.tag) || (props.flag == "all")){
                        return(
                            <li key={post.id} className="bloglink">
                            <Link to={`/${post.id}`} style={{ textDecoration: 'none' }}>
                                <div className="post-card">
                                <h2>{post.title}</h2>
                                <small>Date Created: {post.date_created}</small>
                                <br/>
                                <small>Author: {post.author}</small>
                                <br/>
                                <br/>
                                <strong><small>Description:</small></strong>
                                <br/>
                                <small>{post.blurb}</small>
                                </div>
                            </Link>
                            </li>
                        )}
                    })
                }
            </div>
        </>
    )
}