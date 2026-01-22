function Pricing() {
    const mailtoLink = `mailto:hello@snapplandesigns.com?subject=Decision%20Plan%20Inquiry&body=Hi%20Snap%20Plan%20Designs%2C%0A%0AI'm%20interested%20in%20getting%20a%20Decision%20Plan%20for%20my%20project.%0A%0AProject%20type%3A%20%5BBasement%20%2F%20Remodel%20%2F%20Addition%20%2F%20Other%5D%0ALocation%3A%20%5BCity%2C%20State%5D%0ABrief%20description%3A%20%0A%0AThanks!`

    const tiers = [
        {
            name: 'Standard',
            price: '$700',
            features: [
                'Decision Plan with one layout option',
                'Room dimensions and flow notes',
                'Contractor-ready deliverable',
                '48–72 hour delivery'
            ]
        },
        {
            name: 'Premium',
            price: '$1,200',
            features: [
                'Everything in Standard',
                'Three layout alternatives',
                'Material quantity estimates',
                'Contractor matching (optional)'
            ]
        }
    ]

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <h2 className="pricing-heading">Clear pricing. Clear value.</h2>
                <div className="pricing-grid">
                    {tiers.map((tier) => (
                        <div className="pricing-card" key={tier.name}>
                            <p className="pricing-tier">{tier.name}</p>
                            <p className="pricing-price">{tier.price}</p>
                            <ul className="pricing-features">
                                {tier.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                            <a href={mailtoLink} className="btn btn-primary">
                                Get Started
                            </a>
                        </div>
                    ))}
                </div>
                <p className="pricing-note">
                    Revisions available. Projects requiring structural engineering quoted separately.
                </p>
            </div>
        </section>
    )
}

export default Pricing
