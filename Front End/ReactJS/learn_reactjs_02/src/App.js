import React from 'react';
import Header from './Header'
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Routes, Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Post',
      datetime: 'July01, 2021 11:17:36 AM',
      body: 'This is the first body This is the first body This is the first body This is the first body This is the first body'
    },
    {
      id: 2,
      title: 'My Second Post',
      datetime: 'December 02, 2002 09:00:00 AM',
      body: 'This is the me'
    },
    {
      id: 3,
      title: 'My Third Post',
      datetime: 'July10, 2023 12:17:36 AM',
      body: 'This is the 3th body'
    }
  ])
  const [search, setSearch] = useState('')
  // results is an array
  const [searchResults, setSearchResults] = useState([])

  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  // history
  // const history = useHistory()

  useEffect(() => {
    // search
    const filteredResults = posts.filter(post =>
      (post.body).toLowerCase().includes(search.toLowerCase())
      || (post.title).toLowerCase().includes(search.toLowerCase()))

    setSearchResults(filteredResults.reverse())
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp'); // pp for time
    const newPost = { id, title: postTitle, datetime, body: postBody }
    const allPosts = [...posts, newPost] // an array
    setPosts(allPosts)
    setPostTitle('')
    setPostBody('')
    //history.push('/')
  }

  const handleDelete = (id) => {
    // const postList = posts.filter(post => post.id !== id)
    // setPosts(postList)
    // history.push('/')
  }

  return (
    <div>
      <Header title='ReactJs Blog' />
      <Nav
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route path="/" element={<Home posts={searchResults} />} />
        <Route path="/post" element={<NewPost
          handleSubmit={handleSubmit}
          postTitle={postTitle}
          setPostTitle={setPostTitle}
          postBody={postBody}
          setPostBody={setPostBody}
        />} />
        {/* problem with post/id */}
        <Route path="/post/:id" element={<PostPage posts={posts}
          handleDelete={handleDelete} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
