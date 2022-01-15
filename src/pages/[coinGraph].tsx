import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import CoinData from '../api/CoinData';
import { Box, Typography } from '@mui/material';
import PriceHistory from '../api/PriceHistory';
import { Line } from 'react-chartjs-2'
import { Chart, registerables } from 'chart.js';

const Graph = () => {
    const router = useRouter();
    const id = router.query.coinGraph;
    console.log(id);
    const [coins, setCoins] = useState<any[]>([]);
    const [history, setHistory] = useState<any[]>([]);


    useEffect(() => {
        CoinData()
            .then((data) => {
                setCoins(data);
            })
    }, [])

    useEffect(() => {
        PriceHistory(id)
            .then((data) => {
                // console.log(data);
                setHistory(data);
            })
    }, [])

    let flag = 0;
    coins.map((coin) => {
        if (id === coin.uuid) {
            flag = 1;
        }
    })
    if (flag === 0) {
        return (
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Typography variant='h3'>Page Could Not Be Found</Typography>
            </Box>
        )
    }
    const coinPrice: any[] = [];
    const coinTimeStamp: any[] = [];
    history?.map((his, i) => {
        coinPrice.push(his.price);
        coinTimeStamp.push(his.timestamp);
    });
    // console.log(`price : ${coinPrice}`)
    // console.log(`coinTimeStamp : ${coinTimeStamp}`)
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'price-time graph',
                data: coinPrice,
                fill: true,
                // backgroundColor: 'red',
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    }
                }
            ]
        }
    }
    Chart.register(...registerables);
    return (
        <Line data={data} />
        // <h1>FOUND</h1>
    )
}

export default Graph;