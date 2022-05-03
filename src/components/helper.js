import { Component } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import React from "react";

// export default (ChildComponent) => {
//   const navigate = useNavigate();
//   const params = useParams();

//   class ComposedComponent extends Component {
//     render() {
//       return <ChildComponent navigate={navigate} params={params} />;
//     }
//   }
//   return ComposedComponent;
// };

function withParams(Component) {
  return (props) => (
    <Component
      {...props}
      params={useParams()}
      navigate={useNavigate()}
      location={useLocation()}
    />
  );
}

export default withParams;
