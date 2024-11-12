import PageHeader from '@/components/Global/PageHeader'
import React from 'react'

const ContentSection = ({ title, imageUrl, imageAlt, children }: any) => (
  <div className="">
    <h3 className="text-3xl lg:text-4xl text-white uppercase font-bold mt-3 mb-4 outline-indigo-900 font-outline-2">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6 pb-6">
      <div className="col-span-2 flex items-center">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="rounded-md"
          width={500}
          height={700} />
      </div>
      <div className="flex items-center col-span-3">
        {children}
      </div>
    </div>
  </div>
);

const InitiativeCard = ({ imageUrl, imageAlt, title, description }: any) => (
  <a className="group dark:focus:outline-none dark:focus:ring-1" href="#">
    <div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
      <img
        className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
        src={imageUrl}
        alt={imageAlt}
        height={500}
        width={700}
      />
    </div>
    <div className="mt-7">
      <h3 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 ">{title}</h3>
      <p className="mt-3 text-gray-800 ">{description}</p>
    </div>
  </a>
);

export default function Sustainability() {
  return (
    <>
      <PageHeader />
      <section>
        <div className="container py-10 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-6 pb-6">
            <div className="col-span-2">
              <img
                src="/img/images/41696.jpg"
                alt="Healthcare Support"
                className="rounded-md"
                width={500}
                height={700} />
            </div>
            <div className="flex items-center col-span-3">
              <div className="text-justify space-y-3">
                <h3 className="text-2xl font-bold md:text-4xl md:leading-tight pb-4">Our impact on the world</h3>
                <p>
                  Vita Care is dedicated to supporting healthcare facilities by providing highly qualified medical staff.
                  Our goal is to bridge the gap in medical staffing, ensuring healthcare providers have the reliable
                  professionals they need to deliver quality care.
                </p>
                <p>
                  We believe that every healthcare professional has the potential to make a difference in patient lives.
                  Through our commitment to training, mentorship, and continuous support, we empower our staff to excel
                  and fulfill their mission of care.
                </p>
                <p>
                  Our initiatives include professional development, healthcare mentorship programs, and tailored support
                  for each professional to meet the diverse needs of healthcare facilities and ensure the best care for
                  patients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <ContentSection
            title="Our Story"
            imageUrl="/img/images/67319.jpg"
            imageAlt="Healthcare Staffing"
          >

            <div>
              <h3 className="text-2xl font-bold md:text-4xl md:leading-tight pb-4">Our Story</h3>

              <p className="text-justify">
                Vita Care began with a vision to support healthcare providers by ensuring access to qualified and compassionate
                medical professionals. Our team is dedicated to fulfilling the staffing needs of hospitals, clinics, and
                other healthcare facilities, providing skilled staff who are committed to patient care and clinical excellence.
              </p>
            </div>
          </ContentSection>

          <ContentSection
            title="CEO's Vision"
            imageUrl="/img/images/41696.jpg"
            imageAlt="CEO Vision"
          >
            <div>
              <h3 className="text-2xl font-bold md:text-4xl md:leading-tight pb-4">CEO&apos;s Vision</h3>
              <p className="text-justify">
                At Vita Care, we believe that Corporate Social Responsibility is about more than just business—it&apos;s a duty to
                our communities. Our mission is to empower healthcare professionals, support patient-centered care, and
                contribute positively to the communities we serve. We are driven to create sustainable healthcare solutions
                and foster a work environment where each medical professional feels valued and supported.
              </p>
            </div>
          </ContentSection>
        </div>
      </section>

      <section>
        <div className="container mx-auto pb-6">
          <div className="">
          <h3 className="text-2xl font-bold md:text-4xl md:leading-tight pb-4">Our Initiatives</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InitiativeCard
              imageUrl="/img/images/41696.jpg"
              imageAlt="Professional Training"
              title="Professional Training"
              description="We provide advanced training programs for nurses, doctors, and allied health professionals, ensuring they are equipped with the latest skills and knowledge."
            />

            <InitiativeCard
              imageUrl="/img/images/67319.jpg"
              imageAlt="Healthcare Mentorship"
              title="Healthcare Mentorship"
              description="Our mentorship programs guide new healthcare professionals, helping them develop their careers and foster a passion for patient care."
            />

            <InitiativeCard
              imageUrl="/img/images/41696.jpg"
              imageAlt="Community Outreach"
              title="Community Outreach"
              description="We actively support local communities with health awareness programs, free clinics, and wellness initiatives to improve public health."
            />
          </div>
        </div>
      </section>
    </>
  )
}
