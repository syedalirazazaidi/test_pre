import React from "react";

const Like = ({ liked, likeed, id }) => {
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";

  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={() => likeed(id)}
    ></i>
  );
};

export default Like;
