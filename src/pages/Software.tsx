import { Link } from "react-router-dom"
import Contact from "../components/Contact"

const services = [
  {
    icon: "🌐",
    title: "Web & Cloud Apps",
    body: "Fast, reliable web applications on modern stacks and edge infrastructure that scales without surprises.",
    chips: ["React", "Workers", "APIs"],
  },
  {
    icon: "📱",
    title: "Mobile & iOS",
    body: "Native iOS and cross-platform apps designed to feel right at home on every device.",
    chips: ["Swift", "iOS", "Cross-platform"],
  },
  {
    icon: "⚙️",
    title: "Custom Software",
    body: "Bespoke tools and platforms built around how your operation actually works — not off-the-shelf compromises.",
    chips: ["Bespoke", "Integrations", "Automation"],
  },
  {
    icon: "🧭",
    title: "Consulting & Architecture",
    body: "Technical strategy, system design, and a steady hand from someone who has shipped real products end to end.",
    chips: ["Strategy", "Architecture", "Review"],
  },
]

const capabilities = [
  "Senior, hands-on engineering — no hand-offs to junior teams.",
  "Domain depth in aviation, EdTech, and operational software.",
  "From first sketch and data model to deployed, maintained product.",
  "Clear communication and tight, visible iteration throughout.",
]

function Software() {
  return (
    <main data-accent="sw">
      <section className="pillar-hero">
        <div className="container pillar-hero-inner">
          <Link to="/" className="back-link">
            ← Lawler Innovations
          </Link>
          <p className="eyebrow accent-text">Software Engineering</p>
          <h1>
            Software with <span className="accent-text">technical depth</span>{" "}
            and real-world judgment.
          </h1>
          <p className="lead">
            We design, build, and ship custom software — web, cloud, and mobile —
            for clients who need engineering done right the first time.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#contact">
              Start a project
            </a>
            <Link className="btn btn-ghost" to="/aviation">
              Explore Aviation →
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow accent-text">Capabilities</p>
          <h2 className="section-title">What we build</h2>
          <p className="section-lead">
            A full-stack practice that takes products from idea to launch — and
            keeps them running.
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
            <h3>Why Lawler Innovations</h3>
            <p>
              You work directly with the engineer building your software —
              someone with the operational experience to understand what your
              product really needs.
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

      <Contact defaultPillar="software" />
    </main>
  )
}

export default Software
