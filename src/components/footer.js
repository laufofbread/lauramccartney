import React, { useState } from "react"
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
        <label htmlFor="email">Sign up to my newsletter:
        <input
          id="email"
          placeholder="Enter your email address here..."
          name="email"
          type="email"
          onChange={handleEmailChange}
        />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      <p className={styles.response} dangerouslySetInnerHTML={response}></p>
    </footer>
  )
}

export default Footer
