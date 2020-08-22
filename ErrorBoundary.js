import React from 'react';

class ErrorBoundary extends React.Component {
  componentDidCatch(error, info) {
    this.props.onError();
  }

  render() {
    return this.props.children;
  }
}

export default ErrorBoundary;