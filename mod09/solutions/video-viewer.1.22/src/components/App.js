import React from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos:[], selectedVideo: null}
  }
  componentDidMount() {
    this.handleSearchSubmit('bee gees');
  }
  handleSearchSubmit = async (searchTerm) => {
    
    const response = await youtube.get('/search', {
                            params: {q: searchTerm}
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]});
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }
  render() {
    return <div>
      <SearchBar handleSubmit={this.handleSearchSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={this.state.selectedVideo} />
          </div>            
          <div className="five wide column">
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
          </div>
          
        </div>
      </div>
    </div>
  }
}

export default App;
