import React from "react";

function Product(props) {
  return (
    <div>
      {console.log(props.data)}
      <div class="min-h-screen bg-gray-200 flex justify-center items-center">
        <div class="max-w-sm bg-white border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-lg">
          <div id="header" class="flex items-center mb-4">
            <img alt="avatar" class="w-20 rounded-full border-2 border-gray-300" src="https://picsum.photos/seed/picsum/200" />
            <div id="header-text" class="leading-5 ml-6 sm">
              <h4 id="name" class="text-xl font-semibold">John Doe</h4>
              <h5 id="job" class="font-semibold text-blue-600">Designer</h5>
            </div>
          </div>
          <div id="quote">
            <q class="italic text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</q>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params, res }) {
  try {
    const { id } = params;
    const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const data = await result.json();
    return {
      props: { data }
    };
  } catch {
    res.statusCode = 404;
    return {
      props: {}
    };
  }
}

export default Product;
