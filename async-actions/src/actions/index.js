export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_ALBUM = 'SELECT_ALBUM';
export const INVALIDATE_ALBUM = 'INVALIDATE_ALBUM';

// 刷新专辑
export const invalidateAlbum = (album) => ({
  type: INVALIDATE_ALBUM,
  album
})


export const selectAlbum = (album) => ({
  type: SELECT_ALBUM,
  album
})

export const requestPosts = album => ({
  type: REQUEST_POSTS,
  album
});

export const receivePosts = (album, json) => ({
  type: RECEIVE_POSTS,
  album,
  posts: json,
  receiveAt: Date.now()
})

const fetchPost = album => dispatch => {
  dispatch(requestPosts(album))
  return fetch(`https://api.imjad.cn/qqfm/v1/?type=album&page_size=10&id=${album}&page=1`,{
  })
  .then(response => response.json())
  .then(json => {
    const data = json.data.albumInfoList;
    console.log(data)
    return dispatch(receivePosts(album, data))
  })
}

const shouldFetchPosts = (state, album) => {
  const posts = state.postsByAlbum[album]
  if(!posts) return true

  if(posts.isFetching) {
    return false
  }

  return posts.didInvalidate
}

export const fetchPostIfNeeded = (album) => (dispatch, getState) =>{
  if(shouldFetchPosts(getState(), album)) {
    return dispatch(fetchPost(album))
  }
}








