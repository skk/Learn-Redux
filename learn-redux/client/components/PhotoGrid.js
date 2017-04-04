import React from 'react';

import Photo from './Photo';

const PhotoGrid = (props) => {
    return (
        <div className="photo-grid">
            {props.posts.map((post, idx) => <Photo {...props} post={post} key={idx} idx={idx} />)}
        </div>
    )
};

export default PhotoGrid;