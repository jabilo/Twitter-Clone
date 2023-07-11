import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import './Right.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed"
function Right() {
  return (
    <div className='widgets'>
      {/* <h2>widgets</h2> */}
      <div className='widgets__input input-group'>
        <SearchIcon className='widgets__searchIcon'/>
        <input placeholder='Search Twitter' type='text' className='form-control'/>
      </div>
      <div className='widgets__container'>
        {/* <h2>Whats happening</h2> */}
        <TwitterTweetEmbed tweetId={"858551177860055040"}/>
        <TwitterTweetEmbed tweetId={"1463189180675100672"}/>
      </div>

    </div>
  )
}

export default Right
