import { useState, useEffect } from "react";
import styles from "./contact.module.css";

const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedEmail = localStorage.getItem("email");
    const storedSubject = localStorage.getItem("subject");
    const storedMessage = localStorage.getItem("message");

    if (storedFullName) setFullName(storedFullName);
    if (storedEmail) setEmail(storedEmail);
    if (storedSubject) setSubject(storedSubject);
    if (storedMessage) setMessage(storedMessage);
  }, []);

  const formHandler = (e) => {
    e.preventDefault();

    if (!fullName || !email || !subject || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    } else {
      setErrorMessage("Message sent successfully!");

      // Save the entire form data in localStorage as a JSON object
      const formData = {
        fullName,
        email,
        subject,
        message
      };
      localStorage.setItem("submittedFormData", JSON.stringify(formData));
    }
  };

  return (
    <div className={`${styles["contact-form"]} container sections-padding`}>
      <div data-aos="fade-down">
        <p className="paragraph">Welcome To Energifit</p>
        <h2>Get In Touch With Us</h2>
        <p>
          If you have any feedback or questions about our clubs, our website or
          our services in general, please contact us by filling out the form.
        </p>
        <h3>Open Hours</h3>
        <p>
          <span>Mon – Fri :</span> 08.00 AM to 09.00 PM
        </p>
        <p>
          <span>Sat :</span> 09.00 AM To 06.00 PM
        </p>
        <p>
          <span>Sunday :</span> 09.00 AM To 02.00 PM
        </p>
      </div>
      <div data-aos="fade-up">
        <h2>Send Us a Message</h2>
        <p>Your email address will not be published *</p>
        <form onSubmit={formHandler}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit">Submit</button>
          <p>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
