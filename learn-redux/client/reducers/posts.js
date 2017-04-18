import {INCREMENT_LIKES} from '../constants';

function posts(state=[], action) {
    switch(action.type) {
        case INCREMENT_LIKES:
            const idx = action.index;
            return [
                ...state.slice(0, idx),
                {
                    ...state[idx],
                    likes: state[idx].likes + 1
                },
                ...state.slice(idx + 1)
            ];
        default:
            return state
    }
}

export default posts;