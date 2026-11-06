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
     if (getPageFromHash() !== 'Games') window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])

  if (page && lessons[page]) {
    return <LessonPage lesson={lessons[page]} />
  }

  return <HomePage />
}

function BackToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisible = () => {
      if (window.pageYOffset > 300) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      type="button"
      className="back-to-top"
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  )
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
          <a href='#Games'>Play</a>
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

<GameSection />

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
	  <BackToTopButton />
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

	  <BackToTopButton />
    </div>
  )
}

function TransitQuiz() {
  const questions = [
    {
      question: 'A bus goes from the Library to the Park to the Museum. Which direction should you ride to reach the Museum?',
      options: ['Toward the Museum', 'Away from the Museum', 'Either direction'],
      answer: 0,
    },
    {
      question: 'What should you check before boarding a bus?',
      options: [
        'The color of the bus',
        'The route number and direction',
        'The number of passengers',
      ],
      answer: 1,
    },
    {
      question: 'What should you do when the bus arrives?',
      options: [
        'Board before anyone exits',
        'Let passengers exit first',
        'Stand in front of the doors',
      ],
      answer: 1,
    },
	{
	  question: 'What is a helpful habit when waiting for and boarding a transit vehicle?',
	  options: [
		'Stand directly in front of the closing doors',
		'Wait until the vehicle starts moving to look for your fare',
		'Arrive a little early',
	  ],
	  answer: 2,
	},
	{
	  question: 'When using a trip planner, what should you review before choosing your route?',
	  options: [
		'Only the color of the bus stop sign',
		'Departure times, walking distances, and transfers',
		'The driver’s schedule for the weekend'
	  ],
	  answer: 1,
	},
  ]

  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)

  const question = questions[questionIndex]

  function selectAnswer(index) {
    setSelectedAnswer(index)

    if (index === question.answer) {
      setScore(score + 1)
    }
  }

  function nextQuestion() {
    if (questionIndex === questions.length - 1) {
      setFinished(true)
    } else {
      setQuestionIndex(questionIndex + 1)
      setSelectedAnswer(null)
    }
  }

  function playAgain() {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setFinished(false)
  }

  return (
    <section className="steps-section">
      <div className="section-heading">
        <p className="eyebrow">READY TO PLAY?</p>
        <h2>Test Your Transit Knowledge</h2>
        <p>Try this quick quiz to practice what you learned.</p>
      </div>

      <div
        className="step-card"
        style={{ maxWidth: '650px', margin: '0 auto' }}
      >
        {finished ? (
          <div>
            <h3>Quiz complete!</h3>
            <p>You scored {score} out of {questions.length}.</p>
            <button className="button primary" type="button" onClick={playAgain}>
              Play Again
            </button>
          </div>
        ) : (
          <div>
            <p>Question {questionIndex + 1} of {questions.length}</p>
            <h3>{question.question}</h3>

            {question.options.map((option, index) => (
              <button
                key={option}
                type="button"
                className="button secondary"
                style={{ display: 'block', margin: '10px auto' }}
                disabled={selectedAnswer !== null}
                onClick={() => selectAnswer(index)}
              >
                {option}
              </button>
            ))}

            {selectedAnswer !== null && (
              <div aria-live="polite">
                <p>
                  {selectedAnswer === question.answer
                    ? 'Correct!'
                    : `Not quite. The answer is: ${question.options[question.answer]}.`}
                </p>
                <button className="button primary" type="button" onClick={nextQuestion}>
                  {questionIndex === questions.length - 1
                    ? 'See Results'
                    : 'Next Question'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}


function RouteGame() {
  const connections = {
    Library: ['Park', 'Market'],
    Park: ['Library', 'Museum'],
    Market: ['Library', 'Station'],
    Station: ['Market', 'Museum'],
    Museum: ['Park', 'Station'],
  }

  const [route, setRoute] = useState(['Library'])
  const currentStop = route[route.length - 1]
  const arrived = currentStop === 'Museum'

  function visitStop(stop) {
    setRoute([...route, stop])
  }

  function startOver() {
    setRoute(['Library'])
  }

  return (
    <section className="learning-section" aria-labelledby="route-game-title">
      <div className="section-heading">
        <p className="eyebrow">PLAN A TRIP</p>
        <h2 id="route-game-title">Find Your Route</h2>
        <p>
          Travel from the Library to the Museum.
          Choose one connected stop at a time.
        </p>
      </div>

      <div
        className="step-card"
        style={{ maxWidth: '650px', margin: '0 auto' }}
      >
        <h3>Bus connections</h3>
        <p>Library ↔ Park ↔ Museum</p>
        <p>Library ↔ Market ↔ Station ↔ Museum</p>

        <div aria-live="polite" style={{ margin: '20px 0' }}>
          <p><strong>Current stop:</strong> {currentStop}</p>
          <p><strong>Your route:</strong> {route.join(' → ')}</p>
          {arrived && <p>You made it in {route.length - 1} stops!</p>}
        </div>

        {!arrived && (
          <div>
            <p>Choose your next stop:</p>
            {connections[currentStop].map((stop) => (
              <button
                key={stop}
                className="button secondary"
                type="button"
                style={{ margin: '8px' }}
                onClick={() => visitStop(stop)}
              >
                {stop}
              </button>
            ))}
          </div>
        )}

        <button className="button primary" type="button" onClick={startOver}>
          {arrived ? 'Play Again' : 'Start Over'}
        </button>
      </div>
    </section>
  )
}

function GameSection() {
  const [game, setGame] = useState(null)

  return (
    <section id="Games">
      {game === null ? (
        <div className="steps-section">
          <div className="section-heading">
            <p className="eyebrow">READY TO PLAY?</p>
            <h2>Choose a Game</h2>
            <p>Test your knowledge or practice planning a route.</p>

            <div className="hero-buttons">
              <button
                className="button primary"
                type="button"
                onClick={() => setGame('quiz')}
              >
                Transit Quiz
              </button>

              <button
                className="button secondary"
                type="button"
                onClick={() => setGame('route')}
              >
                Find Your Route
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div style={{ textAlign: 'center', paddingTop: '30px' }}>
            <button
              className="button secondary"
              type="button"
              onClick={() => setGame(null)}
            >
              ← Choose Another Game
            </button>
          </div>

          {game === 'quiz' && <TransitQuiz />}
          {game === 'route' && <RouteGame />}
        </div>
      )}
    </section>
  )
}

export default App
