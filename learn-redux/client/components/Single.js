import React from 'react';

import Photo from './Photo';
import Comment from './Comments';

const Single = (props) => {
    console.log(props);
    const idx = props.posts.findIndex((post) => post.code === props.params.postId);
    const post = props.posts[idx];

    return (
        <div className="single-photo">
            <Photo i={idx} post={post} {...props} />
        </div>
    )
};

export default Single;