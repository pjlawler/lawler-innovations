import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="split">
      <div className="split-seal">
        <div className="tag">Lawler Innovations, Inc.</div>
        <h1>One company. Two disciplines.</h1>
      </div>

      <div
        className="split-pane sw"
        onClick={() => navigate("/software")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && navigate("/software")}
      >
        <span className="texture" />
        <div className="pane-content">
          <div className="pane-kicker">Build</div>
          <h2>Software Engineering</h2>
          <p>
            Custom web, cloud, and mobile software — engineered with real
            technical depth and shipped to production.
          </p>
          <span className="pane-enter">
            Enter Software <span aria-hidden>→</span>
          </span>
        </div>
      </div>

      <div
        className="split-pane av"
        onClick={() => navigate("/aviation")}
        role="link"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && navigate("/aviation")}
      >
        <span className="texture" />
        <div className="pane-content">
          <div className="pane-kicker">Fly</div>
          <h2>Aviation Services</h2>
          <p>
            Contract piloting, flight instruction, and operational expertise
            from a veteran aviator you can trust.
          </p>
          <span className="pane-enter">
            Enter Aviation <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
