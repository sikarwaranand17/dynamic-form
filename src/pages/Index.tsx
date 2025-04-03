
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ContactForm from "@/components/ContactForm";
import TodoList from "@/components/TodoList";
import Footer from "@/components/Footer";
import { setupLazyLoading } from "@/utils/lazyLoading";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  // Initialize lazy loading for images
  useEffect(() => {
    setupLazyLoading();
    
    // Browser compatibility check
    const isIE = /*@cc_on!@*/false || !!(document as any).documentMode;
    const isEdgeHTML = !(window as any).StyleMedia && /Edge\/\d./i.test(navigator.userAgent);
    
    if (isIE || isEdgeHTML) {
      toast({
        title: "Browser Compatibility",
        description: "You're using an older browser. Some features may not work as expected.",
        duration: 6000,
      });
    }
    
    // Log performance metrics to help with optimization
    if (window.performance) {
      const perfData = window.performance.timing;
      const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
      
      console.log(`Page load time: ${pageLoadTime}ms`);
    }
  }, []);

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
              <div className="section-container hover-scale">
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
              <div className="section-container hover-scale">
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
          
          {/* Performance & Compatibility Section */}
          <div className="mt-12">
            <div className="section-container">
              <h2 className="section-title">Performance & Compatibility</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Optimized Performance</h3>
                  <p className="mb-3">This application implements several performance optimization techniques:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Lazy loading images to reduce initial page load</li>
                    <li>Efficient CSS with Tailwind's utility-first approach</li>
                    <li>Minimized HTTP requests through component reuse</li>
                    <li>State management optimizations in React</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cross-Browser Compatibility</h3>
                  <p className="mb-3">This application is tested and compatible with:</p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Google Chrome (latest)</li>
                    <li>Mozilla Firefox (latest)</li>
                    <li>Safari (latest)</li>
                    <li>Microsoft Edge (latest)</li>
                    <li>Mobile browsers (iOS Safari, Android Chrome)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
