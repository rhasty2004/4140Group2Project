import './App.css'

function App() {
const topics = [
{
icon: '🚌',
title: 'Transit Basics',
description:
'Learn how public transportation works and discover the different ways to get around.'
},
{
icon: '🗺️',
title: 'Routes & Stops',
description:
'Learn how to read route maps, identify bus stops, and understand transit schedules.'
},
{
icon: '🎫',
title: 'Fares & Payments',
description:
'Understand transit fares, tickets, transit cards, and payment options.'
},
{
icon: '📍',
title: 'Planning a Trip',
description:
'Follow a simple guide to choosing a route and planning a successful journey.'
}
]

return (
<div className="app">
  <nav className="navbar">
    <h1>Transit Finder</h1>
    <div className="nav-links">
      <a href="#learn">Learn</a>
      <a href="#how-it-works">How It Works</a>
      <a href="#resources">Local Resources</a>
    </div>
  </nav>
  <main>
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">YOUR GUIDE TO PUBLIC TRANSPORTATION</p>
        <h1>Public Transit Made Simple.</h1>
        <p className="hero-description">
          Learn how to navigate public transportation with
          confidence. Understand routes, find stops, learn about
          fares, and plan your next trip.
        </p>
        <div className="hero-buttons">
          <a href="#learn" className="button primary">
            Start Learning
          </a>
          <a href="#how-it-works" className="button secondary">
            How It Works
          </a>
        </div>
      </div>
    </section>
    <section className="learning-section" id="learn">
      <div className="section-heading">
        <p className="eyebrow">EXPLORE AND LEARN</p>
        <h2>Everything You Need to Know</h2>
        <p>
          Build your transit knowledge one step at a time.
        </p>
      </div>
      <div className="topic-grid">
        {topics.map((topic) => (
          <article className="topic-card" key={topic.title}>
            <div className="topic-icon">{topic.icon}</div>
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <a href="#how-it-works">Learn more →</a>
          </article>
        ))}
      </div>
    </section>
    <section className="steps-section" id="how-it-works">
      <div className="section-heading">
        <p className="eyebrow">THREE SIMPLE STEPS</p>
        <h2>Your First Transit Trip</h2>
        <p>
          Using public transportation is easier when you know
          what to expect.
        </p>
      </div>
      <div className="steps-grid">
        <article className="step">
          <span>01</span>
          <h3>Find Your Route</h3>
          <p>
            Learn how to identify the right route for your
            destination.
          </p>
        </article>
        <article className="step">
          <span>02</span>
          <h3>Locate Your Stop</h3>
          <p>
            Find the correct stop and learn how to check
            schedules.
          </p>
        </article>
        <article className="step">
          <span>03</span>
          <h3>Ride With Confidence</h3>
          <p>
            Understand fares, boarding, and knowing when
            to get off.
          </p>
        </article>
      </div>
    </section>
    <section className="resources-section" id="resources">
      <div>
        <p className="eyebrow">YOUR COMMUNITY</p>
        <h2>Explore Local Transit Resources</h2>
        <p>
          Every community is different. Find local transit
          websites, route maps, fare guides, and educational
          materials to help you get started.
        </p>
      </div>
      <a href="https://www.transit.dot.gov/" target="_blank" rel="noreferrer" className="button primary">
        Explore Transit Information
      </a>
    </section>
  </main>
  <footer>
    <p>Transit Finder · Making public transportation easier to understand.</p>
  </footer>
</div>

)
}

export default App