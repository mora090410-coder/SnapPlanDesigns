function IntakeCTA() {
    const mailtoLink = `mailto:hello@snapplandesigns.com?subject=Intake%20Request&body=Hi%20Snap%20Plan%20Designs%2C%0A%0AI%27m%20interested%20in%20getting%20layout%20clarity%20for%20my%20project.%0A%0AProject%20type%3A%20%5BBasement%20%2F%20Remodel%20%2F%20Addition%20%2F%20Other%5D%0ALocation%3A%20%5BCity%2C%20State%5D%0ABrief%20description%3A%20%0A%0AThanks!`

    return (
        <section className="section section-cta" id="intake">
            <div className="container">
                <div className="cta-card">
                    <h2>Ready to snap your plan?</h2>
                    <p>
                        Tell us about your project. We'll review your inputs and get back to you with next steps.
                    </p>
                    <a href={mailtoLink} className="btn btn-primary btn-lg">
                        Start intake
                    </a>
                    <p className="cta-note">We'll respond within 1-2 business days</p>
                </div>
            </div>
        </section>
    )
}

export default IntakeCTA
