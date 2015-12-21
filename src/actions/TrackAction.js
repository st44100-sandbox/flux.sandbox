import request from 'superagent'
import AppDispatcher from '../dispatcher/AppDispatcher'
import AppConstants from '../constants/AppConstants'

var ActionTypes = AppConstants.ActionTypes

var urlRoot = "http://ws.audioscrobbler.com/2.0/?api_key=xxxx&format=json&";


export function fetchByArtist (artist) {
    request.get(`${urlRoot}method=artist.gettoptracks&artist=${encodeURIComponent(artist)}`)
    .end((err, res) => {
        debugger
        // Event でStore へ更新へ更新情報を送る
        AppDispatcher.handleViewAction({
            type: ActionTypes.RECIEVE_TRACKS_BY_ARTIST,
            tracks: res.body.toptracks.track
        })
    })

}

export function fetchByCountry (country) {
    request.get(`${urlRoot}method=artist.gettoptracks&country=${encodeURIComponent(country)}`)
    .end((err, res) => {
        debugger
        // Event でStore へ更新へ更新情報を送る
        AppDispatcher.handleViewAction({
            type: ActionTypes.RECIEVE_TRACKS_BY_COUNTRY,
            tracks: res.body.toptracks.track
        })
    })
}


export default {
    fetchByArtist: fetchByArtist,
    fetchByCountry: fetchByCountry
}
