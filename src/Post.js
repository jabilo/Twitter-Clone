import React, { useState } from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';
import Avatar from '@mui/material/Avatar';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import SendIcon from '@mui/icons-material/Send';
import RepeatIcon from '@mui/icons-material/Repeat';
import './Post.css'


function Post({displayName, username, verified, text, img, avatar }) {
  const [like,setLike] = useState(false);
  const [likeCount,SetLikeCount] = useState(0);
  var n = 0;
  const onLike = (n) => {

    if(like === true){
      setLike(false);
      
      SetLikeCount(likeCount+1);
    
      
      
    }else{
      setLike(true);
    }
  }
  return (
    <div className='post card'>
        {/* header */}
      <div className='post__header'>
        <div className='post__avatar post-header-item'>
            <Avatar src={avatar}/>
        </div>
        <h6 className='post-header-item my-2'>{displayName}</h6>
        <span>
        {verified &&  <VerifiedIcon color='primary' className='post-header-item my-2'/> }
        </span>
 
        <h6 className='post-header-item my-2'>{username}</h6>
        <h6 className='post-header-item my-2'>2h</h6>
      </div>
        {/* body */}
      <div className='post__body'>
        <div className='text'>
             <p>{text}</p>
        </div>
        <div className='post-img-vid'>
            <img src={img} alt='' />
        </div>
      </div>
      {/* footer */}
      <div className='post__footer' >
        <div className='post-footer-icon-div'>
          <button type='button' className='btn btn-light ' >
            <CommentIcon className='post-footer-icon' color='primary'/>
            <span className="badge bg-primary">4</span>
          </button>
          
            
         
        </div>
       <div className='post-footer-icon-div'>
            <button onClick={onLike} className='btn btn-light'>
            {
              like ? <ThumbUpOffAltIcon className='post-footer-icon'/> : <ThumbUpAltIcon className='post-footer-icon' />
            }

            <span className="badge bg-primary">{likeCount}</span>
            </button>
           
       </div>
       <div className='post-footer-icon-div'>
            <button className='btn btn-light'>
            <RepeatIcon className='post-footer-icon'/>
            {/* <span className="badge bg-primary">4</span> */}
            </button>
        </div>

        <div className='post-footer-icon-div'>
            <button className='btn btn-light'>
            <SendIcon className='post-footer-icon'/>
            {/* <span className="badge bg-primary">4</span> */}
            </button>
        </div>
        
      </div>
      
      <div className='post-input'>
       
        <form className='post-form'>
        <Avatar className='post-comment-avatar my-3'/>
        <input  class="form-control form-control-sm my-3 post-form-input" type="text" placeholder="" aria-label=".form-control-sm example"/>
        <button className='btn btn-light post-form-input-btn btn-sm my-3'>Comment</button>
        </form>
      
      </div>

     
    </div>
  )
}

export default Post
