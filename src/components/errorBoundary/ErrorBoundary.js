import React, { Component } from "react";
import ERROR from '../../assets/images/error1.svg'
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
        <div className="w-screen h-screen flex flex-col items-center justify-center">
          <div className="w-64 lg:w-1/2">
            <img src={ERROR} alt="error" />
          </div>
          <p className="text-lg font-semibold mt-4">Something went Wrong !</p>
          <p className="text-center">
            Try Refreshing the site again. If that doesn't work, you can inform
            us @ <code className="bg-gray-600 p-1 rounded">collegesaathi-india@gmail.com</code>
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
