import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error boundary => ", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <p>Something went Wrong !</p>
          <p>
            Try Refreshing the site again. If that doesn't work, you can inform
            us @ <code>collegesaathi-india@gmail.com</code>{" "}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
