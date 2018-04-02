/**
 * Created by Heena on 2/1/2018.
 */
import React from 'react';
import VideoListItem from './video_list_item';

//functional component since we don't have any state
//props is the video list passed from the parent component
const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return (
            <VideoListItem  //further passing down the parents state to the child component
                onVideoSelect = {props.onVideoSelect}
                key={video.etag}
                video={video}
            />
        );
    });
    //react recognizes that videoItems is an array
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;