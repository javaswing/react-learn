import { combineReducers } from 'redux';
import { SELECT_ALBUM, INVALIDATE_ALBUM, RECEIVE_POSTS, REQUEST_POSTS } from '../actions';

const selectedAlbum = (state = '38963', actions) => {
  switch (actions.type) {
    case SELECT_ALBUM:
      return actions.album
    default:
      return state
  }
}

const posts = (state = {
  isLoading: false,
  didInvalidate: false,
  items: []
}, actions) => {
  switch (actions.type) {
    case INVALIDATE_ALBUM:
      return {
        ...state, 
        didInvalidate: true
      };
    case REQUEST_POSTS:
      return {
        ...state, 
        isLoading: true,
        didInvalidate: false
      }
    case RECEIVE_POSTS: 
      return {
        ...state,
        isLoading: false,
        didInvalidate: false,
        items: actions.posts,
        lastUpdated: actions.receiveAt
      }
    default: 
      return state
  }
}

const postsByAlbum = (state = {}, actions) =>{
  switch (actions.type) {
    case INVALIDATE_ALBUM:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [actions.album]: posts(state[actions.album], actions)
      }
    default:
      return state
  }
}


const rooterReducers = combineReducers(
 {
  selectedAlbum,
  postsByAlbum
 } 
)

export default rooterReducers;
