
import React, { useState } from "react";
import { FormData, ValidationError, validateForm } from "@/utils/formValidation";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [errors, setErrors] = useState<ValidationError[]>([]);
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Validate field on change if it has been touched
    if (touched[name]) {
      const fieldErrors = validateForm({...formData, [name]: value})
        .filter(error => error.field === name);
      
      setErrors(prev => {
        // Remove previous errors for this field
        const filtered = prev.filter(err => err.field !== name);
        // Add new errors for this field
        return [...filtered, ...fieldErrors];
      });
    }
  };
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    
    // Validate field on blur
    const fieldErrors = validateForm(formData)
      .filter(error => error.field === name);
    
    setErrors(prev => {
      // Remove previous errors for this field
      const filtered = prev.filter(err => err.field !== name);
      // Add new errors for this field
      return [...filtered, ...fieldErrors];
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(formData).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as { [key: string]: boolean });
    
    setTouched(allTouched);
    
    // Validate all fields
    const formErrors = validateForm(formData);
    setErrors(formErrors);
    
    if (formErrors.length === 0) {
      // Form is valid, show success message
      toast({
        title: "Form submitted successfully!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setTouched({});
    } else {
      // Form has errors, show error message
      toast({
        title: "Error submitting form",
        description: "Please fix the errors in the form and try again.",
        variant: "destructive",
      });
    }
  };
  
  const getErrorMessage = (field: string) => {
    const error = errors.find(err => err.field === field);
    return error ? error.message : "";
  };
  
  return (
    <div id="contact-form" className="section-container">
      <h2 className="section-title">Contact Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border rounded-md ${
              touched.name && getErrorMessage("name") 
                ? "border-destructive" 
                : "border-input"
            }`}
            placeholder="Your name"
          />
          {touched.name && getErrorMessage("name") && (
            <p className="mt-1 text-sm text-destructive">{getErrorMessage("name")}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border rounded-md ${
              touched.email && getErrorMessage("email") 
                ? "border-destructive" 
                : "border-input"
            }`}
            placeholder="your.email@example.com"
          />
          {touched.email && getErrorMessage("email") && (
            <p className="mt-1 text-sm text-destructive">{getErrorMessage("email")}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border rounded-md ${
              touched.subject && getErrorMessage("subject") 
                ? "border-destructive" 
                : "border-input"
            }`}
            placeholder="Message subject"
          />
          {touched.subject && getErrorMessage("subject") && (
            <p className="mt-1 text-sm text-destructive">{getErrorMessage("subject")}</p>
          )}
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full px-3 py-2 border rounded-md ${
              touched.message && getErrorMessage("message") 
                ? "border-destructive" 
                : "border-input"
            }`}
            placeholder="Your message"
          />
          {touched.message && getErrorMessage("message") && (
            <p className="mt-1 text-sm text-destructive">{getErrorMessage("message")}</p>
          )}
        </div>
        
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
