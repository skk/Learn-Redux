import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router'
import Raven from 'raven-js';
import {Provider} from 'react-redux';

//noinspection ES6UnusedImports
import css from './styles/style.styl';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';
import store, {history} from './store';
import App from './components/App';
import { sentry_url } from './sentry';

Raven.config(sentry_url).install();

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid} />
                <Route path="/view/:postId" component={Single} />
            </Route>
        </Router>
    </Provider>
);

render(router,
    document.getElementById('root'));
