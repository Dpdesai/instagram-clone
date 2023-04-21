import React from 'react';
import "./Post.css";
import { Avatar } from '@mui/material';

function Post() {
    return (
        <div className='post'>
            <div className="post__header">
                <Avatar
                    className='post__avatar'
                    alt='DD'
                    src="/static/images/avatar/1.jpg"
                />
                <h3>Username</h3>
            </div>
            <img
                className='post__image'
                src='https://iot4beginners.com/wp-content/uploads/2022/08/ba11d056cec27254d89b310745e4071b-1.png'
                alt=""
            />
            <h4 className='post__text'><strong>Username: </strong>caption</h4>
            {/* image */}
            {/* username + caption*/}
        </div>
    )
}

export default Post;