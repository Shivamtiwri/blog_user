// src/Terms.js
import React from 'react';
import './Terms.css'; // Optional: Import custom CSS for styling
import Header from '../Header';

const Terms = () => {
  return (
    <div className="terms-container bg-white">
        <Header/>
      <header className="terms-header">
        <h1>Terms of Service</h1>
      </header>
      <section className="terms-content">
        <h2>Introduction</h2>
        <p className='text-red-500'>
          These Terms of Service ("Terms") govern your use of our website and services ("Service"). By accessing or using our Service, you agree to comply with and be bound by these Terms. Please read them carefully.
        </p>

        <h2>Use of Our Service</h2>
        <p className='text-red-500'>
          You are granted a limited, non-exclusive, non-transferable license to use the Service. You agree not to:
        </p>
        <ul>
          <li className='text-red-500'>Use the Service for any unlawful purpose.</li>
          <li className='text-red-500'>Attempt to interfere with the proper functioning of the Service.</li>
          <li className='text-red-500'>Engage in any behavior that may harm or disrupt other users of the Service.</li>
        </ul>

        <h2>Account Registration</h2>
        <p className='text-red-500'>
          If registration is required for certain features of the Service, you agree to provide accurate, current, and complete information during the registration process. You are responsible for keeping your account information secure.
        </p>

        <h2>Intellectual Property</h2>
        <p className='text-red-500'>
          All content on our Service, including text, graphics, logos, and software, is the property of the website owner or its licensors and is protected by intellectual property laws. You may not copy, distribute, or modify any content without permission.
        </p>

        <h2>Termination</h2>
        <p className='text-red-500'>
          We reserve the right to suspend or terminate your access to the Service at our discretion, without notice, for any reason, including but not limited to violations of these Terms.
        </p>

        <h2>Disclaimers and Limitation of Liability</h2>
        <p className='text-red-500'>
          The Service is provided "as is" without warranty of any kind. We are not liable for any direct, indirect, incidental, or consequential damages resulting from your use of the Service.
        </p>

        <h2>Changes to the Terms</h2>
        <p className='text-red-500'>
          We reserve the right to modify these Terms at any time. Any changes will be posted on this page with an updated revision date. It is your responsibility to review the Terms periodically.
        </p>

        <h2>Governing Law</h2>
        <p className='text-red-500'>
          These Terms shall be governed by and construed in accordance with the laws of [Your Country or State], without regard to its conflict of law principles.
        </p>

        <h2>Contact Us</h2>
        <p className='text-red-500'>
          If you have any questions or concerns about these Terms, please contact us at:
          <br />
          Email: support@example.com
        </p>
      </section>
    </div>
  );
};

export default Terms;
