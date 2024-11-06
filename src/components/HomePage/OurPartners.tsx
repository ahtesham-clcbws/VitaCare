import React from 'react';

export default function OurPartners() {
    const partners = [
        { src: '/img/LinkedIn-Logo.wine.png', alt: 'LinkedIn' },
        { src: '/img/LinkedIn-Logo.wine.png', alt: 'LinkedIn' },
        { src: '/img/LinkedIn-Logo.wine.png', alt: 'LinkedIn' },
        { src: '/img/LinkedIn-Logo.wine.png', alt: 'LinkedIn' },
        { src: '/img/LinkedIn-Logo.wine.png', alt: 'LinkedIn' },
    ];

    return (
        <section >
            {/* className="bg-[url('/img/background/bg-1.jpg')] bg-no-repeat bg-cover" */}
            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="sm:w-1/2 xl:w-1/3 mx-auto text-center mb-6 md:mb-12">
                    <h3 className="text-xl font-semibold md:text-2xl md:leading-tight text-gray-800">
                        Our Partners
                    </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-3 lg:gap-6">
                    {partners.map((partner, index) => (
                        <div key={index} className="p-4 md:p-5 flex justify-center bg-gray-100 rounded-lg">
                            <img 
                            className="w-auto h-20 object-cover" 
                            src={partner.src} 
                            alt={partner.alt}
                             />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
