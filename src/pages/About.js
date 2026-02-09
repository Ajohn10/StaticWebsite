import React from 'react';
import self from '../assets/images/self.jpg'
import { useDocumentTitle } from '../helpers/useDocumentTitle';

function About() {
    useDocumentTitle("About - Adam Johnson");

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
                                        Senior Software Engineer
                                    </h3>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Hi, I'm Adam - a senior software engineer with a passion for building new things.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        My journey into development started early. As a kid, I was fascinated by computers, video games, and the idea that I could create these things with my own hands.
                                        That curiosity turned into a deep passion when I finally got my hands on a programming class in high school. I learned as much as I could as fast as the class would let me.
                                        Within a year, I was competing nationally in Business Professionals of America.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        Today, I'm a Software Engineer at Bosch Automotive Service Solutions.  I get to work on developing my skills in Azure, and I am provided with plenty of opportunities to learn and grow.  
                                        Prior to my time at Bosch, I worked for Brown Manufacturing for nearly 5 years.  They took me in directly out of college at WMU, and I was able to return the favor of them investing in me 
                                        by growing quickly, assisting them in every facet of their software needs.  They promoted me to a manager role after just a year, where I continued to do the things I love, but with more responsibility.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        When I'm not working on passion projects or learning new things, I enjoy spending time with my family, playing video games, and playing (or DMing) Dungeons & Dragons with friends.
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
