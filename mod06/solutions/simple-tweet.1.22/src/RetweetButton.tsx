import React from 'react';
  
function getCount(count) {
    if(count > 0) {
      return (
        <span className="retweet-count">
          {count}
        </span>
      );
    } else {
      return null;
    }
}

export default function RetweetButton({count}){
    return (
        <span className="retweet-button">
            <i className="fa fa-retweet"/>
            {getCount(count)}
        </span>
    )
};


RetweetButton.defaultProps = {
    count: 1
}