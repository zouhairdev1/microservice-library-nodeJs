import React from 'react';

const footerClasses = "dark:bg-zinc-900 dark:text-white py-4 px-6 flex flex-col items-center justify-center";
const logoSrc = "images/logo.png";

const Footer = () => {
    return (
        <footer className={footerClasses}>
            <img src={logoSrc} alt="Library Books Logo" className="mb-2 w-12 h-12" />
            <p className="text-center">© 2024 Library Books. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
