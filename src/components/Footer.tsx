
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-card py-6 border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Web Skills Practice Project
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-muted-foreground text-center md:text-right">
              Built with HTML, CSS, and JavaScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
