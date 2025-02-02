// src/Privacy.js
import React from 'react';
import './Privacy.css'; // Optional: Import custom CSS for styling
import Header from '../Header';

const Privacy = () => {
  return (
    <div className="privacy-container bg-white">
        <Header/>
      <header className="privacy-header">
        <h1 className='text-red-500'>Privacy Policy</h1>
      </header>
      <section className="privacy-content">
        <h2>Introduction</h2>
        <p className='text-red-500'>
          Welcome to our website! Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information when you visit our site.
        </p>

        <h2>Information We Collect</h2>
        <p className='text-red-500'>
          We may collect the following information:
        </p>
        <ul>
          <li className='text-red-500'>Personal Identification Information (Name, Email, etc.)</li>
          <li className='text-red-500'>Non-personal Identification Information (IP address, Browser, Device type, etc.)</li>
          <li className='text-red-500'>Cookies and usage data to improve your experience</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p className='text-red-500'>
          The information we collect from you may be used in the following ways:
        </p>
        <ul>
          <li className='text-red-500'>To personalize your experience on our site</li>
          <li className='text-red-500'>To improve customer service and respond to inquiries</li>
          <li className='text-red-500'>To send periodic emails related to your order or other products and services</li>
        </ul>

        <h2>Data Protection</h2>
        <p className='text-red-500'>
          We implement a variety of security measures to maintain the safety of your personal information. However, please be aware that no method of data transmission over the internet is 100% secure.
        </p>

        <h2>Your Rights</h2>
        <p className='text-red-500'>
          You have the right to access, correct, or delete your personal information at any time. If you have any concerns, feel free to contact us through the contact information provided below.
        </p>

        <h2>Third-Party Services</h2>
        <p className='text-red-500'>
          We may use third-party services (such as Google Analytics) to monitor site traffic and enhance the user experience. These services may collect information about your usage patterns.
        </p>

        <h2>Changes to Our Privacy Policy</h2>
        <p className='text-red-500'>
          We reserve the right to update or change this privacy policy at any time. Any changes will be posted on this page with an updated revision date.
        </p>

        <h2>Contact Us</h2>
        <p className='text-red-500'>
          If you have any questions about this privacy policy, please contact us at:
          <br />
          Email: support@example.com
        </p>
      </section>
    </div>
  );
};

export default Privacy;
