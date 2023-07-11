import React, { useEffect, useState } from 'react'
import './Center.css'
import TweetBox from './TweetBox'
import Post from './Post'
import db from './firebase'

function Center() {
  const [posts,setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  },[])
  return (
    <div className='feed'>
    {/* header */}
    <div className='feed__header'>
    {/* <h3>Home</h3> */}
    </div>
   
    {/*tweet box  */}
    <TweetBox/>

    {/* post */}
    {posts.map(post => (
      <Post 
      displayName={post.displayName}
      username={post.username}
      verified={post.verified}
      text={post.text}
      avatar={post.avatar}
      img={post.image}
      />
    ))}
    
    </div>
  )
}

export default Center
