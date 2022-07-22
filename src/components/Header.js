import React from "react";

const Header = ({ title, showAdd, isShown }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <button onClick={showAdd}>{!isShown ? "Add" : "Close"}</button>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
