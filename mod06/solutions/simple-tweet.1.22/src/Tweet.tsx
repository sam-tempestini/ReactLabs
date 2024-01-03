import React from 'react';
import Author from './Author';
import Avatar from './Avatar';
import Message from './Message';
import Time from './Time';
import LikeButton from './LikeButton';
import ReplyButton from './ReplyButton';
import RetweetButton from './RetweetButton';
import MoreOptionsButton from './MoreOptionsButton';


export default function Tweet({tweet}) {
    return (
      <div className="tweet">
        <Avatar id={tweet.id} gender={tweet.gender} />
        <div className="content">
          <Author author={tweet.author}/>
          <Time time={tweet.timestamp}/>
          <Message text={tweet.message}/>
          <div className="buttons">
            <ReplyButton/>
            <RetweetButton count={tweet.retweets}/>
            <LikeButton count={tweet.likes}/>
            <MoreOptionsButton/>
          </div>
        </div>
      </div>
    );
}
  
Tweet.defaultProps = {
    tweet : {}
};
