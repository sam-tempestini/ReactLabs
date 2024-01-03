import React from 'react';
import ErrorCatcher from './ErrorCatcher';
import LifecycleDemo from './LifecycleDemo';

function App() {
  return (
    <div className="container p-2 my-5">
      <ErrorCatcher>
        <LifecycleDemo/>
      </ErrorCatcher>
    </div>
  );
}

export default App;