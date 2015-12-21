import keyMirror from 'fbjs/lib/keyMirror'

export default {
  ActionTypes: keyMirror({
    RECIEVE_POSTS_BY_ID: null,
    RECIEVE_POSTS_ALL: null
  }),
  PayloadSources: keyMirror({
    VIEW_ACTION: null
  })
}


