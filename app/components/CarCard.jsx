"use client"
import React from 'react'
import { ChargeStatus } from '.'
import {
    Card, CardActions, CardContent, CardMedia, Typography,
    TextField,
} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { Percent, Battery1Bar, BatteryChargingFull } from '@mui/icons-material'
import { useState } from 'react'

const CarCard = ({ name }) => {

    const [isCharged, setIsCharged] = useState();

    function handleChange(event) {
        if (event.target.value >= 90 && event.target.value <= 100) {
            setIsCharged(true)
        }
        else if (event.target.value >= 0 && event.target.value < 90) {
            setIsCharged(false)
        }
    }
    return (
        <Card variant='outlined' className='mx-auto my-8' sx={{ width: 3 / 4, boxShadow: 3 }}>
            <div className='card__container'>
                <div className='card__image_container'>
                    <CardContent className='mx-auto'>
                        <Typography variant='h4' component='div'>
                            {name}
                        </Typography>
                    </CardContent>
                    <CardMedia
                        sx={{ height: 200, width: 350 }}
                        image='rivian.png'
                        title="rivian"
                        alt="Rivian"
                    />
                    {isCharged ? <ChargeStatus key='charged' cardColor={'bg-green-500'} /> : <ChargeStatus key='notCharged' cardColor={'bg-red-500'} />}
                    {isCharged ? <BatteryChargingFull sx={{ fontSize: 115 }} className='battery__icon'>

                    </BatteryChargingFull> : <Battery1Bar className='battery__icon' sx={{ fontSize: 115 }} />}
                </div>
                <CardActions>
                    <TextField
                        onChange={handleChange}
                        className='mx-4 mt-8'
                        color='primary'
                        id={name}
                        variant="outlined"
                        label="Percentage"
                        margin='normal'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Percent />
                                </InputAdornment>
                            ),
                        }}
                    />
                </CardActions>
            </div>

        </Card>
    )
}

export default CarCard