import React from 'react';
import self from '../assets/images/self.jpg'

function About() {
    return (
        <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-center items-start gap-8 flex">
                            <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                                <h6 className="text-gray-400 text-base font-normal leading-relaxed">About Me</h6>
                                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                                    <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Adam Johnson
                                    </h2>
                                    <h3 className="text-indigo-700 text-2xl font-bold font-manrope leading-normal lg:text-start text-center">
                                        Software Engineer
                                    </h3>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Hi, I'm Adam - a passionate and results-driven software engineer with a love for solving problems and building great software.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        My journey into development started early. As a kid, I was fascinated by computers, video games, and the idea that I could create things with code.
                                        That curiosity turned into a deep passion when I finally got my hands on a programming class in high school. Within a year, I was competing nationally with the
                                        Business Professionals of America, placing in the top 10 in the country - and I haven't stopped pushing forward since.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Today, I'm a Software Engineer at Brown Manufacturing, where I've spent the past few years leading projects and building everything from full-stack web
                                        apps to high-performance APIs. I've worked hands-on with technologies like C#, React, AWS, and SQL, optimizing systems for speed, scalability, and
                                        cost-efficiency. Whether it's cutting server costs in half, integrating with platforms like Shopify and ShipStation, or mentoring teammates, I bring
                                        energy and ownership to everything I do.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        I thrive in environments where I can keep learning, building, and collaborating. Whether it's front-end, back-end, cloud, or DevOps, I love it all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:justify-start justify-center items-start flex">
                        <div
                            className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
                            <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                                src={ self } alt="Adam Outside" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
