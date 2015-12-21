import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import {EventEmitter} from 'events'


var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change'
var posts = [];

class PostStore extends EventEmitter {

    emitChange () {
        this.emit(CHANGE_EVENT)
    }

    addChangeListener (callback) {
        this.on(CHANGE_EVENT, callback)
    }

    removeChangeListener (callback) {
        this.removeListener(CHANGE_EVENT, callback)
    }

    // Getter は作って良い. setterはダメだよ。
    getAll () {
        return posts;
    }
}


// StoreはSingleton.
var _postStore = new PostStore()

// dispacherにstoreを登録する
// Dispacher -> Store -> view -> action
_postStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch (action.type) {
        case ActionTypes.RECIEVE_POSTS_BY_ID:
            posts = action.posts
            _postStore.emitChange()
            break;
        case ActionTypes.RECIEVE_POSTS_ALL:
            posts = action.posts
            _postStore.emitChange()
            break;

    }
})

export default _postStore

