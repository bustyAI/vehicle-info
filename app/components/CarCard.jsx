import React from 'react'
import {
    Card, CardActions, CardContent, CardMedia, Typography,
    TextField,
} from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import { Percent, AccountCircle } from '@mui/icons-material'

const CarCard = () => {
    return (
        <Card variant='outlined' className='mx-auto' sx={{ width: 3 / 4, boxShadow: 3 }}>
            <div className='flex flex-row justify-between items-center'>
                <div className='flex flex-col relative'>
                    <CardContent>
                        <Typography variant='h4' component='div'>
                            Rivian 1
                        </Typography>
                    </CardContent>
                    <CardMedia
                        sx={{ height: 200, width: 350 }}
                        image='rivian.png'
                        title="rivian"
                    />
                    <div className='flex absolute z-0 bg-green-500 h-[200px] w-[350px] bottom-0 opacity-60' ></div>
                    <p className='absolute bottom-12 right-8 opacity-100 font-semibold text-white text-[70px] '>
                        Charged
                    </p>
                </div>
                <CardActions>
                    <TextField
                        className='mx-4 mt-8'
                        color='primary'
                        id="percentage-filled"
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