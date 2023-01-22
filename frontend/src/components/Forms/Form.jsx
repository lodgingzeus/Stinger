import { useState, useEffect } from 'react'
import { TextField, Typography, Paper, Button } from '@mui/material'
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts'

const Form = ( { currentId, setCurrentId } ) => {

  const [ postData, setPostData ] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: ''
  })

  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null)

  const dispatch = useDispatch()

  useEffect(() => {
    if(post) setPostData(post)
  }, [post])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    
    if(currentId){
      dispatch(updatePost(currentId, postData))
    }else{
      dispatch(createPost(postData))
    }
    clear()
  }

  const clear = () => {
    setCurrentId(null)
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' })
  }

  return (
    <Paper elevation = {3} className='p-[20px]'>
      <form autoComplete='off' noValidate className='flex flex-wrap m-[8px] justify-center gap-2' onSubmit={handleFormSubmit}>
        <Typography variant='h6'> {currentId ? 'Editing' : 'Creating'} a Post </Typography>
        <TextField name='creator' variant='outlined' label="Creator" fullWidth value = {postData.creator} onChange = {(e) => setPostData( { ...postData, creator: e.target.value })} className="m-2" />
        <TextField name='title' variant='outlined' label="Title" fullWidth value = {postData.title} className="m-2" onChange = {(e) => setPostData( { ...postData, title: e.target.value })} />
        <TextField name='message' variant='outlined' label="Message" fullWidth value = {postData.message} className="m-2" onChange = {(e) => setPostData( { ...postData, message: e.target.value })} />
        <TextField name='tags' variant='outlined' label="Tags" fullWidth value = {postData.tags} className="m-2" onChange = {(e) => setPostData( { ...postData, tags: e.target.value.split(',') })} /> 
        <div className = "w-[97%] my-[10px] mx-0">
          <FileBase
            type = 'file'
            multiple = {false}
            onDone = { ({base64}) => setPostData({ ...postData, selectedFile: base64}) }
          />
        </div>
        <Button variant = "contained" color = "primary" size = "large" type = "submit" fullWidth className='mb-[10px]'>Submit</Button>
        <Button variant = "contained" color = "secondary" size = "small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  )
}

export default Form