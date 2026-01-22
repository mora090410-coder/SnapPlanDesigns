function HowItWorks() {
    return (
        <section className="section section-alt" id="how-it-works">
            <div className="container">
                <h2 className="section-title">Two-stage product. One outcome: clarity.</h2>
                <p className="section-subtitle">
                    Faster and cheaper than architects. More valuable than drafting services.
                </p>
                <div className="stage-grid">
                    <div className="stage-card">
                        <div className="stage-badge">Stage 1</div>
                        <h3>Layout Sprint</h3>
                        <p className="stage-desc">
                            Receive two constraint-driven layout options with pros, cons, and cost-impact notes.
                        </p>
                        <ul className="stage-list">
                            <li>Smart layouts based on your space</li>
                            <li>Clear tradeoffs for each option</li>
                            <li>Cost implications upfront</li>
                        </ul>
                        <div className="stage-answer">
                            <strong>Answers:</strong> "What's the smartest layout given my space?"
                        </div>
                    </div>
                    <div className="stage-card stage-card-accent">
                        <div className="stage-badge">Stage 2</div>
                        <h3>Bid-Ready Upgrade</h3>
                        <p className="stage-desc">
                            Your chosen layout converted into a clean, estimate-ready artifact contractors can price from.
                        </p>
                        <ul className="stage-list">
                            <li>Key dimensions documented</li>
                            <li>Assumptions spelled out</li>
                            <li>Scope boundaries defined</li>
                        </ul>
                        <div className="stage-answer">
                            <strong>Answers:</strong> "Is this clear enough for a contractor to price?"
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
