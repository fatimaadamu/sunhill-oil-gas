import { useEffect, useState } from 'react'
import sandhillLogo from './assets/sandhill/sandhill-logo.png'
import fleetTruck from './assets/sandhill/fleet-truck.jpeg'
import lpgCylinders from './assets/sandhill/lpg-cylinders.jpeg'
import operationsTeam from './assets/sandhill/operations-team.jpeg'
import logisticsYard from './assets/sandhill/logistics-yard.jpg'
import cylinder6kg from './assets/sandhill/cylinder-6kg.jpg'
import cylinder145kg from './assets/sandhill/cylinder-14-5kg.jpg'
import cylinder52kg from './assets/sandhill/cylinder-52kg.jpg'
import assistantManagerPortrait from './assets/sandhill/cylinder-lineup.jpeg'
import ceoPortrait from './assets/sandhill/cylinder-stack.jpeg'
import salesManagerPortrait from './assets/sandhill/sales-marketing-manager.jpeg'
import './App.css'

const WHATSAPP_NUMBER = '233241291681'

const whatsappLinks = {
  general: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Sandhill Oil & Gas Ltd, I would like to make an LPG enquiry.',
  )}`,
  order: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Sandhill Oil & Gas Ltd, I would like to order an LPG cylinder and confirm the current price.',
  )}`,
  sixKg: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Sandhill Oil & Gas Ltd, please send me the latest price for a 6kg LPG cylinder.',
  )}`,
  fourteenKg: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Sandhill Oil & Gas Ltd, please send me the latest price for a 14.5kg LPG cylinder.',
  )}`,
  fiftyTwoKg: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    'Hello Sandhill Oil & Gas Ltd, please send me the latest price for a 52kg LPG cylinder.',
  )}`,
}

const routes = [
  { id: 'home', label: 'Home', path: '#/' },
  { id: 'about', label: 'About', path: '#/about' },
  { id: 'people', label: 'People', path: '#/people' },
  { id: 'lpg', label: 'LPG Solutions', path: '#/lpg' },
  { id: 'commercial', label: 'Commercial Supply', path: '#/commercial' },
  { id: 'network', label: 'Network', path: '#/network' },
  { id: 'fleet', label: 'Fleet', path: '#/fleet' },
  { id: 'safety', label: 'Safety', path: '#/safety' },
  { id: 'why', label: 'Why Sandhill', path: '#/why' },
  { id: 'partners', label: 'Partners', path: '#/partners' },
  { id: 'contact', label: 'Contact', path: '#/contact' },
]

const routeIds = new Set(routes.map((route) => route.id))

const lpgSolutions = [
  {
    title: 'World-class LPG bottling',
    text: 'Support for LPG bottling plant operations, filling discipline, and safe handling workflows.',
  },
  {
    title: 'Reliable LPG supply',
    text: 'Supply support for homes, businesses, and industries using LPG for daily energy needs.',
  },
  {
    title: 'Sustainable energy solutions',
    text: 'LPG-focused solutions positioned as a cleaner energy option than traditional fuels.',
  },
  {
    title: 'Technical support and expertise',
    text: 'Advisory and hands-on support to help customers use LPG safely and efficiently.',
  },
  {
    title: 'Cylinder management and safety',
    text: 'Cylinder handling, inspection, maintenance, and tracking as part of responsible LPG service.',
  },
]

const commercialCards = [
  'Household LPG supply support',
  'Business and institutional enquiries',
  'Industry-focused energy support',
  'LPG bottling plant development',
  'Cylinder lifecycle management',
]

const operatingPrinciples = [
  {
    title: 'Safety and responsibility',
    text: 'Public Sandhill materials place health, safety, communities, and environmental care at the center of operations.',
  },
  {
    title: 'Operational discipline',
    text: 'The brand is positioned around dependable LPG supply, bottling plant operations, and cylinder management.',
  },
  {
    title: 'Customer clarity',
    text: 'The redesigned site makes ordering, WhatsApp enquiries, and commercial supply conversations easier to start.',
  },
  {
    title: 'Regional energy focus',
    text: 'Sandhill publicly describes LPG solutions across Ghana and West Africa without publishing exact coverage counts.',
  },
]

const credibilityTiles = [
  'Doorstep LPG delivery',
  'WhatsApp ordering',
  'Cylinder management',
  'Commercial supply enquiries',
]

const cylinders = [
  {
    size: '6kg',
    label: 'Household LPG Cylinder',
    bestFor: 'Small households, students, and light cooking.',
    image: cylinder6kg,
    photoClass: 'cylinder-photo-small',
    link: whatsappLinks.sixKg,
  },
  {
    size: '14.5kg',
    label: 'Family LPG Cylinder',
    bestFor: 'Regular family cooking and everyday household use.',
    image: cylinder145kg,
    photoClass: 'cylinder-photo-medium',
    link: whatsappLinks.fourteenKg,
  },
  {
    size: '52kg',
    label: 'Commercial/Industrial LPG Cylinder',
    bestFor: 'Restaurants, businesses, institutions, and heavy use.',
    image: cylinder52kg,
    photoClass: 'cylinder-photo-tall',
    link: whatsappLinks.fiftyTwoKg,
  },
]

const serviceAdvantages = [
  {
    title: 'Doorstep Delivery',
    text: 'We bring LPG directly to your location.',
  },
  {
    title: 'Safe Certified Cylinders',
    text: 'Professionally inspected and maintained cylinders.',
  },
  {
    title: 'Fast Response',
    text: 'Quick deliveries across our service areas.',
  },
  {
    title: 'Trusted Customer Service',
    text: 'Friendly support before and after every order.',
  },
]

const comparisonColumns = [
  {
    title: 'Most LPG Suppliers',
    items: ['Pick-up required', 'Limited customer support', 'Standard service'],
  },
  {
    title: 'Sandhill Oil & Gas',
    featured: true,
    items: [
      'Doorstep delivery',
      'WhatsApp ordering',
      'Fast response',
      'Reliable supply',
      'Professional customer care',
    ],
  },
]

const networkItems = [
  'Ghana operations',
  'West Africa supply focus',
  'Bottling plant infrastructure',
  'Cylinder movement',
  'Customer delivery support',
]

const fleetItems = [
  'Cylinder loading and movement',
  'Publicly visible branded LPG vehicles',
  'Customer delivery enquiries',
  'Operations team coordination',
]

const safetyItems = [
  'HSE culture focused on employees, communities, and environmental protection.',
  'Safety integration across bottling plant design, construction, and daily operations.',
  'Cylinder management practices that support safe handling and responsible use.',
  'Operational discipline around distribution networks and LPG handling procedures.',
]

const choiceItems = [
  {
    title: 'Visible operating brand',
    text: 'Public Sandhill materials show branded LPG teams, vehicles, cylinders, and customer-facing activity.',
  },
  {
    title: 'LPG infrastructure focus',
    text: 'The company publicly positions itself around LPG supply, bottling plant operations, and technical support.',
  },
  {
    title: 'Safety-led message',
    text: 'Sandhill publishes HSE commitments covering people, communities, and the environment.',
  },
  {
    title: 'Commercial clarity',
    text: 'The site keeps enquiry paths direct and avoids unverifiable promises, figures, or licence claims.',
  },
]

const partnerItems = [
  'Commercial customers',
  'Industry buyers',
  'LPG distribution participants',
  'Bottling plant stakeholders',
  'Public brand collaborations',
  'PUMAGAS-branded public operations',
]

const peopleProfiles = [
  {
    name: 'Alhaji Abdulrazak Ibrahim Innayi',
    role: 'Chief Executive Officer',
    image: ceoPortrait,
    text: 'Sandhill identifies Alhaji Abdulrazak Ibrahim Innayi as Chief Executive Officer, with leadership messaging centered on sustainable growth, operational excellence, and innovation.',
  },
  {
    name: 'Sales Operations Management',
    role: 'Assistant Sales and Marketing Manager',
    image: assistantManagerPortrait,
    text: 'This role supports sales operations, client relationships, marketing activity, dispatch supervision, and delivery coordination.',
  },
  {
    name: 'Commercial Growth Management',
    role: 'Sales and Marketing Manager',
    image: salesManagerPortrait,
    text: 'This role focuses on visibility, sales growth, customer insight, team leadership, and trusted commercial relationships.',
  },
]

const employeeGroups = [
  'Cylinder handling teams',
  'Delivery riders and dispatch support',
  'Fleet and loading crew',
  'Customer service and sales support',
  'Technical and safety support',
  'Operations coordination',
]

function routeFromHash() {
  const id = window.location.hash.replace(/^#\/?/, '') || 'home'
  return routeIds.has(id) ? id : 'home'
}

function App() {
  const [activeRoute, setActiveRoute] = useState(routeFromHash)

  useEffect(() => {
    const handleHashChange = () => setActiveRoute(routeFromHash())

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    const route = routes.find((item) => item.id === activeRoute)
    document.title = `${route?.label || 'Home'} | Sandhill Oil & Gas Ltd`
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeRoute])

  return (
    <div className="site-shell">
      <Header activeRoute={activeRoute} />
      <main>{renderPage(activeRoute)}</main>
      <Footer />
    </div>
  )
}

function Header({ activeRoute }) {
  return (
    <header className="site-header">
      <a className="brand-link" href="#/" aria-label="Sandhill Oil and Gas home">
        <img src={sandhillLogo} alt="Sandhill Oil and Gas Ltd" />
      </a>

      <nav className="site-nav" aria-label="Primary navigation">
        {routes.map((route) => (
          <a
            className={route.id === activeRoute ? 'is-active' : ''}
            href={route.path}
            aria-current={route.id === activeRoute ? 'page' : undefined}
            key={route.id}
          >
            {route.label}
          </a>
        ))}
      </nav>

      <a
        className="header-cta"
        href={whatsappLinks.general}
        rel="noreferrer"
        target="_blank"
      >
        Enquire
      </a>
    </header>
  )
}

function renderPage(activeRoute) {
  switch (activeRoute) {
    case 'about':
      return <AboutPage />
    case 'people':
      return <PeoplePage />
    case 'lpg':
      return <LpgPage />
    case 'commercial':
      return <CommercialPage />
    case 'network':
      return <NetworkPage />
    case 'fleet':
      return <FleetPage />
    case 'safety':
      return <SafetyPage />
    case 'why':
      return <WhyPage />
    case 'partners':
      return <PartnersPage />
    case 'contact':
      return <ContactPage />
    default:
      return <HomePage />
  }
}

function PageHero({ kicker, title, text, image, dark = false }) {
  return (
    <section className={`page-hero ${dark ? 'page-hero-dark' : ''}`}>
      <div className="section-container page-hero-grid">
        <div>
          <p className="eyebrow">{kicker}</p>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
        <div className="page-hero-image">
          <img src={image} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <>
      <section
        className="home-hero"
        style={{ '--hero-image': `url(${fleetTruck})` }}
      >
        <div className="home-hero-overlay">
          <div className="section-container home-hero-grid">
            <div className="home-hero-copy">
              <p className="eyebrow">LPG infrastructure and supply</p>
              <h1>Reliable Doorstep LPG Delivery</h1>
              <p>
                Sandhill delivers LPG safely and conveniently to homes,
                businesses, restaurants, schools, offices, and institutions, so
                customers do not need to travel to refill or exchange cylinders.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-red"
                  href={whatsappLinks.order}
                  rel="noreferrer"
                  target="_blank"
                >
                  Order Now
                </a>
                <a
                  className="button button-light"
                  href={whatsappLinks.general}
                  rel="noreferrer"
                  target="_blank"
                >
                  Contact Us on WhatsApp
                </a>
                <a
                  className="button button-outline"
                  href={whatsappLinks.general}
                  rel="noreferrer"
                  target="_blank"
                >
                  Get Quote
                </a>
              </div>
            </div>

            <aside className="home-proof">
              <img src={sandhillLogo} alt="" aria-hidden="true" />
              <p>
                Order on WhatsApp and let Sandhill coordinate safe LPG delivery
                to your doorstep.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <CylinderShowcase />

      <DeliveryAdvantage />

      <ComparisonSection />

      <section className="section intro-section">
        <div className="section-container route-card-grid">
          {routes.slice(1).map((route) => (
            <a className="route-card" href={route.path} key={route.id}>
              <span>{route.label}</span>
              <p>{routeIntro(route.id)}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="section proof-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Corporate confidence</p>
            <h2>A clearer public website for customers, partners, and institutions.</h2>
            <p>
              The refreshed experience gives Sandhill a stronger corporate
              front door while keeping the claims careful, verifiable, and easy
              to act on.
            </p>
          </div>
          <div className="proof-grid">
            {credibilityTiles.map((tile) => (
              <article className="proof-card" key={tile}>
                <span></span>
                <h3>{tile}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-split">
        <div className="section-container release-cta">
          <p className="section-kicker">Public brand foundation</p>
          <h2>Built from Sandhill's real public brand and a clear delivery promise.</h2>
          <p>
            The website avoids repeated photo blocks on the homepage and keeps
            the focus on ordering, cylinder range, doorstep delivery, and
            professional LPG service.
          </p>
          <div className="release-actions">
            <a className="button button-dark" href="#/about">
              Read About Sandhill
            </a>
            <a className="button button-red" href="#/people">
              View Leadership
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function routeIntro(id) {
  const intros = {
    about: 'Company background, public positioning, and verified Sandhill context.',
    people: 'Managers, leadership profile, field employees, and operations culture.',
    lpg: 'Bottling, supply, sustainable LPG, technical support, and cylinder safety.',
    commercial: 'Structured supply enquiries for homes, businesses, and industries.',
    network: 'Ghana and West Africa supply focus, cylinder movement, and delivery support.',
    fleet: 'Operational LPG logistics using Sandhill public imagery.',
    safety: 'HSE and quality messaging grounded in public Sandhill statements.',
    why: 'Reasons to choose Sandhill, without invented metrics or claims.',
    partners: 'Partner-facing information and careful public brand references.',
    contact: 'Verified public contact details and enquiry pathways.',
  }

  return intros[id]
}

function CylinderShowcase() {
  return (
    <section className="section cylinder-section">
      <div className="section-container">
        <div className="cylinder-heading">
          <div>
            <p className="section-kicker">Products</p>
            <h2>Our LPG Cylinder Range</h2>
          </div>
          <p>
            LPG prices change periodically in line with market conditions.
            Please contact us on WhatsApp for today's prices and availability.
          </p>
        </div>

        <div className="cylinder-grid">
          {cylinders.map((cylinder) => (
            <article className="cylinder-card" key={cylinder.size}>
              <div className={`cylinder-photo ${cylinder.photoClass}`}>
                <img src={cylinder.image} alt={`${cylinder.label} - ${cylinder.size}`} />
                <span>{cylinder.size}</span>
              </div>
              <div className="cylinder-copy">
                <span>{cylinder.size} capacity</span>
                <h3>{cylinder.label}</h3>
                <dl>
                  <div>
                    <dt>Best suited for</dt>
                    <dd>{cylinder.bestFor}</dd>
                  </div>
                  <div>
                    <dt>Safety</dt>
                    <dd>Safety certified cylinders</dd>
                  </div>
                </dl>
                <a
                  className="button button-red"
                  href={cylinder.link}
                  rel="noreferrer"
                  target="_blank"
                >
                  Order {cylinder.size} on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="price-note">
          <strong>Price notice:</strong> LPG prices change periodically in line
          with market conditions. Please contact us on WhatsApp for today's
          prices and availability.
        </div>
      </div>
    </section>
  )
}

function DeliveryAdvantage() {
  return (
    <section className="section delivery-section">
      <div className="section-container">
        <div className="section-heading">
          <p className="section-kicker">Our unique advantage</p>
          <h2>Reliable Doorstep LPG Delivery</h2>
          <p>
            Customers do not need to travel to refill or exchange cylinders.
            Sandhill delivers safely and conveniently to homes, businesses,
            restaurants, schools, offices, and institutions.
          </p>
        </div>

        <div className="advantage-grid">
          {serviceAdvantages.map((item) => (
            <article className="advantage-card" key={item.title}>
              <span aria-hidden="true">✓</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ComparisonSection() {
  return (
    <section className="section comparison-section">
      <div className="section-container comparison-wrap">
        <div className="section-heading">
          <p className="section-kicker">Why Choose Sandhill?</p>
          <h2>A more convenient LPG ordering experience.</h2>
        </div>

        <div className="comparison-grid">
          {comparisonColumns.map((column) => (
            <article
              className={`comparison-card ${column.featured ? 'comparison-featured' : ''}`}
              key={column.title}
            >
              <h3>{column.title}</h3>
              <ul>
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <a
          className="button button-red"
          href={whatsappLinks.order}
          rel="noreferrer"
          target="_blank"
        >
          Order Now on WhatsApp
        </a>
      </div>
    </section>
  )
}

function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Sandhill"
        title="LPG infrastructure, supply discipline, and practical energy access."
        text="Sandhill Oil and Gas Company Limited describes its work as comprehensive LPG solutions across Ghana and West Africa."
        image={operationsTeam}
      />

      <section className="section">
        <div className="section-container split-grid">
          <div className="section-copy">
            <p className="section-kicker">Company profile</p>
            <h2>LPG infrastructure, bottling plant operations, and dependable supply.</h2>
            <p>
              Sandhill specializes in LPG bottling plant operations and energy
              supply support for households, businesses, and industries.
            </p>
            <div className="source-note">
              No unverified statistics, licence numbers, certifications, or
              expansion claims are added to this page.
            </div>
          </div>
          <div className="content-panel">
            <h3>Public positioning</h3>
            <ul>
              <li>Indigenous energy company</li>
              <li>LPG solutions across Ghana and West Africa</li>
              <li>Bottling plant and supply focus</li>
              <li>Safety, innovation, and sustainability themes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Operating principles</p>
            <h2>The business is presented around discipline, trust, and careful execution.</h2>
            <p>
              The page keeps the story focused on what Sandhill does, who it
              serves, and how enquiries should move forward.
            </p>
          </div>
          <div className="values-grid">
            {operatingPrinciples.map((item) => (
              <article className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-depth-section">
        <div className="section-container depth-grid">
          <div className="depth-panel depth-panel-red">
            <span>01</span>
            <h3>LPG supply and bottling focus</h3>
            <p>
              Messaging centers on Sandhill's public LPG work, including
              supply, bottling plant operations, technical support, and cylinder
              management.
            </p>
          </div>
          <div className="depth-panel">
            <span>02</span>
            <h3>Clear enquiry paths</h3>
            <p>
              Customers can move from product information to WhatsApp ordering,
              commercial enquiry, or partner contact without searching through
              scattered content.
            </p>
          </div>
          <div className="depth-panel">
            <span>03</span>
            <h3>People-led operations</h3>
            <p>
              The wider website gives proper space to the managers and
              employees behind the supply experience.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

function PeoplePage() {
  return (
    <>
      <PageHero
        kicker="Managers & Employees"
        title="The people behind Sandhill's LPG service experience."
        text="Leadership, sales management, dispatch coordination, field teams, and customer support all shape the Sandhill LPG service experience."
        image={operationsTeam}
        dark
      />

      <section className="section leadership-section">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Leadership and management</p>
            <h2>Clear role profiles for leadership and commercial operations.</h2>
            <p>
              Verified names are used only where they are publicly confirmed.
              Other management content is presented as role-level information.
            </p>
          </div>

          <div className="people-grid">
            {peopleProfiles.map((person) => (
              <article className="person-card" key={person.name}>
                <div className="person-photo">
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="person-copy">
                  <span>{person.role}</span>
                  <h3>{person.name}</h3>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section employee-section">
        <div className="section-container employee-grid">
          <div className="employee-image">
            <img src={logisticsYard} alt="Sandhill employees handling LPG cylinders" />
          </div>
          <div className="section-copy">
            <p className="section-kicker">Employees in operations</p>
            <h2>Field work, dispatch, and customer service are part of the brand experience.</h2>
            <p>
              Sandhill's operational imagery shows employees around LPG
              cylinders, branded clothing, delivery vehicles, and daily field
              activity. The site now gives that work proper space.
            </p>
            <div className="employee-list">
              {employeeGroups.map((group) => (
                <span key={group}>{group}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section people-standard-section">
        <div className="section-container standards-grid">
          <article>
            <h3>Customer-facing discipline</h3>
            <p>
              Sales and operations content now emphasizes clear communication,
              enquiry handling, and current pricing confirmation through
              WhatsApp.
            </p>
          </article>
          <article>
            <h3>Safe handling culture</h3>
            <p>
              Employee-facing messaging stays aligned with Sandhill's public
              HSE themes around people, communities, and the environment.
            </p>
          </article>
          <article>
            <h3>Professional presentation</h3>
            <p>
              The page avoids generic filler team cards and keeps people
              content credible, restrained, and premium.
            </p>
          </article>
        </div>
      </section>
    </>
  )
}

function LpgPage() {
  return (
    <>
      <PageHero
        kicker="LPG Solutions"
        title="End-to-end LPG support with safety and usability at the center."
        text="The public service areas listed by Sandhill include LPG bottling, reliable supply, sustainable energy solutions, technical support, and cylinder management."
        image={fleetTruck}
        dark
      />

      <CylinderShowcase />

      <section className="section section-navy">
        <div className="section-container">
          <div className="section-heading">
            <p className="section-kicker">Service areas</p>
            <h2>Core LPG solution areas from Sandhill's public materials.</h2>
          </div>
          <div className="solution-grid">
            {lpgSolutions.map((solution) => (
              <article className="solution-card" key={solution.title}>
                <span aria-hidden="true"></span>
                <h3>{solution.title}</h3>
                <p>{solution.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function CommercialPage() {
  return (
    <>
      <PageHero
        kicker="Commercial Supply"
        title="Structured LPG enquiries for operating customers."
        text="Sandhill's public materials refer to energy supply for homes, businesses, and industries. Commercial availability and fulfilment should be confirmed directly with the company."
        image={lpgCylinders}
      />

      <section className="section commercial-section">
        <div className="section-container split-grid">
          <div className="image-stack">
            <img src={logisticsYard} alt="Sandhill LPG cylinders being handled during logistics operations" />
            <div>
              <strong>Commercial supply support</strong>
              <span>Product availability and fulfilment should be confirmed directly with Sandhill.</span>
            </div>
          </div>
          <div className="section-copy">
            <p className="section-kicker">Enquiry areas</p>
            <h2>Supply requests stay clear and evidence-based.</h2>
            <p>
              This page supports commercial enquiries without inventing stock
              levels, delivery coverage, or guaranteed fulfilment claims.
            </p>
            <div className="pill-list">
              {commercialCards.map((card) => (
                <span key={card}>{card}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function NetworkPage() {
  return (
    <>
      <PageHero
        kicker="Distribution Network"
        title="Publicly positioned for LPG supply across Ghana and West Africa."
        text="The network page frames distribution as LPG infrastructure, cylinder movement, commercial enquiries, and customer delivery support."
        image={fleetTruck}
        dark
      />

      <section className="section network-section">
        <div className="section-container network-grid">
          <div>
            <p className="section-kicker">Network focus</p>
            <h2>Distribution language kept careful and verifiable.</h2>
            <p>
              Sandhill's public pages refer to reliable LPG solutions across
              Ghana and West Africa. This page does not add specific depot
              counts, territory coverage, or route claims.
            </p>
          </div>
          <div className="network-list">
            {networkItems.map((item) => (
              <div className="network-item" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function FleetPage() {
  return (
    <>
      <PageHero
        kicker="Fleet & Logistics"
        title="Operational imagery shows cylinder movement, loading, and branded LPG distribution."
        text="The fleet page uses public Sandhill photos to show real LPG logistics activity while avoiding invented fleet counts, route claims, or delivery guarantees."
        image={fleetTruck}
      />

      <section className="section">
        <div className="section-container split-grid">
          <div className="fleet-photo">
            <img src={logisticsYard} alt="Sandhill employees coordinating LPG cylinder loading" />
          </div>
          <div className="section-copy">
            <p className="section-kicker">Logistics support</p>
            <h2>Fleet communication centered on observable LPG operations.</h2>
            <p>
              Public images show cylinder loading and branded Sandhill LPG
              vehicles. Operational terms, coverage, and scheduling should be
              confirmed directly with Sandhill.
            </p>
            <div className="fleet-points">
              {fleetItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function SafetyPage() {
  return (
    <>
      <PageHero
        kicker="Safety & Quality"
        title="HSE messaging centered on people, communities, and the environment."
        text="Sandhill's public HSE page states that health, safety, and environment are fundamental to its identity and operations."
        image={operationsTeam}
        dark
      />

      <section className="section safety-section">
        <div className="section-container safety-grid">
          <div className="section-copy">
            <p className="section-kicker">HSE focus</p>
            <h2>Safety is presented without adding unverified certification claims.</h2>
            <p>
              This page reflects Sandhill's public HSE themes while avoiding
              invented licence numbers, exact audits, certifications, or
              compliance badges.
            </p>
          </div>
          <div className="safety-cards">
            {safetyItems.map((item) => (
              <article key={item}>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

function WhyPage() {
  return (
    <>
      <PageHero
        kicker="Why Choose Sandhill"
        title="A premium corporate experience built from public brand evidence."
        text="This page explains why the refreshed site positions Sandhill around real public strengths: brand visibility, LPG focus, HSE messaging, and commercial clarity."
        image={logisticsYard}
      />

      <section className="section why-section">
        <div className="section-container why-grid">
          {choiceItems.map((item) => (
            <article className="why-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

function PartnersPage() {
  return (
    <>
      <PageHero
        kicker="Partners"
        title="Commercial relationships should be confirmed directly with Sandhill."
        text="Public Sandhill operational imagery includes PUMAGAS-branded LPG activity. This page references visible public material without overstating legal or commercial scope."
        image={lpgCylinders}
        dark
      />

      <section className="section partners-section">
        <div className="section-container partners-grid">
          <div>
            <p className="section-kicker">Partner-facing information</p>
            <h2>Use public brand context, then confirm details directly.</h2>
            <p>
              This page is intentionally careful: it supports partnership and
              commercial conversations without inventing distributor status,
              contract scope, or exclusive arrangements.
            </p>
          </div>
          <div className="partner-stack">
            <img
              src={fleetTruck}
              alt="Sandhill Oil and Gas LPG delivery vehicle"
            />
            <div className="partner-panel">
              {partnerItems.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Start a verified LPG supply or partnership enquiry."
        text="Use Sandhill's public contact details for LPG supply, commercial, technical support, partnership, or operations enquiries."
        image={operationsTeam}
      />

      <section className="section contact-section">
        <div className="section-container contact-grid">
          <div>
            <p className="section-kicker">Public contact</p>
            <h2>Reach Sandhill through the verified public channels.</h2>
            <p>
              Availability, service scope, and commercial terms should be
              confirmed directly with Sandhill Oil &amp; Gas Ltd.
            </p>
            <div className="contact-actions">
              <a
                className="button button-red"
                href={whatsappLinks.general}
                rel="noreferrer"
                target="_blank"
              >
                Contact Us on WhatsApp
              </a>
              <a
                className="button button-light"
                href={whatsappLinks.order}
                rel="noreferrer"
                target="_blank"
              >
                Order Now
              </a>
            </div>
          </div>
          <div className="contact-card">
            <div>
              <span>Email</span>
              <a href="mailto:info@sandhilloilandgas.com">info@sandhilloilandgas.com</a>
            </div>
            <div>
              <span>Phone</span>
              <p>+233 24 129 1681</p>
            </div>
            <div>
              <span>Location</span>
              <p>AY194 Mantse Okley st, Spintex - Accra Ghana</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-container footer-grid">
        <div>
          <img src={sandhillLogo} alt="Sandhill Oil and Gas Ltd" />
          <p>
            Sandhill Oil &amp; Gas Ltd provides LPG infrastructure, supply,
            bottling plant, technical support, and cylinder management messaging
            based on its public website.
          </p>
        </div>

        <nav aria-label="Footer links">
          <h3>Pages</h3>
          {routes.slice(1).map((route) => (
            <a href={route.path} key={route.id}>
              {route.label}
            </a>
          ))}
        </nav>

        <div>
          <h3>Public Contact</h3>
          <p>info@sandhilloilandgas.com</p>
          <p>+233 24 129 1681</p>
          <p>AY194 Mantse Okley st, Spintex - Accra Ghana</p>
        </div>
      </div>

      <div className="section-container footer-bottom">
        <p>
          Availability, service scope, and commercial terms should be confirmed
          directly with Sandhill Oil &amp; Gas Ltd.
        </p>
        <a href={whatsappLinks.general} rel="noreferrer" target="_blank">
          Contact Sandhill on WhatsApp
        </a>
      </div>
    </footer>
  )
}

export default App
