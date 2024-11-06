import React from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { FaChevronUp } from "react-icons/fa6";

const faqData = [
    {
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase, we'll refund you in full."
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support via email at support@example.com or call our helpline."
    },
    {
        question: "How can I contact support?",
        answer: "You can contact support via email at support@example.com or call our helpline."
    },
    {
        question: "What is your refund policy?",
        answer: "If you're unhappy with your purchase, we'll refund you in full."
    },
];

export default function FAQ() {
    return (
        <section >
            {/* className="bg-[url('/img/background/bg-1.jpg')] bg-no-repeat bg-cover" */}
            <div className="container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 text-center">

                <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <p className="text-primary-500 text-lg">FAQ</p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Do You Have Any Medical Questions?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-4">
                    <div className="md:col-span-2 hidden md:flex justify-end">
                        <img
                            src="/img/images/faq-1.png"
                            alt="Doctor"
                            className="h-[450px]"
                        />
                    </div>

                    <div className="md:col-span-3 justify-center">
                        {faqData.map((faq, index) => (
                            <Disclosure key={index} as="div" className="bg-white border border-gray-50 rounded-xl shadow-lg p-4 mb-4" defaultOpen={true}>
                                <DisclosureButton className="group flex w-full items-center justify-between">
                                    <span className="text-sm/6 font-medium text-gray-800 ">
                                        {faq.question}
                                    </span>
                                    <FaChevronUp className="size-5 fill-black group-data-[open]:rotate-180" />
                                </DisclosureButton>
                                <DisclosurePanel className="mt-2 text-sm/5 text-gray-500">
                                    {faq.answer}
                                </DisclosurePanel>
                            </Disclosure>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
}
