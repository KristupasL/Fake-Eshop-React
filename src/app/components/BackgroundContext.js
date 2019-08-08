import React from "react";

const BackgroundContext = React.createContext("blue");

function withBackgroundColor(Component) {
  function WrappedComponent(props) {
    return (
      <BackgroundContext.Consumer>
        {context => <Component {...props} background={context} />}
      </BackgroundContext.Consumer>
    );
  }

  return WrappedComponent;
}

export default BackgroundContext;
export { withBackgroundColor };
