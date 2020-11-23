import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Picker from '../components/Picker';
import Posts from '../components/Posts';
import PropTypes from 'prop-types';
import { fetchPostIfNeeded , selectAlbum} from '../actions';

class App extends React.Component {

  static propTypes = {
    selectedAlbum: PropTypes.string.isRequired,
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

  handleChange = nextAlbum => {
    this.props.dispatch(selectAlbum(nextAlbum))
  }

  render () {
    const { isLoading, posts, selectedAlbum } = this.props;
    const isEmpty = posts.length === 0;
    return (
      <div>
        <Picker value={selectedAlbum}
          onChange={this.handleChange}
          options={
            [
               '38963', '38965'
            ]}/>
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
  } = postsByAlbum[selectedAlbum] || {
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
