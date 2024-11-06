import HeroSection from '@/components/HomePage/HeroSection';
import React from 'react';
import { Link } from '../../i18n/routing';
import { getTranslations } from 'next-intl/server';
import Services from '@/components/HomePage/Services';
import AboutUs from '@/components/HomePage/AboutUs';
import OurPartners from '@/components/HomePage/OurPartners';
import WhyChoose from '@/components/HomePage/WhyChoose';
import FeaturesSection from '@/components/HomePage/FeaturesSection';
import OurTeam from '@/components/HomePage/OurTeam';
import CallToAction from '@/components/HomePage/CallToAction';
import BlogSection from '@/components/HomePage/BlogSection';
import FAQ from '@/components/HomePage/FAQ';
import Testimonial from '@/components/HomePage/Testimonial';

export default async function Homepage() {

    const lang = await getTranslations('HomePage');

    return (
        <>
            <div className='hidden'>
                <h1>{lang('title')}</h1>
                <Link href="/about">{lang('about')}</Link>
            </div>
            <HeroSection />
            <FeaturesSection />
            <AboutUs />
            <OurPartners />
            <Services />
            <WhyChoose />
            <OurTeam />
            <CallToAction />
            <FAQ />
            <Testimonial />
            <BlogSection />
        </>
    )
}
