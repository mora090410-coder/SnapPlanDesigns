function Deliverables() {
    const deliverables = [
        {
            icon: '📐',
            title: 'Constraint-driven layouts',
            description: 'Two smart layout options designed around your space, goals, and real-world constraints.'
        },
        {
            icon: '📄',
            title: 'Bid-ready plan',
            description: 'A clean planning artifact with dimensions, assumptions, and scope that contractors can quote.'
        },
        {
            icon: '📝',
            title: 'Contractor-friendly notes',
            description: 'Clear documentation that reduces bid risk, eliminates ambiguity, and prevents rework.'
        }
    ]

    return (
        <section className="section" id="deliverables">
            <div className="container">
                <h2 className="section-title">What you get</h2>
                <div className="card-grid">
                    {deliverables.map((item, index) => (
                        <div className="card" key={index}>
                            <div className="card-icon">{item.icon}</div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    ))}
                </div>
                <div className="callout">
                    <div className="callout-icon">⚠️</div>
                    <div className="callout-content">
                        <strong>Important:</strong> No permits. No code review. No stamped drawings.
                        You (or your contractor) validate code, permitting, and engineering.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Deliverables
