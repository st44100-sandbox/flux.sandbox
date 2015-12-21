import React from 'react'
import ReactDOM from 'react-dom'

// Entry point
import AppConstant from './constants/AppConstants'
import AppDispatcher from './dispatcher/AppDispatcher'
import PostStore from './stores/PostStore'
import PostAction from './actions/PostAction'
import {fetchByArtist, fetchByCountry} from './actions/PostAction'
import PostList from './views/postList.jsx'
import PostForm from './views/postForm.jsx'

console.log('Entey point');
console.log('Constants', AppConstant);
console.log('Dispacher', AppDispatcher);
console.log('Store', PostStore);
console.log('Actions', PostAction, fetchByArtist, fetchByCountry);
console.log('PostList', PostList);

// Render react copmonent.
ReactDOM.render(React.createElement(PostForm), document.getElementById('postForm'))
ReactDOM.render(React.createElement(PostList), document.getElementById('postList'))


