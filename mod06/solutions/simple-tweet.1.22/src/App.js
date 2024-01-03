import React from 'react';
import Tweet from './Tweet';

import './App.css';

function App() {
  var testTweet = {
    message: "React is pretty cool.",
    id: '13',
    gender: 'female',
    author: {
      handle: "nerdygirl",
      firstname: 'Margaret'
    },
    likes: 6,
    retweets: 8,
    timestamp: "2019-07-07 11:35:27"
  };

  return (
    <div className="container">
      <Tweet tweet={testTweet} />
      
    </div>
  );
}



export default App;
