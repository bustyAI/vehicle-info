import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'


const NavBar = () => {
    return (
        <nav className='flex flex-row justify-between items-center mx-14'>
            <div className='flex'>
                <Image src='/ready2go.jpg' width={150} height={150} />
            </div>
            <div className='flex-row space-x-8'>
                <Button className='bg-blue-500 text-xl' color='primary' size='large' variant='contained'>
                    Login
                </Button>
                <Button className='bg-red-500 text-xl' color='error' size='large' variant='contained'>
                    Logout
                </Button>
                <IconButton size='large' color='primary'>
                    <MenuIcon color='primary' sx={{ fontSize: 60 }} />
                </IconButton>
            </div>
        </nav>
    )
}

export default NavBar