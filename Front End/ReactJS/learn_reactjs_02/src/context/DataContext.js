import React from "react";
import { createContext, useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/posts'
import EditPost from '../EditPost';
import useWindowSize from '../hooks/useWindowSize';
import useAxiosFetch from '../hooks/useAxiosFetch';

const DataContext = createContext({})


export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    // results is an array
    const [searchResults, setSearchResults] = useState([])

    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');

    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    // history
    // const history = useHistory()

    const { width } = useWindowSize()

    const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts')

    useEffect(() => {
        setPosts(data)
    }, [data])

    /*
    // show data
    useEffect(() => {
      const fetchPosts = async () => {
        try {
          const response = await api.get('/posts')
          setPosts(response.data)
        } catch (error) {
          if (error.response) {
            // not in the 200 response range 
            console.log(error.response.data)
            console.log(error.response.message)
            console.log(error.response.status)
            console.log(error.response.headers)
          } else {
            console.log(`Error: ${error.message}`)
          }
        }
      }
  
      // fetch 
      fetchPosts()
    }, [])
  */

    useEffect(() => {
        // search
        const filteredResults = posts.filter(post =>
            (post.body).toLowerCase().includes(search.toLowerCase())
            || (post.title).toLowerCase().includes(search.toLowerCase()))

        setSearchResults(filteredResults.reverse())
    }, [posts, search])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
        const datetime = format(new Date(), 'MMMM dd, yyyy pp'); // pp for time
        const newPost = { id, title: postTitle, datetime, body: postBody }
        try {
            const response = await api.post('/posts', response.data)
            const allPosts = [...posts, newPost] // an array
            setPosts(allPosts)
            setPostTitle('')
            setPostBody('')
            //history.push('/')
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    const handleEdit = async (id) => {
        const datetime = format(new Date(), 'MMMM dd, yyyy pp'); // pp for time
        const updatePost = { id, title: editTitle, datetime, body: editBody }
        try {
            const response = await api.put(`/posts/${id}`, updatePost)
            setPosts(posts.map(post => post.id === id ? { ...response.data } : post))
            setEditTitle('')
            setEditBody('')
            //history.push('')
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    const handleDelete = async (id) => {
        try {
            //await api.delete(`/posts/${id}`)
            // const postList = posts.filter(post => post.id !== id)
            // setPosts(postList)
            // history.push('/') 
        } catch (error) {
            console.log(`Error: ${error.message}`)
        }
    }

    return (
        <DataContext.Provider value={{
            width
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext