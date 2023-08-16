import React, { useState } from 'react'

const ContactPage = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:4000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message })
      })

      if (response.ok) {
        alert('Thanks for your message!')
        setEmail('')
        setMessage('')
      } else {
        const errorData = await response.json()
        setErrorMessage(
          errorData.message || 'Oops, there was an error. Please try again!'
        )
      }
    } catch (error) {
      setErrorMessage('An error occurred. Please try again later.')
    }
  }

  return (
    <div className="page">
      <h1>Contact Me</h1>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default ContactPage
