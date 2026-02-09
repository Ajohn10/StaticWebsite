import React from 'react';
import { useDocumentTitle } from '../helpers/useDocumentTitle';
import code from '../assets/images/code.jpg';

export default function Contact() {
    useDocumentTitle("Contact Me - Adam Johnson");

    const sectionStyle = {
        backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url(${code})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };

    return (
        <section className="flex-1 flex flex-col items-center justify-center px-4" style={sectionStyle}>
            <div className="w-full max-w-lg rounded-2xl bg-gray-900 p-8 shadow-xl">
                <h1 className="text-3xl font-bold text-white mb-2">
                    Contact Me
                </h1>
                <p className="text-gray-400 mb-6">
                    Have a question, idea, or just want to say hi? Drop me a message.
                </p>

                <form
                    action="https://formspree.io/f/mjgekajg"
                    method="POST"
                    className="space-y-5"
                >
                    {/* Email */}
                    <div>
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Message */}
                    <div>
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-300 mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full rounded-lg border border-gray-700 bg-gray-800 px-4 py-2 text-white placeholder-gray-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="What would you like to talk about?"
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
