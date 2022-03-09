import './Sidebar.css';
import React from 'react';

const Sidebar = () => {
    return(
        <div className='sidebar-container'>
            <div className='sidebar-inner'>
                <ul className='sidebar-el'>
                    <li><p><i className="bi bi-house-door"></i> <span>Home</span></p></li>
                    <li><p><i className="bi bi-compass"></i> <span>Explore</span></p></li>
                    <li><p><i className="bi bi-file-play"></i> <span>Shorts</span></p></li>
                    <li><p><i className="bi bi-collection-play"></i> <span>Subscription</span></p></li>
                </ul>
                <hr />
                <ul className='sidebar-el'>
                    <li><p><i className="bi bi-film"></i> <span>Library</span></p></li>
                    <li><p><i className="bi bi-clock-history"></i> <span>History</span></p></li>
                    <li><p><i className="bi bi-play-btn"></i> <span>Your Videos</span></p></li>
                    <li><p><i className="bi bi-clock"></i> <span>Watch Later</span></p></li>
                    <li><p><i className="bi bi-hand-thumbs-up"></i> <span>Liked Videos</span></p></li>
                    <li><p><i className="bi bi-arrow-down-circle"></i> <span>Show More</span></p></li>
                </ul>
                <hr />
                <ul className='sidebar-el'>
                    <li><p><i className="bi bi-play-btn"></i> <span>Youtube Premium</span></p></li>
                    <li><p><i className="bi bi-controller"></i> <span>Gaming</span></p></li>
                    <li><p><i className="bi bi-soundwave"></i> <span>Live</span></p></li>
                    <li><p><i className="bi bi-trophy"></i> <span>Sports</span></p></li>
                </ul>
                <hr />
                <ul className='sidebar-el'>
                    <li><p><i className="bi bi-gear"></i> <span>Settings</span></p></li>
                    <li><p><i className="bi bi-flag"></i> <span>Report History</span></p></li>
                    <li><p><i className="bi bi-question-circle"></i> <span>Help</span></p></li>
                    <li><p><i className="bi bi-chat-left-quote"></i> <span>Send Feedback</span></p></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;