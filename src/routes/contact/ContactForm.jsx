import { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const form = useRef();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleValidation = (values) => {
    const errors = {};
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const numberRegex = /\d/;

    if (!values.name) {
      errors.name = "Enter your full name";
    } else if (numberRegex.test(values.name)) {
      errors.name = "Full name can't be numbers!";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Invalid email format";
    }
    if (!values.message) {
      errors.message = "Message field can't be empty";
    } else if (values.message.length < 10) {
      errors.message = "The message should contain min. 10 characters";
    }
    return errors;
  };

  const submitForm = (e) => {
    e.preventDefault();
    const validationErrors = handleValidation(formValues);
    setFormErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    // Send email via EmailJS
    emailjs
      .sendForm(
        "service_o6z2kro", // Replace with your EmailJS service ID
        "template_w0xu6zm", // Replace with your template ID
        form.current,
        "k-id6mHVLp9T2o3vd" // Replace with your public key from EmailJS
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          setSubmit(true);
          setFormValues({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <section>
      {submit ? (
        <section className="form-success">
          <h3>Message successfully sent!</h3>
          <p>I will get back to you as soon as possible!</p>
          <button type="button" onClick={() => setSubmit(false)}>
            Send again
          </button>
        </section>
      ) : (
        <form className="form form-tag" onSubmit={submitForm} ref={form}>
          <section>
            <input
              onChange={handleChange}
              value={formValues.name}
              type="text"
              placeholder="Full name"
              name="name"
              required
            />
            <br />
            <label>{formErrors.name}</label>
          </section>
          <section>
            <input
              onChange={handleChange}
              value={formValues.email}
              name="email"
              type="text"
              placeholder="Email"
              required
            />
            <br />
            <label>{formErrors.email}</label>
          </section>
          <section>
            <textarea
              onChange={handleChange}
              value={formValues.message}
              name="message"
              placeholder="Message"
              required
            />
            <br />
            <label>{formErrors.message}</label>
          </section>
          <button type="submit">Send</button>
          <br />
        </form>
      )}
    </section>
  );
};

export default ContactForm;
