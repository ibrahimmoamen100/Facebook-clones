import React from "react";
import "./Error.css";
const Error = (props) => {
  console.log(props);
  let ErrorPage = props.match.params.error_page;
  return (
    <div className="error-page">
      <span>
        <div className="alert alert-danger custom-alert" role="alert">
          <i>Error</i> : This Page <strong>({ErrorPage})</strong> is under
          mecnically or not exist
        </div>
      </span>
    </div>
  );
};

export default Error;
