import React from 'react';
import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const CardComp = ({ data }) => {
    const [data1, setData1] = useState(data);

    return (
        <>
            <Box sx={{
                width: '100%',
                marginLeft: '70px',
            }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {data1.map((item, index) => (
                        <Grid item xs={2} sm={4} md={4} key={index}>
                            <button style={{ border: 'none', background: 'red', borderRadius: '20%', color: 'white', padding: '5px', cursor: 'pointer',marginRight:'-150px' }} 
                                onClick={() => {
                                    let newData = data1.filter((item1, index1) => {
                                        return index1 !== index
                                    }
                                    )
                                    setData1(newData)
                                }}
                            >
                                Delete
                            </button>
                            <Card sx={{
                                maxWidth: 345,
                                height: 350,
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image="https://source.unsplash.com/random"
                                        alt="image not available"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {item.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {item.body}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}


export default CardComp