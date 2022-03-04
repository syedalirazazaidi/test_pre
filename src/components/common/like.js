import React from "react";

const Like = ({ liked, likeed, id, handleClick }) => {
  // const [lik, setLik] = React.useState(liked);
  let classes = "fa fa-heart";
  if (!liked) classes += "-o";
  // --------STATE CHANGE LOCALLY
  // const newlike = () => {
  //   setLik((pre) => !pre);
  // };
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      // onClick={newlike}
      onClick={() => handleClick(id)}
    ></i>
  );
};

export default Like;
