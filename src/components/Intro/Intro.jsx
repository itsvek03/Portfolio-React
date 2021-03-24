import React from 'react'
import emailbg from '../../images/email-icon.png'
import employee from '../../images/humanface.webp'
import './intro.css'


export default function Intro() {
    return (
        <>
            <div style={{ backgroundColor: '#FF9063' }}>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-3 mb-3 mt-2">
                            <img src={employee} alt="Employee" classname="img img-fluid img-responsive" />
                        </div>

                        <div className="col-md-6 mb-3 mt-5">
                            <h2 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 70, color: 'white' }}>My name is Calvin</h2>
                            <h2 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 70, color: 'white' }}>Digital Product Designer</h2>
                            <h3 style={{ fontFamily: 'DM Sans', color: 'black', fontWeight: 300 }} className="mt-2">Head of design at Calvino</h3>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                        </div>
                        <div className="col-md-3 mt-2">
                            <h6 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 20, color: 'white' }}>Design For</h6>
                            <br />
                            <h6 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 26, color: 'white' }}>
                                Web & Mobile
                        </h6>
                        </div>
                        <div className="col-md-3">
                            <h6 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 20, color: 'white' }}>Phone</h6>
                            <br />
                            <h6 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 26, color: 'white' }}>
                                +10(67) 367-9034
                        </h6>
                        </div>
                        <div className="col-md-3">
                            <h6 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 20, color: 'white' }}>Drop your Message</h6>
                            <br />
                            <h6 style={{ fontFamily: 'Roboto Condensed', fontWeight: 400, fontSize: 26, color: 'white', textDecoration: 'underline' }}>calvin90@gmail.com <img src={emailbg} alt="email" className="img img-responsive" /></h6>
                        </div>

                        <div className="col-md-1">

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

