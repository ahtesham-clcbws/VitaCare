import React from 'react';
import { FiHome, FiUsers } from 'react-icons/fi'; // Import the icons you want to use

const features = [
    {
        icon: <FiHome size={24} className="text-gray-800" />,
        title: 'High quality Co-Living spaces',
        description: 'Our fully furnished spaces are designed and purpose-built with Co-Living in mind.',
    },
    {
        icon: <FiUsers size={24} className="text-gray-800" />,
        title: 'Fostering vibrant communities',
        description: 'Our passion is bringing people together. Beyond creating beautiful spaces.',
    },
    {
        icon: <FiHome size={24} className="text-gray-800" />,
        title: 'High quality Co-Living spaces',
        description: 'Our fully furnished spaces are designed and purpose-built with Co-Living in mind.',
    },
    {
        icon: <FiUsers size={24} className="text-gray-800" />,
        title: 'Fostering vibrant communities',
        description: 'Our passion is bringing people together. Beyond creating beautiful spaces.',
    },
];

export default function WhyChoose() {
    
    return (
        <section className="flex">
            <div className="bg-[url('/img/background/chooseus-bg-2.jpg')] bg-cover bg-no-repeat w-4/12"></div>
            <div className="bg-gray-200 w-8/12 flex justify-start">
                <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                    <div className="max-w-2xl mx-auto">
                        <div className="grid gap-12">
                            <div>
                                <p className="text-primary-500 text-lg">Why Choose Us</p>
                                <h3 className="text-3xl text-gray-800 font-bold lg:text-4xl">
                                    Choose The Best For Your Health
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 gap-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="space-y-6 lg:space-y-10">
                                        <div className="flex gap-x-5 sm:gap-x-8">
                                            <div className="shrink-0 mt-2">{feature.icon}</div>
                                            <div className="grow">
                                                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                                                    {feature.title}
                                                </h3>
                                                <p className="mt-1 text-gray-600">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
