function HowItWorks() {
    const steps = [
        {
            number: 1,
            title: 'Submit',
            description: 'Send us your sketches, photos, or descriptions.'
        },
        {
            number: 2,
            title: 'We Design',
            description: 'We create your Decision Plan in 48–72 hours.'
        },
        {
            number: 3,
            title: 'Move Forward',
            description: 'Get contractor bids or start building with clarity.'
        }
    ]

    return (
        <section className="process" id="how-it-works">
            <div className="container">
                <h2 className="process-heading">Three steps. No complexity.</h2>
                <div className="process-steps">
                    {steps.map((step) => (
                        <div className="process-step" key={step.number}>
                            <div className="process-number">{step.number}</div>
                            <h3>{step.title}</h3>
                            <p>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks
