import React from "react";
import AuthorizedLayout from "../../layout/authorized-layout";
import CommonLayout from "../../layout/common";

function Blogs(props) {
  return (
    <CommonLayout>
      <AuthorizedLayout>
        <div>
          <h2>Blogs</h2>
        </div>
      </AuthorizedLayout>
    </CommonLayout>
  );
}

export default Blogs;
