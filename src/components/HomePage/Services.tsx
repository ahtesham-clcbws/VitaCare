import React from 'react'


const services = [
    {
        title: 'Better is when everything works together',
        category: 'Product',
        image: 'https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
    },
    {
        title: 'What CFR really is about',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
    },
    {
        title: 'Should Product Owners think like entrepreneurs?',
        category: 'Business',
        image: 'https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
    },
    // {
    //     title: 'Announcing Front Strategies: Ready-to-use rules',
    //     category: 'Facilitate',
    //     image: 'https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80',
    // },
];


export default function Services() {
    return (
        <section className="bg-gradient-to-r from-primary-500  to-secondary-500">

            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

                <div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
                <p className="text-white text-lg">Services</p>
                    <h3 className="text-2xl text-white font-bold md:text-4xl md:leading-tight">Read our latest news</h3>
                    <p className="mt-1 text-gray-50">We&apos;ve helped some great companies brand, design and get to market.</p>
                </div>



                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 lg:mb-14">
                    {services.map((post, index) => (
                        <div key={index} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" >
                            <div className="aspect-[16/9] w-auto rounded-t-xl overflow-hidden">
                                <img
                                    className="size-full object-cover"
                                    src={post.image}
                                    alt="Blog Image"
                                />
                            </div>
                            <div className="p-4 md:p-5">
                                <p className="mt-2 text-xs uppercase text-gray-600">{post.category}</p>
                                <h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">{post.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

               
            </div>
        </section>

    )
}
