import Image from "next/image";
import React from "react";
import AuthorizedLayout from "../../layout/authorized-layout";
import CommonLayout from "../../layout/common";
import Scenry from "../../assets/images/211836.jpeg";

function Blogs(props) {
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <CommonLayout>
      <AuthorizedLayout>
        <div>
          <h2>Blogs</h2>
          {images.map((itm, ind) => {
            return <img src='/211836.jpeg'/>;
            // return <Image src={Scenry} />;
            // return (
            //   <Image
            //     src="https://i.ibb.co/RjLTJvN/211836.jpg"
            //     alt="https://i.ibb.co/RjLTJvN/211836.jpg"
            //     width={600}
            //     height={450}
            //     loading="eager"
            //     layout="fixed"
            //   />
            // );
          })}
        </div>
      </AuthorizedLayout>
    </CommonLayout>
  );
}

export default Blogs;
