import React from 'react';
import ProTypes from 'prop-types'
import styles from './Posts.module.css'

const Posts = ({posts}) => (
  <ul className={styles.box}>
    {
      posts.map((post, i) => 
        <li key={i}>
          <div className={styles.cover}>
            <img src={post.album.cover.urls[0].url}/>
          </div>
          <div className={styles.albumTitle}>
            {post.album.name}
          </div>
        </li>
      )
    }
  </ul>
)


Posts.proTypes = {
  posts: ProTypes.array.isRequired
}

export default Posts