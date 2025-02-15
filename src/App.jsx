import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
// import Test from "./pages/test";

export default function App() {

  return (
    <>
      {/* <h1 class="test">Test</h1>
      <p>This font is pretty!</p> */}

        <HashRouter>
          <div>
            {/* <Header/> */}
            <Routes>
              <Route path="/" element={<Home/>}/>
              {/* <Route path="/test" element={<Test/>}/> */}
            </Routes>
            {/* <Footer/> */}
          </div>
        </HashRouter>

    </>
  )
}