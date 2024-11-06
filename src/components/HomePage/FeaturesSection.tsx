import React from 'react';
import { TfiUser } from "react-icons/tfi";
import { PiAmbulanceLight } from "react-icons/pi";
import { GiMedicalDrip } from "react-icons/gi";
import { GrUserPolice } from "react-icons/gr";


const cardData = [
    {
        title: 'Qualified Doctor',
        description: 'Lorem ipsum dolor sit amet ctetur adipiscing',
        icon: TfiUser,
    },
    {
        title: 'Emergency Help',
        description: 'Lorem ipsum dolor sit amet ctetur adipiscing',
        icon: PiAmbulanceLight,
    },
    {
        title: 'Modern Equipment',
        description: 'Lorem ipsum dolor sit amet ctetur adipiscing',
        icon: GiMedicalDrip,
    },
    {
        title: 'Friendly Staff',
        description: 'Lorem ipsum dolor sit amet ctetur adipiscing',
        icon: GrUserPolice,
    },
];

export default function FeaturesSection() {
    return (
        <section>
            <div className="container mx-auto py-16">
                <div className="">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6">
                        {cardData.map((card, index) => (
                            <div key={index} className="group border border-gray-50 drop-shadow-xl bg-white rounded-2xl text-start p-6">
                                <div className="flex justify-center items-center size-20 bg-secondary-200 group-hover:bg-primary-200 border border-gray-200 rounded-full">
                                    <card.icon className="size-8 text-secondary-700 group-hover:text-white" />
                                </div>
                                <div className="mt-5 space-y-3">
                                    <h3 className="text-xl font-semibold text-gray-800">{card.title}</h3>
                                    <p className="mt-1 text-sm text-gray-600">{card.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    )
}
