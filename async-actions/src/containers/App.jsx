import styles from './App.module.css';
import React from 'react';
import { connect } from 'react-redux';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import PropTypes from 'prop-types';
import { fetchPostIfNeeded , selectAlbum} from '../actions';

class App extends React.Component {

  static propTypes = {
    selectedAlbum:  PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }),
    posts: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const { dispatch, selectedAlbum } = this.props
    dispatch(fetchPostIfNeeded(selectedAlbum))
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedAlbum !== this.props.selectedAlbum) {
      const { dispatch, selectedAlbum } = this.props
      dispatch(fetchPostIfNeeded(selectedAlbum))
    }
  }

  handleChange = nextAlbumId => {
    const selectedAlbum = this.allAlbumList.find(album => album.value === Number(nextAlbumId))
    this.props.dispatch(selectAlbum(selectedAlbum))
  }

  allAlbumList = [
    { label: '全部专辑', value: 4 },
    { label: '郭德纲', value: 38963 },
    { label: '单田芳', value: 38965 },
    { label: '评书大全', value: 38969 },
    { label: '相声新星', value: 39109 },
    { label: '戏曲名剧', value: 39133 },
  ]

  render () {
    const { isLoading, posts, selectedAlbum } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div className={styles.page}>
        <Picker currentAlbum={selectedAlbum}
          onChange={this.handleChange}
          options={this.allAlbumList}/>
        { isEmpty ? 
          (isLoading ? <h2>加载中...</h2>: <h2>暂无数据</h2>) 
          : <div> <Posts posts={posts}></Posts> </div>
        }
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  const { selectedAlbum, postsByAlbum } = state
  const {
    isLoading,
    lastUpdated,
    items: posts
  } = postsByAlbum[selectedAlbum.value] || {
    isLoading: true,
    items: []
  }

  return {
    selectedAlbum,
    posts,
    isLoading,
    lastUpdated
  }
}


export default connect(mapStateToProps)(App);
