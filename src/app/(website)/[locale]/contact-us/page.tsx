import ContactForm from '@/components/Forms/ContactForm';
import PageHeader from '@/components/Global/PageHeader';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoIosPin } from 'react-icons/io';
import { LuMailOpen } from "react-icons/lu";

const contactInfo = [
  {
    icon: <IoIosPin className="size-8 text-primary-500" />,
    title: 'Address',
    content: (
      <>
        Rentmeesterstraat 71,<br /> 2288 GW Rijswijk
      </>
    ),
  },
  {
    icon: <FaPhoneAlt className="size-6 text-primary-500" />,
    title: 'Mobile No.',
    content: (
      <a
        href="tel:+31(0)708877530"
        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-primary-500 focus:outline-none focus:text-primary-500"
      >
        +31 (0)70 88 77 530
      </a>
    ),
  },
  {
    icon: <LuMailOpen className="size-6 text-primary-500" />,
    title: 'Email',
    content: (
      <a
        href="mailto:team@vitacare.nu"
        className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-primary-500 focus:outline-none focus:text-primary-500"
      >
        team@vitacare.nu
      </a>
    ),
  },
];


export default function ContactUs() {
  return (
    <>
      <PageHeader />

      <div className="container px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">Contact Us</h1>
          <p className="mt-1 text-gray-600">We&apos;d love to talk about how we can help you.</p>

          <div className="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
            <ContactForm />

            <div className="divide-y divide-gray-200">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-x-7 py-6">
                  {info.icon}
                  <div className="grow">
                    <h3 className="text-lg font-semibold text-gray-800">{info.title}</h3>
                    <div className="mt-1 text-sm font-medium text-gray-500">{info.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
