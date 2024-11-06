"use client"
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const slides = [
    {
        id: 1,
        title: "Build Better Products",
        description: "Introducing a new way for your brand to reach the creative community.",
        buttonLabel: "Request demo",
        buttonLink: "#",
        image: "/img/images/banner-img-2.png"
    },
    {
        id: 2,
        title: "Innovate Your Workflow",
        description: "Streamline your process with tools designed for creative teams.",
        buttonLabel: "Get Started",
        buttonLink: "#",
        image: "/img/images/banner-img-2.png"
    },
    {
        id: 3,
        title: "Expand Your Audience",
        description: "Connect with more people and grow your brand.",
        buttonLabel: "Learn More",
        buttonLink: "#",
        image: "/img/images/banner-img-2.png"
    }
];

export default function HeroSection() {
    return (

        <section className="relative bg-[url('/img/background/banner-1.jpg')] lg:max-h-screen bg-no-repeat bg-cover">
            <div className="absolute inset-0 bg-white opacity-85" />
            <Carousel
                responsive={responsive}
                removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
                showDots={false}
                autoPlay={true}
                autoPlaySpeed={5000}
                infinite={true}
            >
                {slides.map(slide => (

                    <div key={slide.id} className="container mx-auto px-4 pt-16 md:pt-24 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center z-50">
                            <div className="lg:col-span-3">
                                <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">{slide.title}</h1>
                                <p className="mt-3 text-lg text-gray-800">{slide.description}</p>

                                <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                    <a
                                        className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                        href={slide.buttonLink}
                                    >
                                        {slide.buttonLabel}
                                    </a>
                                </div>
                            </div>
                            <div className="hidden md:flex lg:col-span-2 ">
                                <img
                                    className="h-[550px] w-auto"
                                    src={slide.image}
                                    alt="Hero Image"
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}
