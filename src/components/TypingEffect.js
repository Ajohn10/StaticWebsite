import React, { useEffect, useState } from 'react';

const TypingEffect = ({ message, speed = 100 }) => {
    const [typedText, setTypedText] = useState(message.charAt(0));
    const [index, setIndex] = useState(1);

    useEffect(() => {
        if (index < message.length) {
            const typingInterval = setTimeout(() => {
                setTypedText((prev) => prev + message.charAt(index));
                setIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(typingInterval);
        }
    }, [index, message, speed]);

    return (
        <div className="text-2xl md:text-5xl font-mono p-6 text-center align-middle">
            {typedText}
        </div>
    );
};

export default TypingEffect;
