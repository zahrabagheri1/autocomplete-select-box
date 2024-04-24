import React from 'react'
import './PostCard.scss'


function Index(props) {
    return (
        <div className='postcard'>
            <div className="cardContent">
                <div className="postTitle">{props.title}</div>
                <div className="postBody">{props.text}</div>
            </div>
        </div>
    )
}

export default Index