import { render } from "@testing-library/react";
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error) {
    this.state = { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1>Some Errror Occured</h1>
        </>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
