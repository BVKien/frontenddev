import React from 'react'
import { useParams, Link } from 'react-router-dom'

const PostPage = ({ posts, handleDelete }) => {
    const { id } = useParams()
    const post = posts.find(post => (post.id).toString() === id)
    return (
        <main>
            <article>
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p>{post.datetime}</p>
                        <p>{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button className='editButton'>Edit post</button>
                        </Link>
                        <button className='deleteButton' onClick={() => handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!post &&
                    <>
                        <h2>Post not found</h2>
                        <p>Well, that's disappointing</p>
                        <p>
                            <Link to='/'>Visit our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default PostPage