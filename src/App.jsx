import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./pages/header";
// import Test from "./pages/test";

export default function App() {

  return (
    <>
      {/* <h1 class="test">Test</h1>
      <p>This font is pretty!</p> */}
        <Header/>
        <HashRouter>
          <div>
            <Routes>
              <Route path="/" element={<Home/>}/>
            </Routes>
          </div>
        </HashRouter>

    </>
  )
}