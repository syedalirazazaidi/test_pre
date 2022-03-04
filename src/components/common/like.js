import React from "react";

const Like = ({ liked, likeed, id }) => {
  const [lik, setLik] = React.useState(liked);
  let classes = "fa fa-heart";
  if (!lik) classes += "-o";
  console.log(lik, "<<<<");
  const newlike = () => {
    setLik((pre) => !pre);
  };
  return (
    <i
      className={classes}
      style={{ cursor: "pointer" }}
      aria-hidden="true"
      onClick={newlike}
      // onClick={() => likeed(id)}
    ></i>
  );
};

export default Like;
