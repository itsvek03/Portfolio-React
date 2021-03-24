import { makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { CardContent, CardMedia } from '@material-ui/core'
import ico from '../../images/services1.svg'


const useStyles = makeStyles({
    letter: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 400,
        fontSize: 50,
    },

})



export default function Expertise() {
    const classes = useStyles();
    return (
        <>
            <div className="container mb-5 mt-5">
                <div className="row">
                    <div className="col-md-12">
                        <Typography
                            variant="h3"
                            color="initial"
                            className={classes.letter}
                        >
                            My Experties
                        </Typography>
                    </div>
                </div>
            </div>

            <section>
                <div className="container mt-3">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    alt="services 1"
                                    title="Strategy"
                                    image={ico}
                                    className="img"
                                    style={{ width: 100 }}
                                />

                                <Typography variant="h3" color="initial">
                                    Strategy & direction
                                </Typography>

                                <Typography variant="h5" color="initial">
                                    Understand First. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </Typography>

                                <Typography variant="h6" color="initial">
                                    Head of design at Calvino
                                </Typography>
                            </CardContent>


                        </div>


                        <div
                            className="col-lg-6 col-md-6 col-sm-6"
                            style={{ borderLeft: '1px groove black' }}>
                            <CardContent raised="true">
                                <CardMedia
                                    component="img"
                                    alt="services 1"
                                    title="Strategy"
                                    image={ico}
                                    className="img"
                                    style={{ width: 100 }}
                                />

                                <Typography variant="h3" color="initial">
                                    Strategy & direction
                                </Typography>

                                <Typography variant="p" color="initial">
                                    Understand First. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </Typography>

                                <Typography variant="h5" color="initial">
                                    Head of design at Calvino
                                </Typography>
                            </CardContent>
                        </div>
                        <hr />
                        <div className="col-lg-6 col-md-6 col-sm-6">


                            <CardContent>
                                <CardMedia
                                    component="img"
                                    alt="services 1"
                                    title="Strategy"
                                    image={ico}
                                    className="img"
                                    style={{ width: 100 }}
                                />

                                <Typography variant="h3" color="initial">
                                    Strategy & direction
                                </Typography>

                                <Typography variant="p" color="initial">
                                    Understand First. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </Typography>

                                <Typography variant="h5" color="initial">
                                    Head of design at Calvino
                                </Typography>
                            </CardContent>


                        </div>

                        <div
                            className="col-lg-6 col-md-6 col-sm-6"
                            style={{ borderLeft: '1px groove black' }}>
                            <CardContent>
                                <CardMedia
                                    component="img"
                                    alt="services 1"
                                    title="Strategy"
                                    image={ico}
                                    className="img"
                                    style={{ width: 100 }}
                                />

                                <Typography variant="h3" color="initial">
                                    Strategy & direction
                                </Typography>

                                <Typography variant="p" color="initial">
                                    Understand First. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua
                                </Typography>

                                <Typography variant="h5" color="initial">
                                    Head of design at Calvino
                                </Typography>
                            </CardContent>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
