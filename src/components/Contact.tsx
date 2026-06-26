import { useState, type FormEvent } from "react"

const CONTACT_EMAIL = "pat@lawlerinnovationsinc.com"

type Pillar = "software" | "aviation"

function Contact({ defaultPillar = "software" }: { defaultPillar?: Pillar }) {
  const [pillar, setPillar] = useState<Pillar>(defaultPillar)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(
      `${pillar === "software" ? "Software" : "Aviation"} inquiry — ${
        name || "website"
      }`
    )
    const body = encodeURIComponent(
      `Interest: ${pillar === "software" ? "Software Engineering" : "Aviation Services"}\nName: ${name}\nEmail: ${email}\n\n${message}`
    )
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section className="section" id="contact">
      <div className="container contact-inner">
        <p className="eyebrow accent-text">Get in touch</p>
        <h2 className="section-title">Let's talk about your project</h2>
        <p className="section-lead" style={{ margin: "0 auto" }}>
          Whether you need software built or a mission flown, tell us what you're
          working on and we'll get back to you.
        </p>

        <form className="contact-card" onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <div className="contact-toggle">
              <button
                type="button"
                className={pillar === "software" ? "active" : ""}
                onClick={() => setPillar("software")}
              >
                Software
              </button>
              <button
                type="button"
                className={pillar === "aviation" ? "active" : ""}
                onClick={() => setPillar("aviation")}
              >
                Aviation
              </button>
            </div>
          </div>

          <div className="field" style={{ marginTop: 22 }}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="message">How can we help?</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                pillar === "software"
                  ? "Tell us about the app or system you want to build…"
                  : "Tell us about the flight, training, or operation you need…"
              }
              required
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Send inquiry
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
