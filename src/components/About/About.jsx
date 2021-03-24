import React from 'react'
import Typography from '@material-ui/core/Typography'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'
import brand5 from '../../images/brand5.png'
import brand6 from '../../images/brand6.png'
import Swiper from 'react-id-swiper';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    letter: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 400,
        fontSize: 50,
    },
})

export default function About() {
    const classes = useStyles();
    const params = {
        slidesPerView: 6,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false
        },
        loop: true,

        breakpoints: {
            1024: {
                slidesPerView: 6,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 6,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 6,
                spaceBetween: 30
            },
            100: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }
    return (
        <section>
            <div className="container mt-5">
                <div className="row">

                    <div className="col-xl-6 col-lg-6 col-md-10">
                        <Typography variant="h6" color="initial" className={classes.letter}>
                            About Me
                        </Typography>
                        <p>
                            In the mean time shall soon find out the cause of this: What
                            was the epicurus towards their children; each of these can
                            have a chain of not to have been taken in the broad plain in
                            what is the reason why
                        </p>
                        <p style={{ fontFamily: 'DM Sans', fontWeight: 300, color: '#ff9063', fontSize: 30 }}>
                            "What was the epicurus towards their children; each of these can have a chain."
                        </p>
                    </div>

                    <div className="col-md-6">
                        <div className="skill">
                            <div className="single-skill">
                                <div className="progress-count">
                                    <p>User Interface</p>
                                    <span>60%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success wow sideInLeft"
                                        role="progressbar" style={{ width: '60%', animationDuration: '1s', animationDelay: '0.5s', animationName: 'sideInLeft' }}
                                        aria-valuenow="60"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.5s"
                                    >

                                    </div>
                                </div>
                            </div>

                            <div className="single-skill">
                                <div className="progress-count">
                                    <p>User Experience</p>
                                    <span>89%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success wow sideInLeft"
                                        role="progressbar" style={{ width: '89%', animationDuration: '1s', animationDelay: '0.5s', animationName: 'sideInLeft' }}
                                        aria-valuenow="60"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.5s"
                                    >

                                    </div>
                                </div>
                            </div>

                            <div className="single-skill">
                                <div className="progress-count">
                                    <p>Illustration</p>
                                    <span>95%</span>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar bg-success wow sideInLeft"
                                        role="progressbar" style={{ width: '95%', animationDuration: '1s', animationDelay: '0.5s', animationName: 'sideInLeft' }}
                                        aria-valuenow="60"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                        data-wow-duration="1s"
                                        data-wow-delay="0.5s"
                                    >

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-12">

                        <Swiper {...params}>
                            <div>
                                <img src={brand1} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>

                            <div>
                                <img src={brand2} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>

                            <div>
                                <img src={brand3} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>

                            <div>
                                <img src={brand4} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>

                            <div>
                                <img src={brand5} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>

                            <div>
                                <img src={brand6} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>

                            <div>
                                <img src={brand4} alt="Brand1" className="col-md-12 col-11"></img>
                            </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
