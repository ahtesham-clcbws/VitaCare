import { Link } from '@/app/(website)/i18n/routing';
import PageHeader from '@/components/Global/PageHeader';
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

// Demo Data
const blogPost = {
    title: 'Exploring the Future of Technology in Education',
    publishedAt: '2024-10-30',
    coverImage: {
        url: 'https://i.ibb.co/FhgPJt8/Rectangle-116.png',
    },
    content: {
        html: '<p>In recent years, technology has transformed the educational landscape. From interactive learning tools to virtual classrooms, the possibilities are endless.</p><p>In this article, we explore how technology is shaping the future of education and what it means for students and educators alike.</p><p>In recent years, technology has transformed the educational landscape. From interactive learning tools to virtual classrooms, the possibilities are endless.</p><p>In recent years, technology has transformed the educational landscape. From interactive learning tools to virtual classrooms, the possibilities are endless.</p><p>In recent years, technology has transformed the educational landscape. From interactive learning tools to virtual classrooms, the possibilities are endless.</p>',
    },
    tags: [
        { name: 'Technology' },
        { name: 'Education' },
        { name: 'Future' },
    ],
};

const formatDate = (dateString: any) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined);
};

export default function Blog() {
    return (
        <>
            <PageHeader />
            <section>
                <div className="container">
                    <Link href="/lifelong-learning" className=" mt-4 inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 hover:underline hover:text-blue-500">
                        <IoIosArrowBack />
                        Back to News And Articles
                    </Link>
                    <div className="max-w-3xl px-4 py-10 md:py-16 sm:px-6 lg:px-8 mx-auto">
                        <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                            <div className="">
                                <div className="space-y-2">


                                    <h3 className="text-3xl font-bold lg:text-5xl">{blogPost.title}</h3>

                                    <div className="flex items-center gap-x-5">
                                        <p className="text-xs sm:text-sm text-gray-800">{formatDate(blogPost.publishedAt)}</p>
                                    </div>

                                    <div className="text-center">
                                        <img
                                            className="w-full object-cover rounded-xl"
                                            src={blogPost.coverImage.url}
                                            alt={blogPost.title}
                                            height={500}
                                            width={500}
                                        />
                                    </div>

                                    <article
                                        className="space-y-2 mt-2 max-w-none text-lg text-gray-800"
                                        dangerouslySetInnerHTML={{ __html: blogPost.content.html }}
                                    />

                                    <div className="grid lg:flex lg:justify-between lg:items-center gap-y-5 lg:gap-y-0">
                                        <div>
                                            {blogPost.tags.map((tag, tIndex) => (
                                                <span key={tIndex} className="m-0.5 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200">
                                                    {tag.name}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex justify-end items-center gap-x-1.5">
                                            <div className="hs-tooltip inline-block">
                                                <button type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                                                    </svg>
                                                    1
                                                </button>
                                            </div>

                                            <div className="block h-3 border-e border-gray-300 mx-3"></div>

                                            <div className="hs-tooltip inline-block">
                                                <button type="button" className="hs-tooltip-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
                                                    </svg>
                                                    1
                                                </button>
                                            </div>

                                            <div className="block h-3 border-e border-gray-300 mx-3"></div>

                                            <div className="hs-dropdown relative inline-flex">
                                                <button type="button" id="blog-article-share-dropdown" className="hs-dropdown-toggle flex items-center gap-x-2 text-sm text-gray-500 hover:text-gray-800">
                                                    <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                                                        <polyline points="16 6 12 2 8 6" />
                                                        <line x1="12" x2="12" y1="2" y2="15" />
                                                    </svg>
                                                    Share
                                                </button>
                                                <div className="hs-dropdown-menu w-56 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mb-1 z-10 bg-gray-900 shadow-md rounded-xl p-2" aria-labelledby="blog-article-share-dropdown">
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10" href="#">
                                                        Copy link
                                                    </a>
                                                    <div className="border-t border-gray-600 my-2"></div>
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10" href="#">
                                                        Share on Twitter
                                                    </a>
                                                    <a className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-400 hover:bg-white/10" href="#">
                                                        Share on Facebook
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
