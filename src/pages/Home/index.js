import React from "react";
import { connect } from "dva";
function index(props) {
  return <div>{props.text}</div>;
}
export default connect(({ home }) => ({ ...home }))(index);
