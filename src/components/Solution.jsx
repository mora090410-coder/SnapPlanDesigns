function Solution() {
    const features = [
        "Clean, scaled floor plan",
        "Accurate dimensions and room flow",
        "Contractor-ready notes",
        "Delivered in 48–72 hours"
    ]

    return (
        <section className="solution" id="solution">
            <div className="container">
                <div className="solution-content">
                    <h2 className="solution-heading">The Decision Plan.</h2>
                    <p className="solution-tagline">
                        Not a sketch. Not a permit set.<br />
                        The professional layout that makes building possible.
                    </p>

                    <div className="solution-image">
                        <p className="solution-image-placeholder">
                            [Decision Plan example will appear here]
                        </p>
                    </div>

                    <div className="solution-features">
                        {features.map((feature, index) => (
                            <span className="solution-feature" key={index}>
                                {feature}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solution
