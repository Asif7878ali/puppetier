import React from "react";
import "../stylesheet/contact.css"

const Contact = () => {
  return (
    <>
      <div className="contact-form">
        <h1>Contact our team of Whatsbot experts</h1>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              name="name"
              type="text"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.valu/es.name}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile no.:</label>
            <input
              id="mobile"
              name="mobile"
              type="text"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.mobile}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              name="email"
              type="email"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.email}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.message}
            />
          </div>
          <div>
            <label htmlFor="captcha">Captcha:</label>
            <input
              id="captcha"
              name="captcha"
              type="text"
              // onChange={formik.handleChange}
              // onBlur={formik.handleBlur}
              // value={formik.values.captcha}
            />
          </div>
          <div className="captcha-image">
            <img src="path_to_captcha_image" alt="captcha" />
          </div>
          <button type="submit">Send message</button>
        </form>
      </div>
    </>
  );
};

export default Contact;
