import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/header";
import Footer from "./pages/footer";
import Postlist from "./pages/postlist";
// import Test from "./pages/test";

export default function App() {

  return (
    <>
        <Header/>
        <HashRouter>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
        </HashRouter>
        <Postlist/>
        <Footer/>
    </>
  )
}