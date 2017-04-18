
function posts(state=[], action) {
    console.log(state, action);

    switch(action.type) {
        case'INCREASE_LIKES':
            const idx = action.index;
            return [
                ...state.slice(0, idx),
                {
                    ...state[idx],
                    likes: state[idx].likes + 1
                },
                ...state.slice(idx + 1)
            ]

        default:
            return state
    }
}

export default posts;