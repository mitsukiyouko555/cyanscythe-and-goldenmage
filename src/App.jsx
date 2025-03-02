import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Postlist from "./pages/postlist";
import Actualpages from "./pages/actualpages";

// Tag Categories:
//     Technical Writing
//     Projects
//     Cy & Den
//     Ethical Hacking
//     Scripts
//     Misc

export default function App() {

  return (
    <>
        <div className="fullwrapper">
        <HashRouter>
        <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/techwriting" element={<Postlist blogtype="Technical Writing" image="/src/assets/img/technicalwriting.jpg" tag="techwriting"/>}/>
              <Route path="/projects" element={<Postlist blogtype="Projects" image="/src/assets/img/projects.jpg" tag="projects"/>}/>
              <Route path="/cyandden" element={<Postlist blogtype="Cyanscythe and Goldenmage" image="/src/assets/img/cyandden.jpg" tag="cyandden"/>}/>
              <Route path="/ethicalhacking" element={<Postlist blogtype="Ethical Hacking" image="/src/assets/img/ethicalhacking.jpg" tag="ethicalhacking"/>}/>
              <Route path="/scripts" element={<Postlist blogtype="Scripts" image="/src/assets/img/scripts.jpg" tag="scripts"/>}/>
              <Route path="/misc" element={<Postlist blogtype="Misc" image="/src/assets/img/misc.jpg" tag="misc"/>}/>
              <Route path="/:postId" element={<Actualpages/>}/>
              <Route path="*" element={<h1>404 Page Not Found!</h1>} />
            </Routes>
          <Footer/>
        </HashRouter>
        </div>
    </>
  )
}


