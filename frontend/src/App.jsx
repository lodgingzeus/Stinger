import { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getPosts } from './actions/posts'
import Posts from './components/Posts/Posts'
import Form from './components/Forms/Form'
import image from './assets/image1.jpg'

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(getPosts())
  }, [dispatch])

  return (
      <div>
        <Container maxWidth="lg">
        <AppBar style={{
          borderRadius: 15,
          margin: '30px 0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }} position='static' color='inherit'>
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
      </div>
  )
}

export default App