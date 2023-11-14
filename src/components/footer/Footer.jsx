// ChatInput.js
import React, { useState } from 'react';
import './Footer.css'; // Make sure to create this file for styling

const Footer = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      // onSendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleInputChange}
        // onKeyPress={handleKeyPress}
      />
      <button className="send-button" onClick={handleSendMessage}>
        Send
      </button>
    </div>
  );
};

export default Footer;
