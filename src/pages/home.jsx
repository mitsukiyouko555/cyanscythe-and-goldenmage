import Postlist from "./postlist"

export default function Home(){

    return(
        <>
            <img className="post-img" src="/src/assets/banners/about.jpg"/>
            
            <h1>This is the home page</h1>
            <p>The About section also goes here...</p>
            <p>include a disclaimer about how I may or may not be using "industry best practices" as I am learning as I go.</p>

            <Postlist flag="all"/>
        </>
    )
}