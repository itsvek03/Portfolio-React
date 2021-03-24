import { Card, CardActionArea, CardMedia } from '@material-ui/core';
import React from 'react';



export default function ImgWork(props) {
    console.log(props)
    const { gallery } = props;
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 w-100">
                        <Card className="card card-shadow">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Brand1"
                                    image={gallery}
                                    title="Gallery 1"
                                />
                            </CardActionArea>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    );
}

