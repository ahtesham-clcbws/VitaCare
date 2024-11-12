import PageHeader from '@/components/Global/PageHeader'
import React from 'react'

const partners = [
    {
        name: 'UMC Utrecht',
        description: 'UMC Utrecht is a leading hospital in the Netherlands known for its expertise in various medical fields and its commitment to research and innovation.',
        image: '/img/images/umc-utrecht.webp',
    },
    {
        name: 'Amsterdam UMC',
        description: 'Amsterdam UMC is one of the largest academic medical centers in the Netherlands, providing high-quality healthcare, research, and education.',
        image: '/img/images/umc-utrecht.webp',
    },
    {
        name: 'Erasmus MC',
        description: 'Erasmus MC is a prominent hospital in Rotterdam, recognized for its focus on medical research and its world-class patient care.',
        image: '/img/images/umc-utrecht.webp',
    },
    {
        name: 'Maastricht UMC+',
        description: 'Maastricht UMC+ combines excellent healthcare services with strong research programs in a wide range of medical specialties.',
        image: '/img/images/umc-utrecht.webp',
    }
];


export default function OurPartners() {
    return (
        <>
            <PageHeader />
            <section>
                <div className="container py-10 lg:py-16">

                    <div className="max-w-3xl mx-auto space-y-8">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                                {/* Image Section */}
                                <div className="md:w-1/2">
                                    <img src={partner.image} alt={partner.name} className="w-full h-full object-cover" />
                                </div>
                                {/* Text Section */}
                                <div className="p-6 md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">{partner.name}</h3>
                                    <p className="text-gray-600">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}