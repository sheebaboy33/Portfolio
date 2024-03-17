import "./contact.scss";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isInView = useInView(ref, { margin: "-100px" });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_jg8cha4", "template_76e3s2k", formRef.current, {
        publicKey: "2nyDNP6Fb5dt8_vnh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setError(false);
          setSuccess(true);
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          toast.error("An error occured, Please try again!");
        }
      );
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate">
      <motion.div className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's Connect!</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>sharmfernando33@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Address</h2>
          <span>
            No. 27, Skyline Apartments, De Alwis Place, Dehiwala, Colombo. Sri
            Lanka.
          </span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Contact</h2>
          <span>+94768486777</span>
        </motion.div>
      </motion.div>

      <div className="formContainer">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}>
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message" />
          <button>Submit</button>
        </motion.form>
      </div>
    </motion.div>
  );
};
export default Contact;
