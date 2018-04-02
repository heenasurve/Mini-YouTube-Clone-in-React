/**
 * Created by Heena on 2/1/2018.
 */
import React from 'react';

//props here refers to info about each video
const VideoListItem = ({video,onVideoSelect}) => { //ES6 syntax to say that the props

    const imageUrl = video.snippet.thumbnails.default.url;
    return (   //top level components state received here - selectedVideo
      <li onClick = {() => onVideoSelect(video)}className="list-group-item">
          <div className="video-list media">
              <div className="media-left">
                  <img className="media-object" src={imageUrl} />
              </div>
              <div className="media-body">
                  <div className="media-heading">{video.snippet.title}</div>
              </div>
          </div>
      </li>
    );
};

export default VideoListItem;