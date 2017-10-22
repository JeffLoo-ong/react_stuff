import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash';

const API_KEY = config.YT_API_KEY;
const SEARCH_DELAY = 300; // In milliseconds

class App extends Component {
	constructor(props){
		super(props);

		this.state = { 
			videos:[],
			selectedVideo: null 
		};
		this.videoSearch('surfboards');
	}

	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			// Equivalent to the bottom
			// this.setState({ videos: videos })
			this.setState({ 
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}

	render(){
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, SEARCH_DELAY);
		return (
			<div>
				<SearchBar onSearchTermChange= {videoSearch} />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));