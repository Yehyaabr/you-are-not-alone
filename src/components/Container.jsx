import React from "react";

const Container = (props) => {
  return <div className="container-fluid p-0 m-0">{props.children}</div>;
};

export default Container;
