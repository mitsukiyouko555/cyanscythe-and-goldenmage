import { HashRouter, Routes, Route, useNavigate } from "react-router-dom"

export default function Header(){
    return(
        
        <div className="header">
            <h1>Cyanscythe and Goldenmage</h1>
            <ul className="headerlist">
                <li>Home</li>
                <li>Technical Writing</li>
                <li>Projects</li>
                <li>Cy & Den</li>
                <li>Ethical Hacking</li>
                <li>Scripts</li>
                <li>Misc</li>
            </ul>
        </div>
    )
}