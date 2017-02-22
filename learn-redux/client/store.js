/**
 * Created by steven.knight on 2/22/17.
 */

import {createStore, compose} from 'redux';
import {syncHistoryWithStore} from 'react-router-redux';
import {browserHistory} from 'react-router';

// root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';


// create object for default data
const defaultState = { posts, comments };

export const store = createStore(rootReducer, defaultState);

export const history = syncHistoryWithStore(browserHistory, store);

