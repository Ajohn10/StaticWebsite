import React from 'react';
import TypingEffect from '../components/TypingEffect';

function Home() {

    const skills = ['C#', 'React', 'AWS', 'C++', 'C', 'Typescript', 'WPF', 'REST', 'GraphQL'];

    return (
        <section className="relative flex-grow justify-center highlight highlight-variant-19 after:opacity-10">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="flex items-center justify-center">
                    <TypingEffect message="Hello...  Thank you for visiting my site."></TypingEffect>
                </div>
                <div>
                    <div className="max-w-4xl mx-auto w-full flex-col justify-center items-start gap-6 flex">
                        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-3 grid-cols-2">
                            {skills.map((skill, index) =>
                                <div key={index}
                                    className="w-full h-full p-3.5 rounded-xl bg-opacity-50 bg-gray-800 hover:bg-opacity-100 text-gray-900 hover:text-slate-300 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                    <h4 className="text-md md:text-2xl font-bold font-manrope leading-9">{skill}</h4>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
