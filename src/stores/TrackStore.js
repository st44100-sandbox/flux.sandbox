import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import {EventEmitter} from 'events'


var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change'
var tracks = [];

class TrackStore extends EventEmitter {

    emitChange () {

    }

    addChangeListener (callback) {

    }

    removeChangeListener (callback) {

    }

    // Getter は作って良い. setterはダメだよ。
    getAll () {
        return tracks;
    }
}


// StoreはSingleton.
var _trackStore = new TrackStore()

// dispacherにstoreを登録する
// Dispacher -> Store -> view -> action
_trackStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch (action.type) {
        case ActionTypes.RECIEVE_TRACKS_BY_ARTIST:
            tracks = action.tracks
            _trackStore.emitChange()
            break;
        case ActionTypes.RECIEVE_TRACKS_BY_COUNTRY:
            tracks = action.tracks
            _trackStore.emitChange()
            break;

    }
})

export default _trackStore
