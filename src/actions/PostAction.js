import request from 'superagent'
import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

var ActionTypes = AppConstants.ActionTypes

var urlRoot = "http://jsonplaceholder.typicode.com";


export function fetchById (postId) {
    request.get(`${urlRoot}/posts/${postId}`)
    .end((err, res) => {
        // Event でStore へ更新へ更新情報を送る
        AppDispatcher.handleViewAction({
            type: ActionTypes.RECIEVE_POSTS_BY_ID,
            posts: res.body
        })
    })

}

export function fetchAll () {
    request.get(`${urlRoot}/posts/`)
    .end((err, res) => {
        // Event でStore へ更新へ更新情報を送る
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
