import React, { use, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    let [search, setSearch] = useState("")

    function postSearch(e) {
        e.preventDefault()
        props.getSearch(search)
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/" onClick={() => props.getSearch("")}>News Web</Link>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className='bi bi-list text-light fs-1'></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link  text-light active" aria-current="page" to="/All" onClick={() => props.getSearch("")}>All</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Politics" onClick={() => props.getSearch("")}>Politics</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Crime" onClick={() => props.getSearch("")}>Crime</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Education" onClick={() => props.getSearch("")}>Education</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Science" onClick={() => props.getSearch("")}>Science</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Technology" onClick={() => props.getSearch("")}>Technology</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Sports" onClick={() => props.getSearch("")}>Sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-light" to="/Cricket" onClick={() => props.getSearch("")}>Cricket</Link></li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Other
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="/Entertainment">Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/Economics">Economics</Link></li>
                                    <li><Link className="dropdown-item" to="/World">World</Link></li>
                                    <li><Link className="dropdown-item" to="/India">India</Link></li>
                                    <li><Link className="dropdown-item" to="/Jokes">Jokes</Link></li>
                                    <li><Link className="dropdown-item" to="/Kedarnath">Kedarnath</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Language
                                </a>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" onClick={() => props.getLanguage("hi")}>Hindi</button></li>
                                    <li><button className="dropdown-item" onClick={() => props.getLanguage("en")}>English</button></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search" onSubmit={(e) => postSearch(e)}>
                            <input className="form-control me-2" type="search" placeholder="Search" name="search" onChange={(e) => setSearch(e.target.value )} aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

