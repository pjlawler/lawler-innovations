import { Link } from "react-router-dom"
import patLawler from "../assets/pat-lawler.webp"

const creds = [
  "USAF (Ret.) · Veteran",
  "ATP · 4,500+ flight hours",
  "Platinum Cirrus CSIP",
  "Full-Stack Engineer",
  "M.S. Aeronautical Science",
]

function About() {
  return (
    <main>
      <section className="section">
        <div className="container">
          <Link to="/" className="back-link">
            ← Lawler Innovations
          </Link>
          <p className="eyebrow accent-text" style={{ marginTop: 20 }}>
            Our Story
          </p>
          <h1 className="section-title">Why Lawler Innovations exists</h1>
          <div className="about-story">
            <p>
              Lawler Innovations began in 2014 as Aquila Aviation, a venture
              built around Pat Lawler's aviation expertise — contract piloting
              and flight instruction. As the work grew well beyond the cockpit,
              the company was reformed in 2019 as Lawler Innovations, Inc. to
              bring the full breadth of his experience under one roof.
            </p>
            <p>
              The idea is simple but uncommon: aviation and software, in the same
              shop. A pilot's procedural rigor sharpens the code; an engineer's
              systems thinking sharpens the flying. Lawler Innovations exists to
              put that rare combination to work for clients who need either — or
              both — done right.
            </p>
          </div>
        </div>
      </section>

      <section className="section about-section">
        <div className="container">
          <div className="about-body">
            <div className="about-header">
              <div className="about-photo">
                <img
                  src={patLawler}
                  alt="Pat Lawler, Founder & President of Lawler Innovations"
                  width={640}
                  height={784}
                />
              </div>
              <div className="about-title">
                <p className="eyebrow">Leadership</p>
                <h2>Pat Lawler</h2>
                <p className="role">Founder &amp; President</p>
              </div>
            </div>
            <p>
              A Master Sergeant in the U.S. Air Force (Ret.), Pat spent a career
              as a military avionics technician and instructor — learning to
              break a complex system down, find the real problem, and teach the
              next person to do the same.
            </p>
            <p>
              He carries that same discipline into the cockpit and the codebase:
              a dual-rated Airline Transport Pilot with more than 4,500 flight
              hours and a Platinum Cirrus Standardized Instructor Pilot, as well
              as a largely self-taught software engineer who sharpened
              that foundation in the University of Minnesota's six-month
              Full-Stack Developer bootcamp, graduating with a 99.48 out of 100.
              He also holds a master's in Aeronautical Science. He founded Lawler
              Innovations to bring both worlds under one roof — contract piloting,
              flight instruction, and custom software.
            </p>
            <div className="about-creds">
              {creds.map((c) => (
                <span className="chip" key={c}>
                  {c}
                </span>
              ))}
            </div>
            <a
              className="btn btn-ghost about-more"
              href="https://patlawler.com"
              target="_blank"
              rel="noreferrer"
            >
              More about Pat at patlawler.com ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
