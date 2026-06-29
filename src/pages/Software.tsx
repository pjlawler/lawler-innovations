import { Link } from "react-router-dom"
import Contact from "../components/Contact"
import letsGoFlyIcon from "../assets/lets-go-fly-icon.jpg"
import cirrusApproachIcon from "../assets/cirrus-approach-icon.jpg"
import drugTestLogo from "../assets/911-logo.svg"
import learnThaiIcon from "../assets/learn-thai-icon.jpg"
import functionCalcIcon from "../assets/functioncalc-icon.jpg"
import calorieCalcIcon from "../assets/caloriecalc-icon.jpg"

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

const projects: {
  icon?: string
  brand?: string
  image?: string
  logo?: string
  type: string
  title: string
  body: string
  tech: string[]
  link?: string
}[] = [
  {
    image: cirrusApproachIcon,
    type: "iOS · Aviation EdTech",
    title: "Cirrus Approach",
    body: "We lead iOS development of Cirrus Approach — the app pilots and instructors use to access the Cirrus Approach Learning Management System through video courses, interactive lessons, and quizzes. Built in SwiftUI across 25+ API integrations, with Pat serving as the Cirrus pilot and instructor subject-matter expert throughout.",
    tech: ["SwiftUI", "Swift", "ARKit", "REST APIs", "Azure DevOps"],
    link: "https://apps.apple.com/us/app/cirrus-approach/id1448733796",
  },
  {
    image: letsGoFlyIcon,
    type: "visionOS · Virtual Reality",
    title: "Let's Go Fly!",
    body: "A Cirrus Aircraft app pairing an immersive SR22T flight with a virtual-reality walk-around of a full-sized 3D aircraft. We provided all of the initial discovery and SwiftUI coding and built the initial MVP that debuted at AirVenture Oshkosh in 2024.",
    tech: ["RealityKit", "SwiftUI", "3D"],
    link: "https://apps.apple.com/us/app/lets-go-fly/id6757612693",
  },
  {
    logo: drugTestLogo,
    type: "Full-Stack · Logistics",
    title: "911 Drug Test Network",
    body: "We designed, built, and continue to maintain the full-stack 911 Drug Test Network platform — the website plus a proprietary scheduling site and iOS app this nationwide drug & alcohol testing business runs on. Delivered and maintained through a CI/CD process, working directly with the stakeholders.",
    tech: ["Cloudflare Workers", "Hono", "TypeScript", "D1", "R2", "Durable Objects", "PWA"],
    link: "https://911drugtest.com",
  },
  {
    image: learnThaiIcon,
    type: "iOS · Language Learning",
    title: "Learn Thai – Alphabet",
    body: "We designed, created, and maintain this iOS app that teaches the Thai alphabet through repetition and a native Thai speaker.",
    tech: ["Swift", "Core Animation"],
    link: "https://apps.apple.com/us/app/learn-thai-alphabet/id1505140057",
  },
  {
    image: functionCalcIcon,
    type: "iOS · Utilities",
    title: "FunctionCalc",
    body: "We designed, created, and maintain FunctionCalc — an all-in-one calculator and toolkit (VA disability calculator, date tracker, tip splitter, unit converter, and more) built for veterans, now in its fourth major revision.",
    tech: ["SwiftUI"],
    link: "https://apps.apple.com/us/app/functioncalc/id1455028714",
  },
  {
    image: calorieCalcIcon,
    type: "iOS · Health & Fitness",
    title: "CalorieCalc – Averaging",
    body: "We designed, created, and maintain CalorieCalc – Averaging, a stripped-down calorie tracker with no social feeds or upsells — just fast logging and the weekly averaging the big trackers leave out.",
    tech: ["SwiftUI"],
    link: "https://apps.apple.com/us/app/caloriecalc-averaging/id6762500390",
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
          <h2 className="section-title">Engineering across the stack</h2>
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

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow accent-text">Selected Work</p>
          <h2 className="section-title">Built, shipped, in production</h2>
          <p className="section-lead">
            From aviation training platforms to full-stack business systems — a
            sample of work delivered through Lawler Innovations.
          </p>
          <div className="project-grid" style={{ marginTop: 48 }}>
            {projects.map((p) => (
              <div className="project-card" key={p.title}>
                <div className="thumb" aria-hidden>
                  {p.image ? (
                    <img className="pc-appicon" src={p.image} alt="" />
                  ) : p.logo ? (
                    <img className="pc-logo" src={p.logo} alt="" />
                  ) : p.brand ? (
                    <span className="pc-wordmark">{p.brand}</span>
                  ) : (
                    p.icon
                  )}
                </div>
                <div className="pc-body">
                  <p className="pc-type">
                    {p.type.split(/(visionOS|iOS)/).map((part, i) =>
                      part === "iOS" || part === "visionOS" ? (
                        <span key={i} className="pc-type__ios">
                          {part}
                        </span>
                      ) : (
                        part
                      ),
                    )}
                  </p>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                  <div className="chip-row">
                    {p.tech.map((t) => (
                      <span className="chip" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  {p.link && (
                    <a
                      className="pc-link"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {p.link.includes("apps.apple.com")
                        ? "View on the App Store ↗"
                        : "Visit the site ↗"}
                    </a>
                  )}
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
