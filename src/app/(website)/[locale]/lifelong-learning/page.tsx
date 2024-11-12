import PageHeader from '@/components/Global/PageHeader';
import React from 'react';

const articles = [
  ...Array(6).fill({
    title: "In usu laoreet repudiare legendos",
    date: "January 21, 2021",
    description: "Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto.",
    img: "https://i.ibb.co/FhgPJt8/Rectangle-116.png",
    layout: ""
  })
];

const ArticleCard = ({ img, title, date, description, layout, hidden }: any) => (
  <a href="#" 
  className={`${hidden ? "hidden sm:block" : ""} ${layout} max-w-sm mx-auto group bg-white hover:no-underline focus:no-underline`}>
    <img
      src={img}
      alt=""
      className="object-cover w-full h-44 rounded"
    />
    <div className="p-6 space-y-2">
      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">{title}</h3>
      <span className="text-xs text-gray-400">{date}</span>
      <p>{description}</p>
    </div>
  </a>
);

export default function LifelongLearning() {
  return (
    <>
      <PageHeader />
      <section className="  ">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12"> 
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.slice(1).map((article, index) => (
              <ArticleCard key={index} {...article} hidden={index >= 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
