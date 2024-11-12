import React from 'react';
import PageHeader from '@/components/Global/PageHeader';
import AboutSection from '@/components/HomePage/AboutUs';
import FAQ from '@/components/HomePage/FAQ';
import CallToAction from '@/components/HomePage/CallToAction';

export default function AboutUs() {
    return (
        <>
            <PageHeader />
            <AboutSection />
            <CallToAction />
            <FAQ />
        </>
    )
}
