import React from "react";

function CommonLayout(props) {
  return (
    <div>
      {props.children}
      <footer>
        <h2>Footer</h2>
      </footer>
    </div>
  );
}

export default CommonLayout;
