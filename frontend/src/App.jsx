import React from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import image from './assets/image1.jpg'

const App = () => {
  return (
    <Container maxWidth="lg">
        <AppBar className='rounded-[15px] my-[30px] mx-0 flex flex-row justify-center items-center' position='static' color='inherit'>
            <Typography className='text-[#00b7ff]' variant="h2" align='center'>
              Stinger
            </Typography>
            <img className='ml-[15px] h-[60px]' src={image} alt='stinger'/>
        </AppBar>
        <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
              </Grid>
            </Container>
        </Grow>
    </Container>
  )
}

export default App