function FinalCTA() {
    const mailtoLink = `mailto:hello@snapplandesigns.com?subject=Decision%20Plan%20Inquiry&body=Hi%20Snap%20Plan%20Designs%2C%0A%0AI'm%20interested%20in%20getting%20a%20Decision%20Plan%20for%20my%20project.%0A%0AProject%20type%3A%20%5BBasement%20%2F%20Remodel%20%2F%20Addition%20%2F%20Other%5D%0ALocation%3A%20%5BCity%2C%20State%5D%0ABrief%20description%3A%20%0A%0AThanks!`

    return (
        <section className="final-cta" id="start">
            <div className="container">
                <div className="final-cta-content">
                    <h2>Start with clarity.</h2>
                    <p>The first professional step in your project.</p>
                    <a href={mailtoLink} className="btn btn-primary btn-lg">
                        Start Your Plan
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FinalCTA
