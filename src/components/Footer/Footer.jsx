import React from 'react'
import footer from '../../images/logo2_footer.png'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core'
import '../../footer.css'


const useStyles = makeStyles({
    button: {
        fontSize: "1rem",
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        textTransform: "none",
        width: 200,
        color: '#ffff',
        backgroundColor: '#ff9063'
    },

})

export default function Footer() {
    const styles = useStyles();
    return (
        <footer className="container-fluid mt-5" style={{ backgroundColor: 'black' }}>
            <div>
                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>

                    <div className="col-lg-5 col-md-4">
                        <img
                            src={footer}
                            className="img img-responsive mt-5"
                            alt="Footer"
                        />

                        <h5 className="mt-2 text-white">
                            In the mean time shall soon find out the cause of this:
                            What was the epicurus towards their children.
                            </h5>



                    </div>

                    <div className="col-lg-4 col-md-6 mb-3 d- flex align-items-center" style={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}>

                        <div className="row">
                            <div className="col-md-6 mt-2">
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={styles.button}

                                >
                                    Download Cv
                                </Button>
                            </div>

                            <div className="col-md-6 mt-2">
                                <Button
                                    variant="contained"
                                    color="default"
                                    className={styles.button}
                                >
                                    Let's talk
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-1 col-md-2"></div>

                </div>

                <div className="row">
                    <div className="col-lg-2 col-md-2"></div>
                    <div className="col-lg-6 col-md-4">
                        <h6 className="mt-5 text-white mb-5">
                            Copyright ©2021 All rights reserved | This template is made with ❤️ by Colorlib
                            </h6>
                    </div>
                    <div className="col-lg-4 col-md-6 mt-5">
                        <ul className="navbar-nav">
                            <div class="d-flex flex-row bd-highlight mb-3">

                                <li className="nav-item active m-2">
                                    <a className="nav-link" href="/"><h6 className="text-white">Home</h6></a>
                                </li>
                                <li className="nav-item active m-2">
                                    <a className="nav-link" href="/"><h6 className="text-white">Work</h6></a>
                                </li>
                                <li className="nav-item active m-2">
                                    <a className="nav-link" href="/"><h6 className="text-white">Service</h6></a>
                                </li>
                                <li className="nav-item active m-2">
                                    <a className="nav-link" href="/"><h6 className="text-white">Blog</h6></a>
                                </li>
                                <li className="nav-item active m-2">
                                    <a className="nav-link" href="/"><h6 className="text-white">Contact</h6></a>
                                </li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}