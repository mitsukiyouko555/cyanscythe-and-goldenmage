import { Link } from "react-router-dom"

export default function Header(){
    return(
        <>
            <div className="header">
                <h1 className="blogtitle">Cyanscythe and Goldenmage</h1>
                <ul className="headerlist">
                    <li><Link to={`/home`}>Home</Link></li>
                    <li><Link to={`/techwriting`}>Technical Writing</Link></li>
                    <li><Link to={`/projects`}>Projects</Link></li>
                    <li><Link to={`/cyandden`}>Cy & Den</Link></li>
                    <li><Link to={`/ethicalhacking`}>Ethical Hacking</Link></li>
                    <li><Link to={`/scripts`}>Scripts</Link></li>
                    <li><Link to={`/misc`}>Misc</Link></li>
                </ul>
                <hr/>
            </div>
        </>
    )
}