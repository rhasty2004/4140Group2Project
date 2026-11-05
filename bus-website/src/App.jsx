import { useEffect, useState } from 'react'
import './App.css'

const lessons = {
  'transit-basics': {
   // icon: '🚌',
    title: 'Transit Basics',
    intro: 'Learn what to expect when you take public transportation.',
    sections: [
      {
        heading: 'What is public transit?',
        text: 'Public transit is shared transportation—such as buses, trains, and streetcars—that follows routes and stops so people can travel around their community.',
      },
      {
        heading: 'What happens on a trip?',
        text: 'You find a route, go to one of its stops, pay the fare, and ride until you reach a stop near your destination. Signs and announcements can help you know where you are.',
      },
      {
        heading: 'A few helpful habits',
        text: 'Arrive a little early, let passengers exit before you board, and keep your fare or transit card ready. If you are unsure, ask the driver or another transit employee.',
      },
    ],
  },
  'routes-stops': {
   // icon: '📍',
    title: 'Routes & Stops',
    intro: 'Understand route numbers, maps, and the stops along the way.',
    sections: [
      {
        heading: 'Find the right route',
        text: 'A route is the path a bus or train follows. Check the route number or name and make sure it is going in the direction you need.',
      },
      {
        heading: 'Choose your stop',
        text: 'Look for a stop near where you are starting and another near your destination. Route maps show where vehicles travel; stop signs usually show which routes serve that location.',
      },
      {
        heading: 'Check the schedule',
        text: 'Schedules show when service is expected. Some routes run more often than others, and times may differ on weekends or holidays. Check the transit agency’s latest schedule before leaving.',
      },
    ],
  },
  'fares-payments': {
    icon: '🎫',
    title: 'Fares & Payments',
    intro: 'Learn about common ways to pay for a transit ride.',
    sections: [
      {
        heading: 'Common payment options',
        text: 'Depending on your local transit system, you may be able to pay with cash, a reusable transit card, a ticket, or a mobile app.',
      },
      {
        heading: 'Check before you travel',
        text: 'Fare prices and payment rules vary by city and transit agency. Check whether you need exact change, should buy a ticket in advance, or need to tap a card when boarding.',
      },
      {
        heading: 'Keep your fare ready',
        text: 'Have your payment ready as you board. If you use a card or phone, follow the instructions on the reader. Keep your ticket or card with you during the ride.',
      },
    ],
  },
  'planning-a-trip': {
    icon: '🗺️',
    title: 'Planning a Trip',
    intro: 'Follow a few simple steps to prepare for your next journey.',
    sections: [
      {
        heading: '1. Enter your start and destination',
        text: 'Use your local transit agency’s trip planner or map. Add the address or place you are leaving from and where you want to go.',
      },
      {
        heading: '2. Review your options',
        text: 'Compare departure times, routes, walking distances, and transfers. Choose a trip that gives you enough time to reach the stop.',
      },
      {
        heading: '3. Travel and follow your route',
        text: 'Go to the correct stop and check the route sign before boarding. Watch for announcements or map landmarks so you know when to get off.',
      },
    ],
  },
}

const topics = [
  {
    id: 'transit-basics',
   // icon: '🚌',
    title: 'Transit Basics',
    description: 'Learn how public transportation works and what to expect on your first ride.',
  },
  {
    id: 'routes-stops',
   // icon: '📍',
    title: 'Routes & Stops',
    description: 'Find your route, read a map, and know where to board and get off.',
  },
  {
    id: 'fares-payments',
   // icon: '🎫',
    title: 'Fares & Payments',
    description: 'Explore common ways to pay and prepare your fare before boarding.',
  },
  {
    id: 'planning-a-trip',
   // icon: '🗺️',
    title: 'Planning a Trip',
    description: 'Plan a journey step by step, from your starting point to your destination.',
  },
]

function App() {
  const [page, setPage] = useState(getPageFromHash)

  useEffect(() => {
    function updatePage() {
      setPage(getPageFromHash())
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  if (page && lessons[page]) {
    return <LessonPage lesson={lessons[page]} />
  }

  return <HomePage />
}

function getPageFromHash() {
  return window.location.hash.replace('#', '')
}

function HomePage() {
  return (
    <div className="app">
      <nav className="navbar">
        <a className="logo" href="#">Transit Finder</a>

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
              Learn how to navigate public transportation with confidence.
              Understand routes, find stops, learn about fares, and plan your next trip.
            </p>
            <div className="hero-buttons">
              <a href="#learn" className="button primary">Start Learning</a>
              <a href="#how-it-works" className="button secondary">How It Works</a>
            </div>
          </div>
        </section>

        <section className="learning-section" id="learn">
          <div className="section-heading">
            <p className="eyebrow">EXPLORE AND LEARN</p>
            <h2>Everything You Need to Know</h2>
            <p>Build your transit knowledge one step at a time.</p>
          </div>

          <div className="topic-grid">
            {topics.map((topic) => (
              <a className="topic-card" href={`#${topic.id}`} key={topic.id}>
                <span className="topic-icon" aria-hidden="true">{topic.icon}</span>
                <h3>{topic.title}</h3>
                <p>{topic.description}</p>
                <span className="learn-more">Learn more →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="steps-section" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">THREE SIMPLE STEPS</p>
            <h2>Your First Transit Trip</h2>
            <p>Using public transportation is easier when you know what to expect.</p>
          </div>

          <div className="steps-grid">
            <article className="step-card">
              <span className="step-number">1</span>
              <h3>Plan your route</h3>
              <p>Choose where you are going and find a route that gets you there.</p>
            </article>
            <article className="step-card">
              <span className="step-number">2</span>
              <h3>Get ready to ride</h3>
              <p>Check the schedule, find your stop, and have your fare ready.</p>
            </article>
            <article className="step-card">
              <span className="step-number">3</span>
              <h3>Follow your trip</h3>
              <p>Board the right vehicle and watch for your destination stop.</p>
            </article>
          </div>
        </section>

<section className="resources-section" id="resources">
  <div>
    <p className="eyebrow">YOUR COMMUNITY</p>
    <h2>Check Local Transit Information</h2>
    <p>
      Routes, schedules, fares, and payment options depend on where you live.
      Visit your local transit agency’s website for the latest information.
    </p>

    <a
      className="button primary"
      href="https://www.apta.com/membership/our-members/transit-agencies/"
      target="_blank"
      rel="noreferrer"
    >
      Find a Transit Agency
    </a>
  </div>
</section>
      </main>

      <footer>
        <p>Transit Finder · A friendly guide to getting around</p>
      </footer>
    </div>
  )
}

function LessonPage({ lesson }) {
  return (
    <div className="app lesson-page">
      <nav className="navbar">
        <a className="logo" href="#">Transit Finder</a>
        <a className="home-link" href="#">← Back to Home</a>
      </nav>

      <main>
        <section className="lesson-hero">
          <a className="back-link" href="#">← All learning topics</a>
          <span className="lesson-icon" aria-hidden="true">{lesson.icon}</span>
          <p className="eyebrow">TRANSIT LEARNING GUIDE</p>
          <h1>{lesson.title}</h1>
          <p className="hero-description">{lesson.intro}</p>
        </section>

        <section className="lesson-content">
          {lesson.sections.map((section) => (
            <article className="lesson-card" key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.text}</p>
            </article>
          ))}

          <a className="button primary lesson-home-button" href="#">
            Back to Transit Finder
          </a>
        </section>
      </main>

      <footer>
        <p>Transit Finder · A friendly guide to getting around</p>
      </footer>
    </div>
  )
}

export default App