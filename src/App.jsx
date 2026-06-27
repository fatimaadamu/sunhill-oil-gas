import heroImage from './assets/sunhill-operations.png'
import './App.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Network', href: '#network' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Safety', href: '#safety' },
  { label: 'Contact', href: '#contact' },
]

const credibilityItems = [
  {
    title: 'Distribution network',
    text: 'Structured coordination across petroleum supply channels and approved commercial buyers.',
  },
  {
    title: 'Commercial supply',
    text: 'Responsive support for business, institutional, wholesale, and retail product requirements.',
  },
  {
    title: 'Fleet operations',
    text: 'Truck movement planning focused on safe dispatch, route visibility, and delivery reliability.',
  },
  {
    title: 'Depot coordination',
    text: 'Clear loading-point communication for customers managing product availability and timing.',
  },
]

const services = [
  {
    title: 'Petroleum distribution',
    text: 'Coordinated product supply for distributors, wholesalers, retailers, and commercial customers, with clear communication from enquiry to delivery.',
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
    text: 'Fuel supply conversations for banks, institutions, fleet operators, and businesses with generator, transport, or operating needs.',
  },
]

const products = [
  'Bulk petroleum supply coordination',
  'Retailer supply support',
  'Wholesale supply support',
  'Depot-linked product availability',
  'Commercial customer supply enquiries',
]

const servedMarkets = [
  {
    title: 'Distributors',
    text: 'Supply coordination for downstream distribution partners and reseller networks.',
  },
  {
    title: 'Wholesalers',
    text: 'Commercial product conversations for bulk demand, allocation planning, and delivery timing.',
  },
  {
    title: 'Retailers',
    text: 'Depot and truck scheduling support for stations and retail fuel operators.',
  },
  {
    title: 'Banks and institutions',
    text: 'Structured account handling for institutional customers with documentation requirements.',
  },
  {
    title: 'Depots',
    text: 'Loading-point coordination that keeps customer expectations aligned with product availability.',
  },
  {
    title: 'Commercial customers',
    text: 'Fuel supply support for businesses that rely on dependable operating continuity.',
  },
]

const networkSteps = [
  'Depot supply',
  'Dispatch planning',
  'Truck movement',
  'Distributor channels',
  'Wholesale demand',
  'Retail delivery',
  'Commercial customers',
]

const fleetItems = [
  {
    title: 'Safe dispatch',
    text: 'Truck movements are planned around loading procedures, dispatch readiness, and customer delivery requirements.',
  },
  {
    title: 'Route coordination',
    text: 'Delivery planning considers destination, timing, depot access, and the practical movement of petroleum products.',
  },
  {
    title: 'Delivery reliability',
    text: 'Commercial customers receive clearer expectations around product movement, timing, and supply communication.',
  },
]

const partnerGroups = [
  'Distributors',
  'Wholesalers',
  'Retailers',
  'Commercial customers',
  'Banks and institutions',
  'Depot partners',
]

const safetyItems = [
  'Depot loading coordination aligned with site procedures and customer documentation.',
  'Truck scheduling that supports safe loading, controlled dispatch, and delivery traceability.',
  'Responsible product handling expectations across distributors, wholesalers, retailers, and commercial customers.',
  'Commercial, institutional, and bank documentation checks for approved account, payment, and supply workflows.',
]

const footerQuickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Network', href: '#network' },
  { label: 'Fleet', href: '#fleet' },
  { label: 'Safety', href: '#safety' },
  { label: 'Contact', href: '#contact' },
]

