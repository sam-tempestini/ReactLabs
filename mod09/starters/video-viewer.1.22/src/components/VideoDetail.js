import React from 'react'

const VideoDetail = () => {
    
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>
                    {video.snippet.description}
                </p>
            </div>
            
        </div>
    )
}

export default VideoDetail;