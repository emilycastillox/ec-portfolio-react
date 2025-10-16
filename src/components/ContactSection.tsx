'use client';

import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create mailto link with form data
      const subject = `Portfolio Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      
      const mailtoLink = `mailto:emilycastillox@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Open mailto link
      window.location.href = mailtoLink;
      
      // Show success message
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error creating mailto link:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="page-header space-left">
          <h3>Contact Me<span className="text-primary">.</span></h3>
        </div>
        <div className="row">
          <div className="col-md-6 space-bottom">
            <div className="contact-description mb-5">
              <h5>Let&apos;s Chat!</h5>
              <p className="mb-4">
                From web development to creative services, I can help you achieve your goals with fluid, unique websites suited to your needs. I am currently freelancing and open to new projects. Contact me for rates and services today!
              </p>
            </div>

            <div className="contact-info-blocks">
              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="lnr lnr-calendar-full"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Book Me</h5>
                  <a href="https://calendly.com/emilycastillox" target="_blank" rel="noopener noreferrer">
                    Click to set up a Meeting
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">
                  <i className="lnr lnr-envelope"></i>
                </div>
                <div className="contact-info-content">
                  <h5>Email</h5>
                  <a href="mailto:emilycastillox@gmail.com" className="contact-info-text">
                    emilycastillox@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            {/* Contact form */}
            <div id="contact-form-1" className="contact-form-wrapper">
              <form 
                id="contactForm" 
                data-toggle="validator" 
                name="contact" 
                method="POST"
                onSubmit={handleSubmit}
                className="contact-form"
              >
                <div className="form-group">
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    placeholder="Full Name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="Email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="help-block with-errors"></div>
                </div>
                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message"
                    className="form-control" 
                    rows={8} 
                    placeholder="Message" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    style={{ minHeight: '200px', resize: 'vertical' }}
                  ></textarea>
                  <div className="help-block with-errors"></div>
                </div>
                <button 
                  type="submit" 
                  id="form-submit" 
                  className="btn btn-md btn-primary-filled btn-form-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-3" style={{ 
                    padding: '10px 15px', 
                    backgroundColor: '#d4edda', 
                    color: '#155724', 
                    border: '1px solid #c3e6cb', 
                    borderRadius: '4px' 
                  }}>
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-3" style={{ 
                    padding: '10px 15px', 
                    backgroundColor: '#f8d7da', 
                    color: '#721c24', 
                    border: '1px solid #f5c6cb', 
                    borderRadius: '4px' 
                  }}>
                    Sorry, there was an error sending your message. Please try again or email me directly.
                  </div>
                )}
                
                <div className="clearfix"></div>
              </form>
            </div>
            {/* / Contact form */}
          </div>
        </div>
      </div>
    </section>
  );
}
