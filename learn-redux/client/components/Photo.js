import React from 'react';
import { Link } from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';


const Photo = (props) => {
    const {post, idx, comments} = props;
    return (
        <figure className="grid-figure">
            <div className="grid-photo-wrap">
                <Link to={`/view/${post.code}`}>
                    <img src={post.display_src} alt={post.caption} className="grid-photo-wrap" />
                </Link>
                <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    <span key={post.likes} className="likes-heart">{post.likes}</span>
                </CSSTransitionGroup>
            </div>
            <figcaption>
                <p>{post.caption}</p>
                <button className="likes">&hearts; {post.likes}</button>
                <Link to={`/view/${post.code}`} className="button">
                    <span className="comment-count">
                        {comments[post.code] ? comments[post.code].length : 0}
                    </span>
                </Link>
            </figcaption>
        </figure>
    )
};

export default Photo;
