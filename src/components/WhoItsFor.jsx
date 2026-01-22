function WhoItsFor() {
    const audiences = [
        {
            icon: '🏠',
            title: 'Homeowners planning a renovation',
            description: 'You have ideas but need something real to show contractors.'
        },
        {
            icon: '🔨',
            title: 'DIY builders ready to start',
            description: "You're doing the work yourself but need a clear starting point."
        },
        {
            icon: '📈',
            title: 'Investors validating a project',
            description: 'You need to know if an idea pencils before committing capital.'
        }
    ]


    return (
        <section className="audience" id="who-its-for">
            <div className="container">
                <h2 className="audience-heading">Perfect for:</h2>
                <div className="audience-grid">
                    {audiences.map((audience, index) => (
                        <div className="audience-card" key={index}>
                            <div className="audience-icon">{audience.icon}</div>
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
