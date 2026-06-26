import { Link } from "react-router-dom"
import Contact from "../components/Contact"

const services = [
  {
    icon: "✈️",
    title: "Contract Piloting",
    body: "Professional pilot services for owners and operators who need an experienced, dependable aviator at the controls.",
    chips: ["Part 91", "Owner ops", "Ferry flights"],
  },
  {
    icon: "🎓",
    title: "Flight Instruction",
    body: "Personalized training that builds genuinely capable, confident pilots — from primary students to advanced ratings.",
    chips: ["CFI", "Primary", "Advanced"],
  },
  {
    icon: "🛩️",
    title: "Aircraft Consulting",
    body: "Guidance on ownership, operations, and decisions — grounded in real cockpit and operational experience.",
    chips: ["Ownership", "Operations", "Safety"],
  },
  {
    icon: "🤝",
    title: "Community & Partners",
    body: "Connected to the regional aviation community, including the Duluth Flying Club and trusted partner operations.",
    chips: ["Duluth Flying Club", "Partners"],
  },
]

const capabilities = [
  "Veteran aviator with real operational experience.",
  "Safety-first judgment in every flight and lesson.",
  "Personalized instruction tailored to each student's goals.",
  "A trusted name within the regional aviation community.",
]

function Aviation() {
  return (
    <main data-accent="av">
      <section className="pillar-hero">
        <div className="container pillar-hero-inner">
          <Link to="/" className="back-link">
            ← Lawler Innovations
          </Link>
          <p className="eyebrow accent-text">Aviation Services</p>
          <h1>
            Aviation backed by{" "}
            <span className="accent-text">experience you can trust</span>.
          </h1>
          <p className="lead">
            Contract piloting, flight instruction, and operational expertise from
            a veteran aviator — safety-first, every time.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              Get in touch
            </a>
            <Link className="btn btn-ghost" to="/software">
              Explore Software →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow accent-text">Services</p>
          <h2 className="section-title">How we can help you fly</h2>
          <p className="section-lead">
            From the right seat to the cockpit, dependable aviation services for
            owners, students, and operators.
          </p>
          <div className="grid grid-2" style={{ marginTop: 48 }}>
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="chip-row">
                  {s.chips.map((c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="callout section">
        <div className="container callout-inner">
          <div>
            <h3>Flown by a veteran you can rely on</h3>
            <p>
              Every flight and every lesson is grounded in disciplined,
              safety-first judgment earned through real-world operational
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <ul className="cap-list" style={{ maxWidth: 640 }}>
            {capabilities.map((c) => (
              <li key={c}>
                <span className="mk">✓</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Contact defaultPillar="aviation" />
    </main>
  )
}

export default Aviation
