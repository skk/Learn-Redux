import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router'

import {Provider} from 'react-redux';

//noinspection ES6UnusedImports
import css from './styles/style.styl';

import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, {history} from './store';
import App from './components/App';


const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}>
                </IndexRoute>
                <Route path="/view/:postId" component={Single}>
                </Route>
            </Route>
        </Router>
    </Provider>
);

render(router,
    document.getElementById('root'));
