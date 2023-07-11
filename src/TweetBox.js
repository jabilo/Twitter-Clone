import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';
import './TweetBox.css'
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import EmojiPicker from 'emoji-picker-react';
import db from './firebase'

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();
    db.collection('posts').add({
        displayName:'Jabilo Jose',
        username:'jabilo02',
        verified:true,
        text:tweetMessage,
        image:tweetImage,
        avatar:'https://media.licdn.com/dms/image/D5603AQG2HTlvU6udEQ/profile-displayphoto-shrink_800_800/0/1681446925643?e=2147483647&v=beta&t=vuR8yrA9-WBhSYABj9DzhoItOHvxYx7UWP8LpihqAv8',

    })

  }
  return (
    <div className='card'>
        <div className='tweetbox'>
            <div className='tweetbox__avatar'>
                <Avatar/>
            </div>
            <div className='tweetbox__form'>
                <form className='form-group'>
                        <div className='tweetbox__input'>
                            <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} type='text' placeholder='whats happening ? ' className='form-control inp-form'/>
                        </div>
                        <div className='tweetbox__imageInput'>
                            <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} type='text' placeholder='img url --> ' className='form-control inp-form my-3'/>
                        </div>
                        <button onClick={sendTweet} type='submit' className='btn btn-primary tweet-btn'>Tweet</button>
                </form>

               
            </div> 
        </div>
        <div className='tweetbox__icons'>
                <ImageIcon className='icon'/>
                <GifBoxIcon className='icon'/>
                <EmojiEmotionsIcon className='icon'/>
                {/* <EmojiPicker/> */}
                <SmartToyIcon className='icon'/>
              
               
        </div>
       
     </div>
    
  )
}

export default TweetBox
