// Form handling utilities
export const handleFormSubmission = (form) => {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    form.reset();
};