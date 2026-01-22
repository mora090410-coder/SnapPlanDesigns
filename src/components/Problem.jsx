function Problem() {
    const problems = [
        {
            icon: '📋',
            title: 'Ambiguous inputs',
            description: 'Vague scope and unclear layouts lead to inflated contractor bids — or no bids at all.'
        },
        {
            icon: '✏️',
            title: 'DIY sketches fall short',
            description: 'Hand-drawn plans create confusion, rework, and endless back-and-forth with contractors.'
        },
        {
            icon: '🔄',
            title: 'Wrong sequence',
            description: 'Jumping to architects or drafters before decisions are made wastes time and money.'
        }
    ]

    return (
        <section className="section" id="problem">
            <div className="container">
                <h2 className="section-title">Residential projects stall before they start.</h2>
                <p className="section-subtitle">
                    You have ideas, sketches, and inspiration — but nothing concrete enough to get reliable bids.
                </p>
                <div className="card-grid">
                    {problems.map((problem, index) => (
                        <div className="card" key={index}>
                            <div className="card-icon">{problem.icon}</div>
                            <h3>{problem.title}</h3>
                            <p>{problem.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Problem
