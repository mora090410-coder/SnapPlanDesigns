function Hero() {
    const handleClick = (e, targetId) => {
        e.preventDefault()
        const target = document.querySelector(targetId)
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="hero">
            <div className="container">
                <h1 className="hero-headline">
                    Before you call a contractor,<br />
                    <span className="highlight">snap your plan.</span>
                </h1>
                <p className="hero-subhead">
                    Turn rough ideas into layout clarity and bid-ready artifacts contractors can price from.
                    No permits. No code review. No stamped drawings — just the missing step that gets your project moving.
                </p>
                <div className="hero-ctas">
                    <a href="#intake" className="btn btn-primary" onClick={(e) => handleClick(e, '#intake')}>
                        Start intake
                    </a>
                    <a href="#how-it-works" className="btn btn-secondary" onClick={(e) => handleClick(e, '#how-it-works')}>
                        See how it works
                    </a>
                </div>
                <p className="hero-trust">Fast • Fixed-price • Tightly scoped</p>
            </div>
        </section>
    )
}

export default Hero
