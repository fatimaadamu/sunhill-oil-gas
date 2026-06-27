import heroImage from './assets/sunhill-operations.png'
import './App.css'

const services = [
  {
    title: 'Petroleum distribution',
    text: 'Coordinated product supply for distributors, wholesalers, retailers, and commercial customers with clear communication from enquiry to delivery.',
  },
  {
    title: 'Wholesale supply support',
    text: 'Practical sourcing and allocation support for bulk buyers, reseller networks, and customers planning around changing market demand.',
  },
  {
    title: 'Retailer and station supply',
    text: 'Reliable replenishment coordination for retailers that need disciplined depot loading, truck scheduling, and delivery visibility.',
  },
  {
    title: 'Commercial account service',
    text: 'Fuel supply conversations for banks, fleet operators, institutions, and businesses with generator, transport, or operating needs.',
  },
]

const networkSteps = [
  'Depots',
  'Trucks',
  'Distributors',
  'Wholesalers',
  'Retailers',
  'Banks',
  'Commercial customers',
]

const safetyItems = [
  'Depot loading coordination aligned with site procedures and customer documentation.',
  'Truck scheduling that supports safe loading, controlled dispatch, and delivery traceability.',
  'Responsible product handling expectations across distributors, wholesalers, and retailers.',
  'Commercial and bank documentation checks for approved account, payment, and supply workflows.',
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sunhill Oil and Gas home">
          <span className="brand-mark">S</span>
          <span>
            <strong>Sunhill</strong>
            <small>Oil and Gas</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#network">Network</a>
          <a href="#safety">Safety</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section
          id="home"
          className="hero-section"
          style={{ '--hero-image': `url(${heroImage})` }}
        >
          <div className="section-container hero-content">
            <p className="eyebrow">Petroleum distribution and supply coordination</p>
            <h1>Sunhill Oil and Gas</h1>
            <p className="hero-copy">
              Professional oil and gas distribution for distributors,
              wholesalers, retailers, banks, and commercial customers who need
              dependable access to products, depots, trucks, and delivery
              planning.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Discuss supply
              </a>
              <a className="button button-secondary" href="#services">
                View services
              </a>
            </div>
            <p className="market-note">
              Prices and product availability may change based on market
              conditions.
            </p>
          </div>
        </section>

        <section className="section section-white" id="about">
          <div className="section-container about-grid">
            <div>
              <p className="section-label">About</p>
              <h2>Focused distribution with disciplined commercial service.</h2>
              <p className="section-lead">
                Sunhill Oil and Gas supports petroleum supply needs through
                practical sourcing, depot coordination, truck dispatch planning,
                and customer account handling. The company works with
                distributors, wholesalers, retailers, banks, and commercial
                customers that require dependable fuel supply conversations.
              </p>
            </div>

            <aside className="current-role">
              <span>Current distributor role</span>
              <h3>Puma Energy distribution</h3>
              <p>
                Sunhill Oil and Gas is currently a distributor for Puma Energy.
                This describes the company&apos;s present distribution activity
                and does not imply ownership, exclusivity, or a broader
                relationship beyond that role.
              </p>
            </aside>
          </div>
        </section>

        <section className="section section-soft" id="services">
          <div className="section-container">
            <div className="section-heading-row">
              <div>
                <p className="section-label">Services</p>
                <h2>Supply services built around real operating needs.</h2>
              </div>
              <p>
                From wholesale demand to retail replenishment, Sunhill Oil and
                Gas keeps the conversation clear: product, volume, loading point,
                delivery timing, and customer documentation.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-navy" id="network">
          <div className="section-container">
            <div className="network-intro">
              <p className="section-label section-label-gold">Network</p>
              <h2>Connecting market demand with depot and truck movement.</h2>
              <p>
                Sunhill Oil and Gas coordinates across the practical points of
                petroleum distribution: depots, trucks, approved buyers, and the
                commercial customers who rely on consistent supply.
              </p>
            </div>

            <div className="network-flow" aria-label="Sunhill supply network">
              {networkSteps.map((step) => (
                <div className="network-node" key={step}>
                  {step}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="safety">
          <div className="section-container safety-grid">
            <div>
              <p className="section-label">Safety & compliance</p>
              <h2>Responsible movement starts before a truck leaves the depot.</h2>
              <p className="section-lead">
                Petroleum distribution depends on clear procedures, accurate
                documentation, and disciplined coordination. Sunhill Oil and Gas
                treats safety, compliance, and traceability as operating
                requirements, not afterthoughts.
              </p>
            </div>

            <ul className="compliance-list">
              {safetyItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-container contact-grid">
            <div>
              <p className="section-label section-label-gold">Contact</p>
              <h2>Start a commercial supply conversation.</h2>
              <p className="section-lead">
                For product enquiries, depot coordination, truck delivery
                planning, account onboarding, or market-sensitive pricing
                discussions, contact Sunhill Oil and Gas with the details needed
                to assess your request.
              </p>
              <a
                className="button button-primary"
                href="mailto:info@sunhilloilandgas.com?subject=Commercial%20supply%20enquiry"
              >
                Email commercial desk
              </a>
            </div>

            <div className="contact-panel">
              <h3>Helpful enquiry details</h3>
              <ul>
                <li>Product type and estimated volume</li>
                <li>Preferred depot, delivery location, and timing</li>
                <li>Customer category: distributor, wholesaler, retailer, bank, or commercial customer</li>
                <li>Payment, bank, and account documentation requirements</li>
              </ul>
              <p>
                Prices and product availability may change based on market
                conditions.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>Sunhill Oil and Gas</span>
        <span>Oil and gas distribution for commercial supply networks.</span>
      </footer>
    </div>
  )
}

export default App
