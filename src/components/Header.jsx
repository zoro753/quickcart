const Header = () => {
  return (
    <header className="qc-header">
      <div className="qc-header__copy">
        <p className="qc-eyebrow">QuickCart</p>
        <h1>Everyday picks, delivered fast.</h1>
        <p className="qc-subtitle">
          Curated essentials, bold design, and a smooth checkout in minutes.
        </p>
        <div className="qc-cta-row">
          <button type="button" className="qc-button qc-button--primary">
            Shop new arrivals
          </button>
          <button type="button" className="qc-button qc-button--ghost">
            Browse categories
          </button>
        </div>
      </div>
      <div className="qc-header__panel">
        <div className="qc-panel">
          <div>
            <p className="qc-panel__label">Delivery window</p>
            <p className="qc-panel__value">Today, 2-4 PM</p>
          </div>
          <div>
            <p className="qc-panel__label">Pickup points</p>
            <p className="qc-panel__value">12 near you</p>
          </div>
          <div>
            <p className="qc-panel__label">Member perks</p>
            <p className="qc-panel__value">Free returns</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
