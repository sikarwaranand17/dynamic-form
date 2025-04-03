
import React from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">Web Development Skills</h1>
            <p className="text-xl text-muted-foreground">
              Practice your HTML, CSS, and JavaScript through interactive components
            </p>
          </div>
          
          {/* Grid layout for larger screens, column for mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="section-container">
                <h2 className="section-title">HTML & CSS</h2>
                <p className="mb-4">
                  This project demonstrates responsive layouts using CSS Grid and Flexbox, 
                  along with styled form inputs and modern design techniques.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Responsive design with Flexbox and Grid</li>
                  <li>Form styling and layout</li>
                  <li>Interactive UI elements</li>
                  <li>Modern color schemes and spacing</li>
                </ul>
              </div>
              
              <ContactForm />
            </div>
            
            <div className="space-y-8">
              <div className="section-container">
                <h2 className="section-title">JavaScript</h2>
                <p className="mb-4">
                  Practice JavaScript DOM manipulation by using the interactive 
                  components below. Add, toggle, and remove items dynamically.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Form validation</li>
                  <li>Dynamic content updates</li>
                  <li>Event handling</li>
                  <li>State management</li>
                </ul>
              </div>
              
              <TodoList />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
