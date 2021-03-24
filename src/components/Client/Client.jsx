import React from 'react';
import Typography from '@material-ui/core/Typography'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import person from '../../images/testimonial.png'
import { Avatar } from '@material-ui/core';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
export default function Client() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Typography
                            variant="h3"
                            color="initial"
                            className="text-center mt-5"
                        >
                            Client Testimonial
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 mt-5 text-center">

                        <Swiper
                            slidesPerView={1}
                            onSwiper={(swiper) => console.log(swiper)}
                            navigation
                            pagination={{ clickable: true }}
                        >

                            <SwiperSlide>
                                <div className="p-5 m-2">
                                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, color: '#000000' }}>
                                        "Supercharge your WordPress hosting with detailed website analytics, marketingtools. Our experts
                                        are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you
                                        succeed!"
                                    </p>
                                    <div className="align-self-center">

                                        <div className="row">
                                            <div className="col-md-5">

                                            </div>
                                            <div className="col-md-4">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <Avatar alt="Remy Sharp" src={person} />

                                                    </div>
                                                    <div className="col-md-10">
                                                        <h6 className="h6">
                                                            Jacson Miller
                                                        </h6>
                                                        <h6 className="h6">
                                                            Designer @Colorib
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>

                            <SwiperSlide>
                                <div className="p-5 m-2">
                                    <p style={{ fontFamily: '"DM Sans", sans-serif', fontWeight: 300, color: '#000000' }}>
                                        "Supercharge your WordPress hosting with detailed website analytics, marketingtools. Our experts
                                        are just part of the reason Bluehost is the ideal home for your WordPress website. We're here to help you
                                        succeed!"
                                    </p>
                                    <div className="align-self-center">

                                        <div className="row">
                                            <div className="col-md-5">

                                            </div>
                                            <div className="col-md-4">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <Avatar alt="Remy Sharp" src={person} />

                                                    </div>
                                                    <div className="col-md-10">
                                                        <h6 className="h6">
                                                            Jacson Miller
                                                        </h6>
                                                        <h6 className="h6">
                                                            Designer @Colorib
                                                        </h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-3">
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </SwiperSlide>


                        </Swiper>
                    </div>
                </div>
                <div className="col-md-2"></div>

            </div>

        </>
    );
}
