

import aavtar from './images/aavtar.jpg'
import bbki from './images/bbki.jpg'
import sobit from './images/sobit.jpg'
import aashish from './images/aashish.jpg'
import apna from './images/apna.png'
import adarsh from './images/adarsh.jpg'
import {GoHomeFill} from 'react-icons/go'
import {BsFire} from 'react-icons/bs'
import {BiSolidUserRectangle} from 'react-icons/bi'
import {MdOutlineSubscriptions, MdOutlineWatchLater,} from 'react-icons/md'
import {BiSolidVideos, BiHistory,BiLike,BiHelpCircle} from 'react-icons/bi'
import {FiSettings,} from 'react-icons/fi'
import Header from './Header'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function VideoGrid(props){
    const video = props.video;
    return (
        <div class="thumbnail">
            <div class="video">
                <Link to={`/video?id=${video.videoId}`}>
                    <img class="thumbnail-img" src={video.thumbnail} />
                </Link>
            </div>
            <div class="video-title">
                <div>
                    <img src={aavtar} height={'30px'} width={'30px'} class="avatar"></img>
                </div>
                <div class="video-info">
                    <h4 class="track-title margin-0">{video.title}</h4>
                    <p class="margin-0 smaller-fontsize">T-Series</p>
                    <p class="margin-0 smaller-fontsize">{video.views} views . 4 years ago</p>
                </div>
            </div>
        
        </div>
    );
}

function Home(){
    const [videos, setVideos] = useState([]);

    const url = "http://localhost:5500/videos"

    const getVideos = async() => {
        try{
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setVideos(json.videos);

        }catch(error){
            console.log("Error", error)
        }
    };

    useEffect(() => {
        getVideos();
    }, [])

    return (
        <div>
            <Header />
            <div class="main-section">
                <div class="main-left">
                    <button class="yt-side-button">
                        <GoHomeFill /> <span class="side-button-label">Home</span>
                    </button>
                    <button class="yt-side-button">
                        <BiSolidUserRectangle /> <span class="side-button-label">Your Channel</span>
                    </button>
                    <button class="yt-side-button">
                        <BsFire /> <span class="side-button-label">Trending</span>
                    </button>
                    <button class="yt-side-button">
                        <BiSolidVideos /> <span class="side-button-label">Shorts</span>
                    </button> 
                    
                    
                    <hr />
                    <h6 class="fav">Library &gt; </h6>
                    <button class="yt-side-button">
                        <MdOutlineSubscriptions /> <span class="side-button-label">Subscriptions</span>
                    </button>
                    
                    <button class="yt-side-button">
                        <BiHistory /> <span class="side-button-label">History</span>
                    </button>
                    <button class="yt-side-button">
                        <MdOutlineWatchLater /> <span class="side-button-label">Watch Later</span>
                    </button>
                    <button class="yt-side-button">
                        <BiLike /> <span class="side-button-label">Liked Videos</span>
                    </button>
                    <hr />
                    <h6 class="fav">Favourites &gt; </h6>
                    <button class="yt-side-button">
                        <img src={sobit} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Sobit Tamang</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={aashish} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Ashish Chan</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={apna} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Apna College</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={adarsh} height={'30px'} width={'30px'}></img>
                        <span class="side-channel-label">Adarsh Uc</span>
                    </button>
                    <button class="yt-side-button">
                        <img src={bbki} height={'30px'} width={'30px'}></img>

                        <span class="side-channel-label">BB Ki Vines</span>
                    </button>
                    <hr/>
                    <button class="yt-side-button">
                        <FiSettings /> <span class="side-button-label">Settings</span>
                    </button>
                    {/* <button class="yt-side-button">
                        <FiFlag /> <span class="side-button-label">Report History</span>
                    </button> */}
                    <button class="yt-side-button">
                        <BiHelpCircle /> <span class="side-button-label">Help</span>
                    </button>
                    {/* <button class="yt-side-button">
                        <MdOutlineFeedback/> <span class="side-button-label">Send Feedback</span>
                    </button> */}

                </div>
                <div class="main-right">
                    <div class="panel">
                            <p class="aa">All</p>
                            <p>Comedy</p>
                            <p>Music</p>
                            <p>Cricekt</p>
                            <p>Football</p>
                            <p>Live</p>
                            <p>Lectures</p>
                            <p>Entertainment</p>
                            <p>WWE</p>
                            <p>Gaming</p>
                            <p>Diwali</p>
                            <p>Watched</p>
                            <p>Movie</p>
                            <p>Game Shows</p>
                            <p>New To You</p>  
                    </div>
                    
                        {videos.map((video) => {
                            return <VideoGrid video={video} />
                        })}
                    
                </div>
            </div>
            {/* <h3>Home</h3> */}
            {/* <table className="tablename">
                <tr id="myid">
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table> */}
        </div>
    )
}

export default Home;