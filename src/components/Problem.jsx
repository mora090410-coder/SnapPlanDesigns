function Problem() {
    const problems = [
        "Sketches are too rough to price",
        "Architects are slow and expensive",
        "Contractors can't bid without clarity"
    ]

    return (
        <section className="problem" id="problem">
            <div className="container">
                <div className="problem-content">
                    <h2 className="problem-heading">
                        You're stuck between ideas and action.
                    </h2>
                    <div className="problem-list">
                        {problems.map((problem, index) => (
                            <p className="problem-item" key={index}>
                                {problem}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Problem
