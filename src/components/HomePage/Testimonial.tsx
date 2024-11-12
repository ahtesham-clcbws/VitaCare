"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FaStar } from 'react-icons/fa';

const testimonials = [
  {
    name: "Robert Fox",
    profession: "Trainer",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 3,
    image: "/img/images/thumb-6.png",
  },
  {
    name: "Robert Fox",
    profession: "Trainer",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5,
    image: "/img/images/thumb-6.png",
  },
  {
    name: "Robert Fox",
    profession: "Trainer",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 4.5,
    image: "/img/images/thumb-6.png",
  },
  {
    name: "Robert Fox",
    profession: "Trainer",
    review:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
    rating: 5,
    image: "/img/images/thumb-6.png",
  },

];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function TestimonialSection() {
  return (
    <section className="bg-gray-50">
      <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-16">

        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="md:col-span-3 flex justify-center items-center">

            <div className="relative border border-dashed p-32 border-gray-200 rounded-full">
              <div className="border border-dashed p-4 border-gray-200 rounded-full flex items-center justify-center ">
                <img
                  src="/img/images/thumb-6.png"
                  alt="Central Testimonial"
                  className="rounded-full"
                />
              </div>


              <img src="/img/images/thumb-6.png" alt="Client" className="rounded-full size-20 absolute -top-8 start-40" />
              <img src="/img/images/thumb-6.png" alt="Client" className="rounded-full size-20 absolute top-28 -end-7" />
              <img src="/img/images/thumb-6.png" alt="Client" className="rounded-full size-20 absolute -left-8 top-32" />
              <img src="/img/images/thumb-6.png" alt="Client" className="rounded-full size-20 absolute bottom-10 right-4 " />
              <img src="/img/images/thumb-6.png" alt="Client" className="rounded-full size-20 absolute left-10 bottom-4" />
            </div>
          </div>

          <div className="md:col-span-3">

            <div className="max-w-lg mb-10 lg:mb-14">
              <p className="text-primary-500 text-lg">Testimonials</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                What Our Clients Say About Us
              </h3>
            </div>

            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              arrows={false}
              autoPlaySpeed={2000}
              showDots={false}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md w-96">
                  <p className="text-gray-700 mb-4">{testimonial.review}</p>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-blue-600">{testimonial.profession}</p>
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        color={i < Math.floor(testimonial.rating) ? "#fbbf24" : "#d1d5db"}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

        </div>

      </div>
    </section>
  );
}
