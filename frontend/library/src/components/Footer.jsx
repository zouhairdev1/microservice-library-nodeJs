import React from 'react';

const footerClasses = "bg-zinc-900 text-white py-4 px-6 flex flex-col items-center justify-center";
const logoSrc = "https://placehold.co/50x50";

const Footer = () => {
    return (
        <footer className={footerClasses}>
            <img src={logoSrc} alt="Library Books Logo" className="mb-2" />
            <p className="text-center">© 2023 Library Books. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
