import Postlist from "./postlist"
import { Link } from "react-router-dom"

export default function Home(){

    return(
        <>
            <img className="post-img" src="assets/banners/about.jpg"/>
            

            <h1>Welcome! (This Blogsite is still under construction!)</h1>
            <hr/>
            <h2>The Cyanscythe and Goldenmage Blog consists of 6 categories:</h2>

            <div className="intro">

            <Link to={`/techwriting`} className="intro-link">
                    <section className="intro-text">
                        <h3>How To's</h3>
                        <p>These are technical writing blogs where I write tutorials about how to do certain technical things. They are basically "How-to" articles.</p>
                        <img className="intro-text-logo" src="assets/socialmedialogos/personallogo.png"/>
                    </section>
            </Link>

            <Link to={`/projects`} className="intro-link">
                    <section className="intro-text">
                        <h3>Projects</h3>
                        <p>This is similar to the 'How To' category in terms of Technical Writing but each post revolves around how to do certain projects from beginning to end rather than just tips here and there.</p>
                        <img className="intro-text-logo" src="assets/socialmedialogos/personallogo.png"/>
                    </section>
            </Link>

            <Link to={`/cyandden`} className="intro-link">
                    <section className="intro-text">
                        <h3>Cy & Den</h3>
                        <p>This category is sometimes depicted in short comics, or at times, is written like technical writing but with interjections from Cy and Den throughout and shown from both an Red and Blue Team perspective. </p>
                        <img className="intro-text-logo" src="assets/socialmedialogos/personallogo.png"/>
                    </section>
                </Link>

                <Link to={`/ethicalhacking`} className="intro-link">
                    <section className="intro-text">
                        <h3>Ethical Hacking</h3>
                        <p>This category is technical writing as well, but specifically around how to hack (ethically of course). There will also be some walkthroughs on ethical hacking challenges.</p>
                        <img className="intro-text-logo" src="assets/socialmedialogos/personallogo.png"/>                
                    </section>
                </Link>
                    
                <Link to={`/scripts`} className="intro-link">
                    <section className="intro-text">
                        <h3>Scripts</h3>
                        <p>This category breaks down the scripts that I wrote line by line along with in depth explanations of how and why it works.</p>
                        <img className="intro-text-logo" src="assets/socialmedialogos/personallogo.png"/>
                    </section>
                </Link>

                <Link to={`/misc`} className="intro-link">
                    <section className="intro-text">
                        <h3>Misc</h3>
                        <p>This category holds any blogposts that do not fall into any of the above categories... just Miscellaneous items.</p>
                        <img className="intro-text-logo" src="assets/socialmedialogos/personallogo.png"/>
                    </section>
                </Link>

            </div>
            <hr/>
            
            <div className="about-section">
            <h2>About</h2>
            
            <p>Heyos!</p>
            <p>I'm Mitsuki, the author and creator of this blog.</p>
            <p>Writing and art are my main hobbies, ethical hacking is my second, so I figured... why not combine em?</p>
            <p>All content (including art) on this blog is created by me.</p> 
            <p>(No AI art or content - with the exception of using Gemini to help me when I ocassionally got stuck coding this website.)</p>
            <Link to={`/post/introducing-cy-and-den`} className="intro-link">
            <p>Wanna learn who/what Cyanscythe (Cy) and Goldenmage (Den) are? Click here!</p>
            </Link>
            <p>If you like my blog, check out some of my other creations here:</p>
            </div>

            <div className="smlogo-wrapper">
                
                <a href="https://www.youtube.com/@mitsukiyouko">
                    <img className="smlogo" src="assets/socialmedialogos/youtube.png"/> 
                </a>
                <a href="https://buymeacoffee.com/mitsukiyouko">
                    <img className="smlogo" src="assets/socialmedialogos/bmc.png"/> 
                </a>
                <a href="https://github.com/mitsukiyouko555">
                    <img className="smlogo" src="assets/socialmedialogos/github.png"/> 
                </a>
                <a href="https://mitsukiyouko555.wixsite.com/portfolio">
                    <img className="smlogo" src="assets/socialmedialogos/personallogo.png"/> 
                </a>
                <a href="https://mitsukiyouko555.github.io/hackwebcomic/">
                    <img className="smlogo" src="assets/socialmedialogos/hack.png"/> 
                </a>
            </div>
            <br/>
            <hr/>
            <Postlist flag="all"/>
        </>
    )
}

// Icons to add:
    //Youtube https://www.youtube.com/@mitsukiyouko
    //BuyMeACoffee https://buymeacoffee.com/mitsukiyouko
    //Portfolio https://mitsukiyouko555.wixsite.com/portfolio
    //Github https://github.com/mitsukiyouko555
    //H@<K Webcomic: https://mitsukiyouko555.github.io/hackwebcomic/