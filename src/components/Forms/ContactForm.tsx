import React from 'react';

export default function ContactForm() {
    const formFields = [
        {
            id: 'firstname',
            type: 'text',
            placeholder: 'First Name'
        },
        {
            id: 'lastname',
            type: 'text',
            placeholder: 'Last Name'
        },
        {
            id: 'email',
            type: 'email',
            placeholder: 'Email',
            autoComplete: 'email'
        },
        {
            id: 'phone',
            type: 'text',
            placeholder: 'Phone Number',
            autoComplete: 'tel'
        },
        {
            id: 'details',
            type: 'textarea',
            placeholder: 'Details',
            rows: 4
        },
    ];

    return (
        <div className="border rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="mb-8 text-xl font-semibold text-gray-800">Fill in the form</h3>
            <form>
                <div className="grid grid-cols-2 gap-4">

                    {formFields.map((field) => (
                        <div key={field.id} className={`${field.id === 'firstname' || field.id === 'lastname' ? 'md:col-span-1' : 'col-span-full'}`}>
                            <label htmlFor={field.id} className="sr-only">{field.placeholder}</label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    id={field.id}
                                    name={field.id}
                                    rows={field.rows}
                                    className="py-3 px-4 block w-full border border-gray-200 rounded-2xl text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder={field.placeholder}
                                />
                            ) : (
                                <input
                                    type={field.type}
                                    id={field.id}
                                    name={field.id}
                                    autoComplete={field.autoComplete || undefined}
                                    className="py-3 px-4 block w-full border border-gray-200 rounded-2xl text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                                    placeholder={field.placeholder}
                                />
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-4 grid">
                    <button
                        type="submit"
                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-primary-500 text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-700 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        Send
                    </button>
                </div>

                <div className="mt-3 text-center">
                    <p className="text-sm text-gray-500">We&apos;ll get back to you in 1-2 business days.</p>
                </div>
            </form>
        </div>
    );
}
