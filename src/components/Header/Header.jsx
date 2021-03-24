import React from 'react'
import '../../style.css'
import logo from '../../images/logo.png'



export default function Header() {
    return (
        <header className="container-fluid navmy_style mx-auto sticky-md-top sticky-sm-top" style={{ backgroundColor: '#FF9063' }}>
            <div className="row">
                <div className="col-md-10 col-11 mx-auto">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="index.html">
                                <img src={logo} className="img img-fluid" href="/" alt="logo" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Work</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Service</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Blog</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link" href="/">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </header>
    )
}
