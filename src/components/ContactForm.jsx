
import { useState } from 'react'

function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [notice, setNotice] = useState('')

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  
function handleSubmit(event) {
  event.preventDefault()

  const subject = encodeURIComponent(
    `Portfolio Message from ${form.name}`
  )

  const body = encodeURIComponent(
    `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
  )

  window.location.href =
    `mailto:12alatoane12@gmail.com?subject=${subject}&body=${body}`

  setNotice('Please press Send in your email app.')
}


  function clearForm() {
    setForm({ name: '', email: '', message: '' })
    setNotice('')
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <textarea
        name="message"
        placeholder="Your Message"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button type="submit">Send Message</button>
      <button type="button" onClick={clearForm}>
        Clear
      </button>

      {notice && <p>{notice}</p>}
    </form>
  )
}

export default ContactForm
