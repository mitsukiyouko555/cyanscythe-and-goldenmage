import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Postlist from "./pages/postlist";
import Actualpages from "./pages/actualpages";

export default function App() {

  return (
    <>
        <div className="fullwrapper">
        <HashRouter>
        <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/techwriting" element={<Postlist blogtype="Technical Writing" image="/assets/banners/technicalwriting.jpg" tag="techwriting"/>}/>
              <Route path="/projects" element={<Postlist blogtype="Projects" image="/assets/banners/projects.jpg" tag="projects"/>}/>
              <Route path="/cyandden" element={<Postlist blogtype="Cyanscythe and Goldenmage" image="/assets/banners/cyandden.jpg" tag="cyandden"/>}/>
              <Route path="/ethicalhacking" element={<Postlist blogtype="Ethical Hacking" image="/assets/banners/ethicalhacking.jpg" tag="ethicalhacking"/>}/>
              <Route path="/scripts" element={<Postlist blogtype="Scripts" image="/assets/banners/scripts.jpg" tag="scripts"/>}/>
              <Route path="/misc" element={<Postlist blogtype="Misc" image="/assets/banners/misc.jpg" tag="misc"/>}/>
              <Route path="/post/:postTitleSlug" element={<Actualpages/>}/>
              <Route path="*" element={<h1>404 Page Not Found!</h1>} />
            </Routes>
          <Footer/>
        </HashRouter>
        </div>
    </>
  )
}


