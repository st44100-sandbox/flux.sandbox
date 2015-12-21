import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'
import {EventEmitter} from 'events'


var ActionTypes = AppConstants.ActionTypes;
var CHANGE_EVENT = 'change'
var posts = [];

/**
 * Storeはeventの購読/発行ができ、Dataを保持できるオブジェクトであればよい。
 * ここではnodeのeventsを使ってる
 */
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

    // Getter は作って良い. setterは作らない
    getAll () {
        return posts;
    }
}


// StoreはSingleton.
var _postStore = new PostStore()

// dispacherにstoreを登録する
// Dispacher -> Store -> view -> action
// facebook/fluxで用意されてるのはDispatcherのみ
// setterの代わりにDispatcherのcallbackを使って、データを更新する
// Store自身はDispatcherだけ知ってれば良い。Dispathcerに登録しておくだけ。
// Dispatcher.regiserの戻り値にはIDがかえってくる。waitForのときにこれを使ったりする
_postStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;
    // 厳密にやるならpayload.sourceも見たほうがいい
    switch (action.type) {
        case ActionTypes.RECIEVE_POSTS_BY_ID:
            // Dataの更新
            posts = action.posts
            // Data更新の通知
            //  このStoreの購読している要素に対して通知する
            _postStore.emitChange()
            break;
        case ActionTypes.RECIEVE_POSTS_ALL:
            posts = action.posts
            _postStore.emitChange()
            break;

    }
})

export default _postStore

