import request from 'superagent'
import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

/**
 * Actinonは
 */

var ActionTypes = AppConstants.ActionTypes

var urlRoot = "http://jsonplaceholder.typicode.com";

export function fetchById (postId) {
    // Dispatcherで作ったメソッドを経由してEvent、処理やDataを流す
    // Ajaxみたいな処理をここに置くべきなのかはよくわからない。
    // Storeはstateの保持だけに徹して、且つ同期的じゃないとダメらしい。
    // 非同期処理はStoreから切り離して、実装するのがいいらしい。
    // ActionはControllerな感じ。ViewはReact。
    // ActionはDispacherだけを知ってる。
    // Viewを知らなくてもよい。
    request.get(`${urlRoot}/posts/${postId}`)
    .end((err, res) => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.RECIEVE_POSTS_BY_ID,
            posts: res.body
        })
    })

}

export function fetchAll () {
    request.get(`${urlRoot}/posts/`)
    .end((err, res) => {
        AppDispatcher.handleViewAction({
            type: ActionTypes.RECIEVE_POSTS_ALL,
            posts: res.body
        })
    })
}


export default {
    fetchAll: fetchAll,
    fetchById: fetchById
}
