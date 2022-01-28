import React from 'react';

const Products = (props) => {
    return (
        <div>
            <h2>Products</h2>
            <div className='p-2 border flex row flex-wrap bg-gray-200 justify-center'>
                {props.data.map((itm, ind) => {
                    return (
                        <div class="bg-gray-200 flex p-2 justify-center items-center">
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
                    )
                })}
            </div>
        </div>
    );
}

export const getStaticProps = async () => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts`)
    const res = await response.json()

    return {
        props: {
            data: res
        },
    };
};


export default Products;