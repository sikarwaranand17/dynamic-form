
import React from "react";
import { Github, Globe, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card py-8 border-t border-border mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Copyright and description */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-3 text-primary">Web Skills</h3>
            <p className="text-sm text-muted-foreground mb-3">
              A comprehensive web app for practicing HTML, CSS, and JavaScript skills.
            </p>
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} Web Skills Practice Project
            </p>
          </div>
          
          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-3 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#contact-form" className="hover:text-primary transition-colors">Contact Form</a>
              </li>
              <li>
                <a href="#todo-list" className="hover:text-primary transition-colors">To-Do List</a>
              </li>
            </ul>
          </div>
          
          {/* Column 3: Connect */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-3 text-primary">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="#" aria-label="Website" className="text-muted-foreground hover:text-primary transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Built with HTML, CSS, and JavaScript
            </p>
          </div>
        </div>
        
        {/* Performance Monitoring */}
        <div className="mt-8 pt-6 border-t border-border">
          <div className="text-center text-xs text-muted-foreground">
            <p>This site is optimized for performance with lazy loading and minified assets</p>
            <p>Compatible with Chrome, Firefox, Safari, and Edge</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
