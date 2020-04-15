import React, { useState, setState } from "react"
import addToMailchimp from 'gatsby-plugin-mailchimp'

import styles from "../styles/nav.module.css"

const Footer = () => {

  const [email, setEmail] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    addToMailchimp(email)
    .then(({ msg, result }) => {
        setResponse({__html: msg})

        if (result !== 'success') {
            throw msg;
        }
      })
      .catch((error) => {
        throw error
      });
  };

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };

  return (
    <footer className={styles.footer}>
      <form onSubmit={handleSubmit}>
        <label for="email">Sign up to my newsletter:</label>
        <input
          placeholder="Enter your email address here..."
          name="email"
          type="email"
          onChange={handleEmailChange}
        />
        <button type="submit">Subscribe</button>
      </form>
      <p className={styles.response} dangerouslySetInnerHTML={response}></p>
    </footer>
  )
}

export default Footer
