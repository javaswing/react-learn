import React from 'react';
import ProTypes from 'prop-types'

const Posts = ({posts}) => (
  <ul>
    {
      posts.map((post, i) => 
        <li key={i}>{post.album.name}</li>
      )
    }
  </ul>
)


Posts.proTypes = {
  posts: ProTypes.array.isRequired
}

export default Posts