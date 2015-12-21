import React from 'react'
import ReactDOM from 'react-dom'

// enter point
import AppConstant from './constants/AppConstants'
import AppDispatcher from './dispatcher/AppDispatcher'
import TrackStore from './stores/TrackStore'
import TrackAction from './actions/TrackAction'
import {fetchByArtist, fetchByCountry} from './actions/TrackAction'
import TrackList from './views/trackList.jsx'
import TrackForm from './views/trackForm.jsx'

console.log('Entey point2');
console.log('Constants', AppConstant);
console.log('Dispacher', AppDispatcher);
console.log('Store', TrackStore);
console.log('Actions', TrackAction, fetchByArtist, fetchByCountry);
console.log('TrackList', TrackList);


ReactDOM.render(React.createElement(TrackForm), document.getElementById('trackForm'))
ReactDOM.render(React.createElement(TrackList), document.getElementById('trackList'))


