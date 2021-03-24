import React from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Button } from '@material-ui/core'
import ImgWork from './ImgWork'
import brand1 from '../../images/gallery1.png'
import brand2 from '../../images/gallery2.png'
import brand3 from '../../images/gallery3.png'
import brand4 from '../../images/gallery4.png'



const useStyles = makeStyles({
    letter: {
        fontFamily: "Roboto Condensed, sans-serif",
        fontWeight: 400,
        fontSize: 50,
    },
    button: {
        fontSize: "1rem",
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        textTransform: "none",
        color: "white"
    }
})

export default function Works() {
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
                            My Works
                        </Typography>
                    </div>
                </div>

            </div>


            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-1">
                    </div>
                    <div className="col-md-5 mt-3">
                        <ImgWork
                            gallery={brand1}
                        />
                    </div>

                    <div className="col-md-5 mt-3">
                        <ImgWork
                            gallery={brand2}
                        />
                    </div>

                    <div className="col-md-1">
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-1">
                    </div>

                    <div className="col-md-5 mt-3">
                        <ImgWork
                            gallery={brand3}
                        />
                    </div>

                    <div className="col-md-5 mt-3">
                        <ImgWork
                            gallery={brand4}
                        />
                    </div>

                    <div className="col-md-1">
                    </div>
                </div>
            </div>

            <div className="container mt-5 mb-5">
                <div className="col-md-12 text-center">
                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                    >
                        More Work
                    </Button>
                </div>
            </div>
        </>
    )
}
