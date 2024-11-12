import React from 'react'

export default function CallToAction() {
    return (
        // bg-[url('/img/background/banner-1.jpg')]
        <section className="bg-primary-800 h-[450px] bg-no-repeat bg-cover">
            <div className="relative container mx-auto md:py-16 py-6">
                <div className="max-w-4xl space-y-3">
                    <p className="text-primary-500 text-lg">Need a Doctor for Check-up?</p>
                    <h3 className="block text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        Call for an emergency service when you have a need!
                    </h3>

                    <div className="mt-5 lg:mt-8 ">
                        <button className="bg-primary-500 rounded-full text-white px-6 py-3">
                            Make an Appointment
                        </button>
                    </div>

                </div>


                <img
                    className="hidden md:block w-[490px] h-auto absolute end-20 top-0"
                    src="/img/images/cta.png"
                    alt="Hero Image" />
            </div>
        </section>
    )
}
