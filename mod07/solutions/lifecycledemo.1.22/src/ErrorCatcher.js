import React from 'react';

class ErrorCatcher extends React.Component {
    state = { 
      hasError: false,
      error: null 
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    } 
    componentDidCatch(error, info) {
      console.log('[componentDidCatch]', error);
      this.setState({ error: info.componentStack });
    }
  
    render() {
      if(this.state.error) {
        return (
          <div className="alert alert-danger">
            An error occurred: {this.state.error}
          </div>
        )
      }
  
      return this.props.children;
    }
}

export default ErrorCatcher;