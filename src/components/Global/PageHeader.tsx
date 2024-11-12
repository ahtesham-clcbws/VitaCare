"use client";
import { Link, usePathname } from '@/app/(website)/i18n/routing';
import React from 'react';

export default function PageHeader() {
    const pathname = usePathname();


    const breadcrumb = pathname.split('/').filter(part => part).map((part, index, array) => {
        const href = '/' + array.slice(0, index + 1).join('/');
        return (
            <Link key={href} href={href} className="text-gray-800 hover:text-secondary-500 capitalize">
                {part.replace(/-/g, ' ')}
            </Link>
        );
    });

    return (
        <header
            className="relative bg-[url('/img/background/banner-1.jpg')] bg-no-repeat bg-cover w-full h-72 flex items-center justify-start" >
            <div className="absolute inset-0 bg-white opacity-80"></div>
            <div className="relative container z-10 text-start">
                <h1 className="text-4xl font-bold capitalize">
                {pathname === '/' ? '' : pathname.replace('/', '').replace(/-/g, ' ')}
                </h1>

              
                {pathname !== '/' && (
                    <nav className="mt-2 text-sm flex gap-2 items-center justify-start">
                        <Link href="/" className="text-gray-800 hover:text-secondary-500">Home</Link>
                        {breadcrumb.map((crumb, index) => (
                            <div key={index} >
                                <span className="font-bold ">{"> "}</span>
                                {crumb}
                            </div>
                        ))}
                    </nav>
                )}
            </div>
        </header>
    );
}
