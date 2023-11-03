import React, { Component } from "react";
import error from './Assets/Images/404error.png'
class ErrorBoundary extends Component {
  // Constructor for initializing Variables etc in a state
  // Just similar to initial line of useState if you are familiar
  // with Functional Components
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  // This method is called if any error is encountered
  componentDidCatch(error, errorInfo) {
    // Catch errors in any components below and
    // re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    
    // You can also log error messages to an error
    // reporting service here
    console.log("ErrorBoundary  componentDidCatch  error:", errorInfo);
  }
  render() {
    if (this.state.errorInfo) {
  
        // Error path
        return (
          <div className="error_show">
            {/* <h2>Oops! Something went wrong.</h2> */}
            <img src={error} alt="" />
          </div>
        );
      }
      // Normally, just render children, i.e. in 
      // case no error is Found
      return this.props.children;
    }
  }

export default ErrorBoundary;
