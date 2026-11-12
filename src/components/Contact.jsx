import './Contact.css'
import ContactForm from './ContactForm'

function Contact() {
  return (
    <><ContactForm />
    <section className="contact" id="contact">

          <h2>Contact Me</h2>

          <p>
              I am always happy to connect with new people
              and discuss new opportunities.
          </p>

          <div className="contact-info">

              <h3>Let's Work Together</h3>

              <p>Email: 12alatoane12@gmail.com</p>

              <p>Thank you for visiting my portfolio!</p>

          </div>

<div className="social-links">
  <a
    href="https://github.com/12alatoane12-creator"
    target="_blank"
    rel="noopener noreferrer"
  >
    GitHub
  </a>
</div>

      </section></>
  )
}

export default Contact