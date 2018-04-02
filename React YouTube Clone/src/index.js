/**
 * Created by Heena on 1/31/2018.
 */
import _ from 'lodash';

import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import {getKey} from '../config.js';

//const API_KEY = 'AIzaSyDnOWu4bummrRH30Kx0wMdbKDQWk5Vk_2o';
const API_KEY = getKey();


/*Create a new React component - should produce some HTML */
/*
const App = () => {//const is an ES6 concept - final/constant value value
    return (
        <div>
           <SearchBar/>
        </div>
    ); // JSX gets converted to vanilla javascript by a transpiler to render HTML
};*/

//writing a class based main component to track state
class App extends Component{
    constructor(props){
        super(props);
        //state is blank initially
        this.state = {
            videos:[],
            selectedVideo: null
        };

        this.videoSearch('kalyn nicholson');
    }

    videoSearch(term){
        //show some videos right in the beginning
        //call the Search API to add some videos once rendered

        YTSearch({key:API_KEY, term:term},(videos) => {
            this.setState(
                {
                    videos:videos,
                    selectedVideo:videos[0]
                }
            );
        });
    }

    render(){
        //you start seeing new videos in the video list as soon as you type something in the search bar
        //lodash or _'s debounce method allows you to introduce a bit of a delay in the process
        //new search can be triggered once very 300ms
        const videoSearch = _.debounce(term => {this.videoSearch(term)},300);

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList          //starting calldown from this top level component to Video List
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}  //ES6 style - a function on VideoList component's props with param selectedVideo which sets the state of the parent component app
                    videos={this.state.videos}/>
            </div>
        )
    }
}

/* Take generated HTML and put it up on the DOM */

ReactDOM.render(<App />,document.querySelector('.container'));
