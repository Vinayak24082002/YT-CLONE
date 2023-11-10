// rfce
import React, { useState } from 'react'
import ytLogo from './images/yt-logo.png'
import vinayak from './images/vinayak.jpg'
import {BsFillMicFill} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogOut} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import {RiVideoUploadLine} from 'react-icons/ri'
import { Link } from 'react-router-dom'

function Header() {
    const [isUserLoggedIn, setIsLoggedIn] = useState(
        localStorage.getItem('token') != null
    )

    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        localStorage.removeItem('userId')
        localStorage.removeItem('name');

        setIsLoggedIn(false);
    }

    console.log("Is logged in", isUserLoggedIn)
  return (
    <div class="header-container">
        <div class="header">
            <div class="header-items header-logo">
                <div class="header-first">
                    <GiHamburgerMenu class="hamburger" />
                </div>
                <div class="header-second">
                    {/* <a href='/'><img id='yt-logo' src={ytLogo}/></a> */}
                    <Link to={'/'}><img id='yt-logo' src={ytLogo}/></Link>
                </div>
            </div>
            <div class="header-items header-center">
                {/* <div class="header-search"></div> */}
                <input class="header-search" placeholder='Search..'/>
                <button class="search-button">
                <AiOutlineSearch class="search-icon" />  
                    {/* <img class="small-image" src={searchIcon}></img> */}
                </button>
                <div class="header-mic">
                        <BsFillMicFill class="mic-icon" />
                </div>
            </div>
            {
                isUserLoggedIn ? (
                    <div class="header-items header-profile">
                        <Link to={'/upload'}>
                            <RiVideoUploadLine class="logout" title='Upload video'/>
                        </Link>
                        <img src={vinayak} height={'40px'} width={'40px'} class="vinayak"
                        ></img>
                        <p class="user-email margin-0">{localStorage.getItem('email')}</p>
                        <BiLogOut class="logout" title='Logout' onClick={() => handleLogout()}/>
                    </div>
                ) : (
                    <div class="header-items header-profile">
                        <Link to={'/signin'}>
                        <button class="header-tools">Sign In</button>
                        </Link>
                    </div>
                )
            }
        </div>

        

        
    </div>
  )

}

export default Header
