import React from 'react';


const teamMembers = [
    {
        name: "David Forren",
        role: "Founder / CEO",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Amil Evara",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Ebele Egbuna",
        role: "Support Consultant",
        image: "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Maria Powers",
        role: "Director of Sales",
        image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Delia Pawelke",
        role: "Front-end Developer",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Tom Lowry",
        role: "UI/UX Designer",
        image: "https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Louise Donadieu",
        role: "Support Consultant",
        image: "https://images.unsplash.com/photo-1579017331263-ef82f0bbc748?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
    {
        name: "Jeff Fisher",
        role: "Project Manager",
        image: "https://images.unsplash.com/photo-1514222709107-a180c68d72b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
    },
];

export default function OurTeam() {

    return (
        <section >
            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                <p className="text-primary-500 text-lg">Our Team</p>
                    <h3 className="text-2xl font-bold md:text-4xl md:leading-tight">
                        Meet our experienced doctors for the best treatment
                    </h3>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="text-center border border-gray-50 shadow-xl p-3 rounded-2xl">
                            <img
                                className="rounded-xl  mx-auto"
                                src={member.image}
                                alt={`${member.name} Avatar`}
                            />
                            <div className="my-4 sm:my-6">
                                <h3 className="text-sm font-semibold text-gray-800 sm:text-base lg:text-xl">
                                    {member.name}
                                </h3>
                                <p className="text-xs text-gray-600 sm:text-sm lg:text-base">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
