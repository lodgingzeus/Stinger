import axios from 'axios'

const url = 'http://localhost:8181/posts'

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => {
    console.log(newPost)
    return axios.post(url, newPost)
};