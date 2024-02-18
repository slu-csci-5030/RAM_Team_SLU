
import React, { useState } from 'react';
import '../assets/Styles/CompanyDescription.css';

function CompanyDescription() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Form submitted with Name:', name, 'Email:', email, 'Message:', message);
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-and-description-container">
      <div className="company-description">
        <h2>About Our Company</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac justo id nisl commodo fermentum sit amet 
          non est. Sed hendrerit sem eget magna efficitur, nec cursus quam vehicula. Integer condimentum auctor elit 
          in pulvinar. Proin id metus sed purus placerat finibus. Sed vestibulum lectus nec dui facilisis, sed blandit 
          enim fermentum. Donec pulvinar risus vel mi ullamcorper, sit amet elementum arcu lacinia. Nullam nec nunc vel 
          est varius venenatis.
        </p>
        <p>
          In eu leo id enim maximus placerat. Vestibulum tincidunt, mauris ut laoreet sollicitudin, purus lectus 
          scelerisque lorem, nec venenatis sapien lacus et orci. Ut sed dolor vitae ex pharetra laoreet. Nullam luctus 
          sodales justo,
        </p>
      </div>
      <div className="contact-form-container">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor='name'>Name:</label>
              <input  id='name' type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="email" >Email:</label>
              <input  id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form-group">
              <label  htmlFor="message">Message:</label>
              <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CompanyDescription;
