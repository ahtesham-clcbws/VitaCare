import { Link } from '@/app/(website)/i18n/routing';
import Image from 'next/image';
import React from 'react';
import { FaHeartbeat } from 'react-icons/fa';
import { BiSolidShieldPlus } from "react-icons/bi";

export default function AboutSection() {
    return (
        <section>


            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-16 mx-auto">

                <div className="md:grid md:grid-cols-2 md:items-center md:gap-6 xl:gap-8">
                    <div className="relative flex items-center justify-end">
                        <Image
                            className="rounded-full rounded-bl-none justify-center"
                            src="/img/images/about.jpg"
                            alt="Features Image"
                            width={400}
                            height={400}
                        />
                        <div className="absolute -bottom-4 p-5 bg-primary-500 rounded-2xl ">
                            <FaHeartbeat className="size-14 text-white"/>
                        </div>
                        <div className="absolute left-0 lg:left-40 -top-4 p-5 bg-secondary-500 rounded-2xl ">
                            <BiSolidShieldPlus className="size-14 text-white"/>
                        </div>
                    </div>


                    <div className="mt-5 sm:mt-10 lg:mt-0">
                        <div className="space-y-6 sm:space-y-8">
                            <div className="space-y-2 md:space-y-4">
                                <div className="space-y-2 md:space-y-4 max-w-lg">
                                    <p className="text-primary-500 text-lg">About Us</p>
                                    <h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
                                        We tackle the challenges start-ups face
                                    </h2>
                                </div>
                                <p className="text-gray-500">
                                    Besides working with start-up enterprises as a partner for digitalization, we have built enterprise products for common pain points that we have encountered in various products and projects.
                                </p>
                            </div>

                            <ul className="space-y-2 sm:space-y-4">
                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm sm:text-base text-gray-500">
                                            <span className="font-bold">Easy & fast</span> designing
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm sm:text-base text-gray-500">
                                            Powerful <span className="font-bold">features</span>
                                        </span>
                                    </div>
                                </li>

                                <li className="flex gap-x-3">
                                    <span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
                                        <svg className="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                                    </span>
                                    <div className="grow">
                                        <span className="text-sm sm:text-base text-gray-500">
                                            User Experience Design
                                        </span>
                                    </div>
                                </li>
                            </ul>

                            <div className="mt-3">
                                <Link href="/contact-us" className="bg-primary-500 rounded-full text-white px-6 py-3">
                                    Discover More
                                </Link>
                            </div>

                        </div>
                    </div>

                </div>

            </div>


        </section>
    )
}
