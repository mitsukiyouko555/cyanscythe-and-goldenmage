import Postlist from "./postlist"

export default function Home(){

    return(
        <>
            <img className="post-img" src="/src/assets/banners/about.jpg"/>
            
            <h1>Welcome!</h1>
            <hr/>
            <h2>The Cyanscythe and Goldenmage Blog consists of 6 categories:</h2>
            
            <h3>How To's</h3>
            <p>- These are technical writing blogs where I write tutorials about how to do certain technical things.</p>

            <h3>Projects</h3>
            <p>- This is similar to the 'How To' category in terms of Technical Writing but each post revolves around how to do certain projects from beginning to end rather than just tips here and there.</p>

            <h3>Cy & Den</h3>
            <p> - This category is the highlight of the blog, one that this blog is named after and takes into account perspectives from both red and blue team (i.e from an attacker vs defender viewpoint) with Cyanscythe (Cy) being on the Red team as an Attacker and Goldenmage (Den) being on the Blue team as a Defender.
            </p>
            <p>- This category is rather different from the other categories because it is shown in short stories drawn in manga format, or at times, it is written like technical writing but with interjections from Cy and Den throughout, notifying the audience of ways to protect themselves from attackers (shown from both an attacker and defender perspective). </p>
            
            <h3>Ethical Hacking</h3>
            <p>- This category is technical writing as well, but specifically around how to hack (ethically of course). There will also be some walkthroughs on ethical hacking challenges.</p>

            <h3>Scripts</h3>
            <p>- This category breaks down the scripts that I wrote.</p>

            <h3>Misc</h3>
            <p>- This category holds any blogposts that do not fall into any of the above categories.</p>

            <hr/>

            <h2>About</h2>
            
            <p>Heyos!</p>
            <p>My pen name is Mitsuki and I'm the author and creator of this blog.</p>
            <p>Writing and art are my main hobbies, ethical hacking is my second, so I figured... why not combine em?</p>

            <p>If you like my blog, check out some of my other creations here:</p>

            <div className="smlogo-wrapper">
                <a href="https://www.youtube.com/@mitsukiyouko">
                    <img className="smlogo" src="/src/assets/socialmedialogos/youtube.png"/> 
                </a>
                <a href="https://buymeacoffee.com/mitsukiyouko">
                    <img className="smlogo" src="/src/assets/socialmedialogos/bmc.png"/> 
                </a>
                <a href="https://github.com/mitsukiyouko555">
                    <img className="smlogo" src="/src/assets/socialmedialogos/github.png"/> 
                </a>
                <a href="https://mitsukiyouko555.wixsite.com/portfolio">
                    <img className="smlogo" src="/src/assets/socialmedialogos/Personal Logo.png"/> 
                </a>
                <a href="https://mitsukiyouko555.github.io/hackwebcomic/">
                    <img className="smlogo" src="/src/assets/socialmedialogos/hack.png"/> 
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