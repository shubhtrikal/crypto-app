/* eslint-disable react/jsx-key */
import React from 'react'
import ResponsiveDrawer from "../components/Drawer";
import { ButtonBase, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, Typography, Avatar, Divider } from '@mui/material'
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import CoinData from '../api/CoinData'
import { makeStyles, createStyles } from '@mui/styles'
import { Theme, useTheme } from '@mui/material/styles'
import millify from 'millify';
import { useRouter } from 'next/router';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardHeader: {
      justifyContent: 'space-around',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    },
    root: {
      marginLeft: "240px",
      padding: theme.spacing(1),
      [theme.breakpoints.down('sm')]: {
        marginLeft: "0",
      },
    },
  })
)

const Home = () => {

  const classes = useStyles();
  let [coins, setCoins] = useState<any[]>([]);

  useEffect(() => {
    CoinData()
      .then((data) => {
        setCoins(data);
      })
  }, [])

  const router = useRouter();

  return (
    <>
      <ResponsiveDrawer />
      <Box className={classes.root}>
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent='space-around'>
          {
            coins?.map((coin, i) => (

              <Grid item key={i}>
                <ButtonBase onClick={() => router.push(`/${coin.uuid}`)}>
                  <Card sx={{ maxWidth: 300, minWidth: 250, backgroundColor: coin.color, color: coin.color === null ? 'black' : 'white' }} elevation={6} >

                    <CardHeader
                      title={coin.name}
                      avatar={<Avatar src={coin.iconUrl} alt="logo" sx={{ backgroundColor: 'white' }} />}
                      className={classes.cardHeader}
                    />
                    <Divider />
                    <CardContent>
                      <Box className={classes.cardContent}>
                        <Typography> Price: {millify(coin.price)}</Typography>
                        <Typography> Market Cap: {millify(coin.marketCap)}</Typography>
                        <Typography> Daily Change: {coin.change}%</Typography>
                      </Box>
                    </CardContent>
                  </Card>
                </ButtonBase>
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export default Home;