import { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollOnTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <button
                onClick={scrollToTop}
                className={`${isVisible ? 'opacity-100' : 'opacity-0'
                    } fixed bottom-10 right-10 text-4xl z-50 text-[#0067F9] transition-opacity duration-300`}
            >
                <FaArrowCircleUp />
            </button>
        </div>
    );
};

export default ScrollOnTop;