/* eslint-disable react/jsx-key */
import React from 'react'
import ResponsiveDrawer from "../components/Drawer";
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Box, minWidth } from "@mui/system";
import { useEffect, useState } from "react";
import CoinData from '../api/CoinData'
import { makeStyles, createStyles } from '@mui/styles'
import { Theme } from '@mui/material/styles'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardImage: {
      backgroundSize: "cover",
      width: "50%",
      margin: "auto",
      height: "300",
      marginTop: "10px"
    },
    card: {
      // margin: "10px 0"
    }
  })
)

const Home = () => {
  const drawerWidth = 240;
  const classes = useStyles();

  let [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    CoinData()
      .then((data) => {
        setCoins(data);
      })
  }, [])
  console.log(coins);
  return (
    <>
      <ResponsiveDrawer />
      <Box>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='space-around'>
          {
            coins?.map((coin, i) => (

              <Grid item key={i}>
                <Card sx={{ maxWidth: 300, minWidth: 250 }} elevation={6} className={classes.card}>
                  <CardMedia className={classes.cardImage}
                    component="img"
                    height='150'
                    image={coin.iconUrl}
                    alt={coin.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export default Home;