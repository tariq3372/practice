import { Card, CardContent, CardHeader, CardMedia, Typography, Grid, CardActions, Button } from '@mui/material'
import React from 'react'

const Body = () => {
    return (
        <>
            <div style={{ padding: 20, backgroundColor: 'gray' }}>
                <Grid container spacing={10} direction="row" justify="center"  >
                    <Grid item xs={12} lg={4}>

                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="C++" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="C++"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <CardActions>
                                <Button>
                                    More...
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="Java" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="Java"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <Button>
                                More...
                            </Button>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>

                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="c#" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="C#"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <Button>
                                More...
                            </Button>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>

                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="JS" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="JS"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <Button>
                                More...
                            </Button>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>

                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="React.Js" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="React.js"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <Button>
                                More...
                            </Button>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>

                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="React Native" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="React Native"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <Button>
                                More...
                            </Button>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>

                        <Card style={{ backgroundColor: 'white' }}>
                            <CardHeader title="Node.Js" />
                            <CardMedia
                                component="img"
                                height="194"
                                image={require('./static/images/cards/c++.png')}
                                alt="Node.js"
                            />
                            <CardContent >
                                <Typography>This impressive paella is a perfect party dish and a fun meal to cook</Typography>
                            </CardContent>
                            <Button>
                                More...
                            </Button>
                        </Card>
                    </Grid>

                </Grid>
            </div>
        </>

    )
}

export default Body