
import React from "react";
import { cn } from "@/lib/utils";

type NavbarProps = {
  className?: string;
};

const Navbar = ({ className }: NavbarProps) => {
  return (
    <nav className={cn("w-full bg-card shadow-sm", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">Web Skills</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#contact-form" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                Contact Form
              </a>
              <a href="#todo-list" className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">
                To-Do List
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
