
import {ADD_COMMENT, REMOVE_COMMENT, INCREMENT_LIKES} from '../constants';

export function increment(index) {
    return {
        type: INCREMENT_LIKES,
        index
    }
}

export function addComment(postid, author, comment) {
    return {
        type: ADD_COMMENT,
        postId,
        author,
        comment
    }
}

export function removeComment(postId, index) {
    return {
        type: REMOVE_COMMENT,
        index,
        postId
    }
}