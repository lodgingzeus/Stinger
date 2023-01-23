import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@mui/material'
import image from '../../assets/image1.jpg'


const Navbar = () => {

    const user = null

  return (
    <AppBar style={{
        borderRadius: 15,
        margin: '30px 0',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }} position='static' color='inherit'>
          <div style={{
            display: 'flex',
            alignItems: 'center',
          }}>
            <Typography component={Link} to = "/" className='text-[#00b7ff]' variant="h2" align='center'>Stinger</Typography>
            <img className='ml-[15px] h-[60px]' src={image} alt='stinger'/>
          </div>
          <Toolbar style = {{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '400px',
          }}>
            {user ? (
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '400px',
                }}>
                    <Avatar alt={user.result.name} src = {user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography variant="h6" style = {{
                        display: 'flex',
                        alignItems: 'center',
                    }}>{user.result.name}</Typography>
                    <Button variant="container" color="secondary" onClick = {() => {}}>Logout</Button>
                </div>
            ) : (
                <Button component = {Link} to = "/auth" variant="contained" color = "primary">Sign In</Button>
            )}
          </Toolbar>
      </AppBar>
  )
}

export default Navbar