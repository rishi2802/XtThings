import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import WomanImg from '../img/contact/woman.png';
import { CursorContext } from '../context/CursorContext';

const Contact = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const mailtoLink = `mailto:xtphotography.10@gmail.com?subject=Hello JayaSurya this is ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}`;

    window.location.href = mailtoLink; // This opens the default mail client with the pre-filled email
  };

  const transition1 = {
    duration: 0.5,
    ease: 'easeInOut',
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className="section"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          {/* Background */}
          <motion.div
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={transition1}
            className="hidden lg:flex bg-[#eef7f9] absolute bottom-0 left-0 right-0 top-72 -z-10"
          ></motion.div>

          {/* Text & Form */}
          <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="lg:flex-1 lg:pt-30 px-4"
          >
            <h1 className="h1">Contact me</h1>
            <p className="mb-10">Get in touch with me</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <div className="flex gap-x-10">
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  aria-label="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  aria-label="Your email address"
                />
              </div>
              <input
                className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879]"
                type="text"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                aria-label="Your message"
              />
              <button
                className="btn mb-[30px] mx-auto lg:mx-0 self-start"
                type="submit"
                aria-label="Send message"
              >
                Send it
              </button>
            </form>
          </div>

          {/* Image */}
          <motion.div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            transition={{ transistion: transition1, duration: 1.5 }}
            className="lg:flex-1"
          >
            <img src={WomanImg} alt="Woman illustration" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
