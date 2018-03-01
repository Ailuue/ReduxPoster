import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './Reducers';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './Components/PostsIndex';
import promise from 'redux-promise';
import PostsNew from './Components/PostsNew';
import PostsShow from './Components/PostsShow';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/posts/new" component={PostsNew}/>
                <Route path="/posts/:id" component={PostsShow} />
                <Route path="/" component={PostsIndex}/>
            </Switch>
        </div>
    </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
