import React from 'react';

class LifecycleDemo extends React.Component {
    // Initialize state first
    // (happens before constructor)
    state = {counter: 0};
  
    // The first method called after initializing state
    constructor(props) {
      super(props);
      console.log('[constructor called]');
      console.log('\tState contains:', this.state);
    }
  
    // Called after initial render is done
    componentDidMount() {
      console.log('[componentDidMount called]');
      document.title = `Button clicked ${this.state.counter} times`;
    }
  
    // ** Don't for get to make this `static`! **
    // Called before initial render, and any time new props
    // are received.
    static getDerivedStateFromProps(props, state) {
      console.log('[getDerivedStateFromProps called]');
      console.log('\tProps:', props);
      console.log('\tState:', state);
      return null;
    }
  
    // Called before each render. Return false to prevent rendering.
    shouldComponentUpdate(nextProps, nextState) {
      console.log('[shouldComponentUpdate called]', 'Deciding whether to update component');
      return true;
    }
  
    // Called after render() but before updating the DOM
    // A good time to make calculations based on old DOM nodes.
    // The value returned here is passed into componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('[getSnapshotBeforeUpdate called]', 'About to update.component');
      return `Time is ${Date.now()}`;
    }
  
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[componentDidUpdate called]', '\tComponent Updated.');
    console.log('\tsnapshot:', snapshot);
    document.title = `Button clicked ${this.state.counter} times`;
  }
  
    componentWillUnmount() {
      console.log('[componentWillUnmount called]');
    }
  
    handleClick = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };
  
    throwErrorNextRender = () => {
      // Set a flag to cause an error on the next render
      // This will cause componentDidCatch to run in the parent
      this.setState({
        causedError: true
      });
    };
  
    render() {
      console.log('[render called]');
      console.log('\tState contains:', this.state);
      if(this.state.causedError) {
        throw new Error('oh no!!');
      }
  
    return (
        <div>
            <button type="button"
                    className="btn btn-primary mx-2"
                    onClick={this.handleClick}>
                {`Button clicked ${this.state.counter} times`}
            </button>
            <button type="button"
                    className="btn btn-danger mx-2"
                    onClick={this.throwErrorNextRender}>
                Throw an error
            </button>
        </div>
    );
    }
}

export default LifecycleDemo;
