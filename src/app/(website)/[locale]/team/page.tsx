import PageHeader from '@/components/Global/PageHeader'
import CallToAction from '@/components/HomePage/CallToAction'
import FAQ from '@/components/HomePage/FAQ'
import OurTeam from '@/components/HomePage/OurTeam'
import React from 'react'

export default function Team() {
    return (
        <>
            <PageHeader />
            <section>
                <div className="container lg:py-16 md:py-12 py-9 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="md:col-span-3">
                            <h3 className="text-2xl font-bold md:text-4xl md:leading-tight pb-4">Vita Care Team</h3>
                            <p className="font-normal text-base leading-6 text-gray-600 ">Our Vita Care team consists of healthcare professionals who all have a big heart for healthcare. These healthcare professionals are operating room assistants, anesthesia staff, nurses, recovery nurses and ER nurses. They are experts, give 100% and love their profession immensely.</p>
                            <ul className="space-y-2">
                                <li><span className="font-semibold">Expertise</span> Binnen ons team zijn er professionals die vakspecifieke kennis en ervaring hebben op het niveau van de chirurg. Mede door deze professionals kunnen wij altijd begeleiding bieden op de werkvloer. Bijvoorbeeld op het gebied van orthopedie, thoraxchirurgie en robotchirurgie.</li>
                                <li>
                                <span className="font-semibold">Want to join our team:</span> Vita Care offers multiple work formats. If you are an independent healthcare professional and meet the quality requirements, you will immediately benefit from interesting assignments. If you prefer secondment, we will be happy to help you shape your career.
                                </li>
                            </ul>
                        </div>
                        <div className="md:col-span-2">
                            <img className="w-full h-full" src="https://i.ibb.co/FhgPJt8/Rectangle-116.png" alt="A group of People" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center pt-12">
                        <h3 className="text-2xl font-bold md:text-4xl md:leading-tight pb-4">Dedicated Team</h3>
                        <p className="font-normal text-base leading-6 text-gray-600 ">It is a long established fact that a reader Onder een dedicated team verstaan wij een operatieteam dat bestaat uit teamleden die specialistische kennis hebben van een specifieke ingreep of ingrepen van een specifiek specialisme.</p>
                        <p className="font-normal text-base leading-6 text-gray-600 "> Belangrijke kenmerken voor een dedicated team is het hebben van een gedegen kennisniveau, hoge efficiency met hoge kwaliteitseisen en belang van het team boven het individu.
                        </p>
                        <p className="font-normal text-base leading-6 text-gray-600 ">Als je eenmaal onderdeel bent  van een dedicated team heeft dat vele voordelen. Jouw unieke kennis en vaardigheden blijven niet onopgemerkt bij de medisch specialisten. Jouw inzet heeft direct een positieve invloed op de organisatie. Een unieke manier van samenwerken op langere termijn.</p>
                    </div>
                </div>
            </section>
            <OurTeam />
            <CallToAction />
            <FAQ />
        </>
    )
}
