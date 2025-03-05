import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-medium mb-2">"Help Millions, To make Millions"</p>
        <p className="text-text/70 text-sm">
          © {new Date().getFullYear()} Srinivasu Kadiyam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;