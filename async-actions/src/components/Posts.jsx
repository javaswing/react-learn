import React from 'react';
import ProTypes from 'prop-types'
import styles from './Posts.module.scss'

const Posts = ({posts}) => (
  <ul className={styles.box}>
    {
      posts.map((post, i) => 
        <li className={styles.item} key={i}>
          <div className={styles.album}>
            <div className={styles.cover}>
              <a className={styles.a} href="/">
                <img className={styles.img} src={post.album.cover.urls[0].url} alt=""/>
                <div className={styles.play}>
                  <i className={styles.icon}></i>
                </div>
              </a>
            </div>
            <a href="/" className={styles.name}>
              {post.album.name}
            </a>
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