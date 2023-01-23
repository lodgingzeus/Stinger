import { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../actions/posts'
import Form from '../Forms/Form'
import Posts from '../Posts/Posts'

const Home = () => {

    const [ currentId, setCurrentId ] = useState(null)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch]) 

    return (
        <div>
            <Grow in>
            <Container>
              <Grid container className='sm:flex-col-reverse md:flex-col-reverse' justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid item xs={12} sm={7}>
                  <Posts setCurrentId = {setCurrentId} />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
                </Grid>
              </Grid>
            </Container>
        </Grow>
        </div>
    )
}

export default Home