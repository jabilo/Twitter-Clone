import React from 'react'
import './Left.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {auth} from './firebase'

function Left() {
  return (
    <div className='sidebar'>
      <TwitterIcon className='sidebar__twitterIcon'/>
      {/* sidebar options */}
      <SidebarOption text="Home" Icon={<HomeIcon/>}/>
      <SidebarOption text={"Explore"} Icon={<SearchIcon/>}/>
      <SidebarOption text={"Notifications"} Icon={<NotificationsIcon/>}/>
      <SidebarOption text={"Messages"} Icon={<MailOutlineIcon/>}/>
      <SidebarOption text={"Bookmarks"} Icon={<BookmarkBorderIcon/>}/>
      <SidebarOption text={"Lists"} Icon={<ListAltIcon/>}/>
      <SidebarOption text={"Profile"} Icon={<PermIdentityIcon/>}/>
      <SidebarOption text={"More"} Icon={<MoreHorizIcon/>}/>

    <button className='btn btn-primary sidebar__tweet'>
    Tweet
    </button>

    <button onClick={() => auth.signOut()} className='btn btn-dark sidebar__signout'>
    Sign Out
    </button>


    </div>
  )
}

export default Left
