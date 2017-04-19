import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

const Single = (props) => {
    const { postId } = props.params;
    const idx = props.posts.findIndex((post) => post.code === postId);
    const post = props.posts[idx];
    const postComments = props.comments[postId] || [];

    return (
        <div className="single-photo">
            <Photo i={idx} post={post} {...props} />
            <Comments postComments={postComments} />
        </div>
    )
};

export default Single;