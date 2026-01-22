function WhoItsFor() {
    const audiences = [
        {
            icon: '🏠',
            title: 'DIY homeowners',
            description: 'Planning basements, remodels, or additions — need clarity before calling contractors.'
        },
        {
            icon: '🔧',
            title: 'Small contractors',
            description: 'Need clear layouts from clients to price accurately and reduce project risk.'
        },
        {
            icon: '📊',
            title: 'Small investors',
            description: 'Validating renovation concepts before committing capital to a project.'
        }
    ]

    return (
        <section className="section section-alt" id="who-its-for">
            <div className="container">
                <h2 className="section-title">Who it's for</h2>
                <div className="card-grid">
                    {audiences.map((audience, index) => (
                        <div className="card" key={index}>
                            <div className="card-icon">{audience.icon}</div>
                            <h3>{audience.title}</h3>
                            <p>{audience.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhoItsFor
