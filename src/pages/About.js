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
                                        Hello!  My name is Adam, and as you probably know, I'm a software engineer.  I have always had a passion for software development, even as a child.
                                        In fact, even when I was around 7 years old, I already knew I wanted to be working closely with computers.  Of course, as a kid, that was also targeted more towards other hobbies as well, such as video games, 
                                        but as I grew older, I just wanted to create things!  
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        I started learning how to program on my own, but with little access to materials or even a computer good enough to program on, it took me some time.  
                                        But in my junior year of high school, I was able to join a programming class.  I was immediately enthralled!  I spent all of my junior and senior year 
                                        invested in programming.  I even got to participate in a programming competition for Business Professionals of America.  I blasted through the regional competition, 
                                        placed within the top 5 for my state, and then in the top 10 at a national level, which was the highlight of my time in high school.
                                    </p>
                                    <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                                        My learning didn't stop, of course.  I then went on to join Western Michigan University, and eventually graduated with a Bachelors in Computer Science.  Of course, 
                                        as anyone in the field knows, my learning was just beginning!  I then joined Brown Manufacturing as a Software Engineer, and I have been working with them ever since. 
                                        There, I've learned an incredible amount of skills.  From all the Cs (C#, C++, and C) at a professional level, to managing AWS, and to React!  I have experience in all 
                                        parts of the tech stack, and love each one.
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
