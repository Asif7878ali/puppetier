import { useState } from 'react';
import '../App.css';
import axios from "axios";
import { notification } from 'antd';

const Message = () => {

    const [formData, setFormData] = useState({ number: '', message: '' });
    const [error, setError] = useState('');

    function handleInputChange(e) {
      const { name, value } = e.target;
      if (name === 'number') {
          let formattedValue = value.replace(/[^0-9]/g, ''); 
          const maxlen = 10;
          if (/^[0-5]/.test(formattedValue)) {
              formattedValue = '';
          }
          if (formattedValue.length > maxlen) {
              formattedValue = formattedValue.slice(0, maxlen);
          }
          setFormData({ ...formData, [name]: formattedValue });
      } else if (name === 'message') {
          setFormData({ ...formData, [name]: value });
       }
    };
  
     const handleSubmit = async (e) => {
          e.preventDefault();
           // Basic form validation
          if (!formData.number.trim() || !formData.message.trim()) {
                setError('Please fill out all fields');
                return;
             }
          console.log(formData);
      try {
          const url = 'http://localhost:4000/automate/message';
          const apitoken = 'apiyvj44343lbp65jur87key'; 
          const response = await axios.post(url, formData,{
            headers : { 'api-key': apitoken } 
          });
          console.log(response.data);
          const {msg} = response.data;
          setFormData({ number: '', message: '' });
          notification.success({
            message : msg
          })
          setError('');
    } catch (error) {
          console.log(error.response.data);
          const {msg} = error.response.data;
          setFormData({ number: '', message: '' });
          notification.error({
            message : msg
          })
          setError('Failed to send message');
      }
    };

  return (
    <>
       <div className="form-container">
                <h2>Send Message</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="number">Number</label>
                        <input type="text" id="number" name="number"
                            value={formData.number} onChange={handleInputChange} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message"
                            value={formData.message} onChange={handleInputChange} required/>
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit">Message</button>
                </form>
            </div>
    </>
  )
}

export default Message