const footerOperations = [
  { label: 'Products & supply', href: '#products' },
  { label: 'Partner enquiries', href: '#partners' },
  { label: 'Depot coordination', href: '#network' },
  { label: 'Fleet dispatch', href: '#fleet' },
  { label: 'Market notice', href: '#safety' },
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

        <div className="header-actions">
          <nav className="site-nav" aria-label="Primary navigation">
            {navLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <a className="nav-cta" href="#products">
            Supply info
          </a>
        </div>
      </header>

      <main>
        <section
          id="home"
          className="hero-section"
          style={{ '--hero-image': `url(${heroImage})` }}
        >
          <div className="section-container hero-content">
            <div className="hero-copy-block">
              <p className="eyebrow">Corporate petroleum distribution</p>
              <h1>Disciplined energy distribution for commercial supply networks.</h1>
              <p className="hero-copy">
                Sunhill Oil and Gas supports petroleum product movement through
                depot coordination, truck dispatch planning, and commercial
                account service for distributors, wholesalers, retailers, banks,
                institutions, and operating businesses.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#products">
                  Request Supply Information
                </a>
                <a className="button button-secondary" href="#partners">
                  Become a Partner
                </a>
                <a className="button button-ghost" href="#contact">
                  Contact Operations Team
                </a>
              </div>
            </div>

            <aside className="hero-market-card" aria-label="Market notice">
              <span>Market notice</span>
              <p>
                Petroleum product prices and availability may change based on
                market conditions, depot supply, and regulatory or pricing
                updates.
              </p>
            </aside>
          </div>
        </section>

        <section className="credibility-section" aria-label="Operating focus">
          <div className="section-container credibility-grid">
            {credibilityItems.map((item) => (
              <article className="credibility-card" key={item.title}>
                <span>{item.title}</span>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-white" id="about">
          <div className="section-container about-grid">
            <div>
              <p className="section-label">About</p>
              <h2>Focused distribution with disciplined commercial service.</h2>
              <p className="section-lead">
                Sunhill Oil and Gas works across the practical realities of
                petroleum distribution: product enquiries, depot availability,
                truck movement, customer documentation, and commercial supply
                communication. The company supports customers that need a serious
                partner for dependable energy supply coordination.
              </p>
            </div>

            <aside className="current-role">
              <span>Current distributor role</span>
              <h3>Puma Energy distribution</h3>
              <p>
                Sunhill Oil and Gas currently operates as a distributor for Puma Energy.
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
                <h2>Commercial supply services built around operating needs.</h2>
              </div>
              <p>
                From wholesale demand to retail replenishment, Sunhill Oil and
                Gas keeps the supply conversation clear: product, volume,
                loading point, delivery timing, customer category, and required
                documentation.
              </p>
            </div>

            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <span aria-hidden="true"></span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white products-section" id="products">
          <div className="section-container products-grid">
            <div>
              <p className="section-label">Products & Supply Support</p>
              <h2>Petroleum supply support without overstated commitments.</h2>
              <p className="section-lead">
                Sunhill Oil and Gas handles supply enquiries with attention to
                product requirement, depot-linked availability, customer type,
                documentation, and delivery planning. Product availability is
                confirmed through current market and depot conditions.
              </p>
              <a className="button button-dark" href="#contact">
                Request Supply Information
              </a>
            </div>

            <div className="product-list">
              {products.map((product) => (
                <article className="product-item" key={product}>
                  <span aria-hidden="true"></span>
                  <p>{product}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-white" id="serve">
          <div className="section-container">
            <div className="centered-heading">
              <p className="section-label">Who we serve</p>
              <h2>Built for buyers and operators across the energy supply chain.</h2>
              <p>
                Sunhill Oil and Gas supports customers that need practical
                petroleum supply conversations without exaggerated claims or
                unclear operating commitments.
              </p>
            </div>

            <div className="serve-grid">
              {servedMarkets.map((market) => (
                <article className="serve-card" key={market.title}>
                  <h3>{market.title}</h3>
                  <p>{market.text}</p>
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
                The company coordinates around the practical points of petroleum
                distribution: depot supply, safe dispatch, truck movement,
                distributor channels, wholesale demand, retailer delivery, and
                commercial customer service.
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

        <section className="section section-white fleet-section" id="fleet">
          <div className="section-container fleet-grid">
            <div>
              <p className="section-label">Fleet & distribution</p>
              <h2>Truck movement planned for safe dispatch and reliable delivery.</h2>
              <p className="section-lead">
                Petroleum supply depends on disciplined movement. Sunhill Oil
                and Gas places emphasis on route coordination, loading readiness,
                depot communication, and delivery reliability for commercial
                customers.
              </p>
              <a className="button button-dark" href="#contact">
                Contact Operations Team
              </a>
            </div>

            <div className="fleet-panel">
              {fleetItems.map((item) => (
                <article className="fleet-item" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-partner" id="partners">
          <div className="section-container partner-grid">
            <div>
              <p className="section-label section-label-gold">Partner enquiry</p>
              <h2>Partnership conversations for serious supply participants.</h2>
              <p className="section-lead">
                Sunhill Oil and Gas welcomes structured commercial enquiries
                from qualified organisations seeking petroleum supply
                coordination, distribution support, or depot-linked operating
                conversations.
              </p>
              <a className="button button-primary" href="#contact">
                Become a Partner
              </a>
            </div>

            <div className="partner-card">
              <h3>Enquiry categories</h3>
              <div className="partner-tags">
                {partnerGroups.map((group) => (
                  <span key={group}>{group}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-soft" id="safety">
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

            <div className="safety-stack">
              <ul className="compliance-list">
                {safetyItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <aside className="market-notice-card">
                <span>Market notice</span>
                <h3>Pricing and availability are market-sensitive.</h3>
                <p>
                  Petroleum product prices and availability can change based on
                  market conditions, depot supply, and regulatory or pricing
                  updates. Customers should confirm current product status,
                  delivery timing, and commercial terms before making operating
                  commitments.
                </p>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-contact" id="contact">
          <div className="section-container contact-grid">
            <div>
              <p className="section-label section-label-gold">Contact</p>
              <h2>Start a serious commercial supply conversation.</h2>
              <p className="section-lead">
                For product enquiries, depot coordination, truck delivery
                planning, account onboarding, or market-sensitive pricing
                discussions, contact Sunhill Oil and Gas with the details needed
                to assess your request responsibly.
              </p>
              <div className="contact-actions">
                <a className="button button-primary" href="#products">
                  Request Supply Information
                </a>
                <a className="button button-secondary" href="#partners">
                  Become a Partner
                </a>
                <a className="button button-ghost" href="#contact-details">
                  Contact Operations Team
                </a>
              </div>
            </div>

            <div className="contact-panel" id="contact-details">
              <h3>Operations contact placeholders</h3>
              <ul>
                <li>Commercial enquiries: To be confirmed</li>
                <li>Operations desk: To be confirmed</li>
                <li>Office location: To be confirmed</li>
                <li>Customer category: distributor, wholesaler, retailer, bank, institution, depot partner, or commercial customer</li>
              </ul>
              <p>
                Prices and product availability may change based on market
                conditions, depot supply, and regulatory or pricing updates.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-container footer-grid">
          <div className="footer-brand">
            <a className="brand footer-logo" href="#home" aria-label="Sunhill Oil and Gas home">
              <span className="brand-mark">S</span>
              <span>
                <strong>Sunhill</strong>
                <small>Oil and Gas</small>
              </span>
            </a>
            <p>
              Sunhill Oil and Gas provides corporate petroleum distribution,
              depot coordination, fleet dispatch planning, and commercial supply
              support for operating customers and supply partners.
            </p>
          </div>

          <div className="footer-column">
            <h3>Quick links</h3>
            {footerQuickLinks.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <h3>Service areas</h3>
            {footerOperations.map((link) => (
              <a href={link.href} key={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="footer-column footer-contact">
            <h3>Contact</h3>
            <p>Commercial enquiries: To be confirmed</p>
            <p>Operations desk: To be confirmed</p>
            <p>Office location: To be confirmed</p>
          </div>
        </div>

        <div className="section-container footer-bottom">
          <p>
            Pricing and product availability may change based on market
            conditions, depot supply, and regulatory or pricing updates.
          </p>
          <span>Sunhill Oil and Gas</span>
        </div>
      </footer>
    </div>
  )
}

export default App
