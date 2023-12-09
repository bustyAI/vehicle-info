import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'


const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='flex'>
                <Image alt='ready2go' src='/ready2go.jpg' width={150} height={150} />
            </div>
            <div className='navbar__right'>
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