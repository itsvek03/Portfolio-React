import React from 'react'
import Typography from '@material-ui/core/Typography'
import home1 from '../../images/home-blog1.png'
import home2 from '../../images/home-blog2.png'

export default function News() {
    return (
        <section>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Typography variant="h3" color="initial">
                            Latest News
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card text-white">
                            <img src={home1} className="card-img" alt="..." />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
                                <h3>The Best SPA Salons For Your Relaxation</h3>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card text-white">
                            <img src={home2} className="card-img" alt="..." />
                            <div className="card-img-overlay text-white d-flex flex-column justify-content-end">
                                <h3>The Best SPA Salons For Your Relaxation</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
