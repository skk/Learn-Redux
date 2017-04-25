import { createStore, applyMiddleware } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';


// create object for default data
const defaultState = { posts, comments };

// const store = createStore(rootReducer, defaultState);
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware(thunk))(createStore);
const store = createStoreWithMiddleware(rootReducer, defaultState);


export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
    module.hot.accept('./reducers/', () => {
        const nextRootReducer = require('./reducers/index').default;
        store.replaceReducer(nextRootReducer);
    })
}

export default store;

