import { useParams } from "react-router-dom"
import postlist from "../posts/posts.json"
import Markdown from "react-markdown"
import {createSlug} from "/src/utils.js"
import rehypeRaw from "rehype-raw"


const LazyLoading = ({src, alt, title}) => {
    return <img src={src} alt={alt} title={title} loading="lazy" />;
}

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

    const markdownComponents ={
        img: LazyLoading,
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
                    {post.tag == "cyanddenmanga" ? <Markdown className="special-content cyandden-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> 
                    : post.tag == "techwriting" ? <Markdown className="techwriting-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> :
                    post.tag == "projects" ? <Markdown className="projects-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> :
                    post.tag == "misc" ? <Markdown className="misc-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> :
                    post.tag == "ethicalhacking" ? <Markdown className="ethicalhacking-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> :
                    post.tag == "scripts" ? <Markdown className="scripts-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> :
                    post.tag == "cyandden" ? <Markdown className="cyandden-content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}
                    </Markdown> :
                    <Markdown className="content" rehypePlugins={[rehypeRaw]} components={markdownComponents}>{post.content}</Markdown>}
                </div>
            </div>
        </>
    )
}
