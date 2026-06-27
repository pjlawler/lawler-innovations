import { Link } from "react-router-dom"
import Contact from "../components/Contact"

const services = [
  {
    icon: "✈️",
    title: "Contract Piloting",
    body: "Cirrus Factory Trained pilots to fly your aircraft for a single day or a multi-day trip — current, professional, and dependable.",
    chips: ["Cirrus Factory Trained", "Single & multi-day", "$750/day"],
  },
  {
    icon: "🎓",
    title: "Flight Instruction",
    body: "Platinum CSIP, CFI/CFII instructors specializing in instrument, long cross-country, and Cirrus transition training.",
    chips: ["Platinum CSIP", "Instrument & XC", "$1,000/day"],
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

const pilotPoints = [
  {
    icon: "🗓️",
    title: "Single & multi-day engagements",
    body: "Book a pilot for a single day or a multi-day trip — owner flights, repositioning, ferries, and events. You set the schedule; we fly it.",
  },
  {
    icon: "🎖️",
    title: "Cirrus Factory Trained pilots",
    body: "Every pilot we send is Cirrus Factory Trained, current, and standardized to the same high safety bar.",
  },
  {
    icon: "🛡️",
    title: "Professional Part 91 operation",
    body: "Disciplined, safety-first operation of your aircraft — handled with the care you'd expect for your own airplane.",
  },
]

const instructionPoints = [
  {
    icon: "📐",
    title: "Instrument training",
    body: "Earn your instrument rating or sharpen IFR proficiency, taught in the Cirrus's advanced glass avionics.",
  },
  {
    icon: "🗺️",
    title: "Long cross-country",
    body: "Build real cross-country command — planning, weather, and decision-making across long, demanding legs.",
  },
  {
    icon: "🎓",
    title: "Cirrus transition training",
    body: "Transition into your SR20, SR22, or Vision Jet with factory-standard training built around the airframe.",
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
          <p className="eyebrow accent-text">Contract Piloting</p>
          <h2 className="section-title">A professional pilot for a day — or a week</h2>
          <p className="section-lead">
            Need someone in the left seat? We provide Cirrus Factory Trained
            pilots for single-day and multi-day engagements — so your aircraft
            flies when you need it to.
          </p>
          <div className="spotlight">
            <div className="spotlight-points">
              {pilotPoints.map((p) => (
                <div className="spotlight-point" key={p.title}>
                  <div className="pt-icon">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-card">
              <p className="price-label">Day Rate</p>
              <div className="price">
                <span className="amount">$750</span>
                <span className="per">/ day</span>
              </div>
              <p className="price-note">plus incurred expenses, billed at cost</p>
              <ul className="price-meta">
                <li>
                  <span className="mk">✓</span>Single or multi-day engagements
                </li>
                <li>
                  <span className="mk">✓</span>Cirrus Factory Trained pilots
                </li>
                <li>
                  <span className="mk">✓</span>Travel to &amp; from the job location
                </li>
                <li>
                  <span className="mk">✓</span>Fuel, fees &amp; lodging at cost
                </li>
              </ul>
              <a className="btn btn-primary" href="#contact">
                Request a pilot
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow accent-text">Flight Instruction</p>
          <h2 className="section-title">Cirrus training from Platinum CSIP instructors</h2>
          <p className="section-lead">
            Every instructor is a Platinum CSIP — Cirrus's highest standardized
            rating — and dual-rated CFI/CFII. Specialized instruction in the
            aircraft you fly.
          </p>
          <div className="spotlight">
            <div className="spotlight-points">
              {instructionPoints.map((p) => (
                <div className="spotlight-point" key={p.title}>
                  <div className="pt-icon">{p.icon}</div>
                  <div>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="price-card">
              <p className="price-label">Instructor Day Rate</p>
              <div className="price">
                <span className="amount">$1,000</span>
                <span className="per">/ day</span>
              </div>
              <p className="price-note">plus incurred expenses, billed at cost</p>
              <ul className="price-meta">
                <li>
                  <span className="mk">✓</span>Platinum CSIP, CFI/CFII instructors
                </li>
                <li>
                  <span className="mk">✓</span>Instrument, cross-country &amp; transition
                </li>
                <li>
                  <span className="mk">✓</span>Travel to &amp; from the training location
                </li>
                <li>
                  <span className="mk">✓</span>Fuel, fees &amp; lodging at cost
                </li>
              </ul>
              <a className="btn btn-primary" href="#contact">
                Book training
              </a>
            </div>
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
