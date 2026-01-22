function Hero() {
    const handlePrimaryClick = (e) => {
        e.preventDefault()
        const target = document.querySelector('#pricing')
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            })
        }
    }

    const handleSecondaryClick = (e) => {
        e.preventDefault()
        const target = document.querySelector('#solution')
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
            <div className="hero-content">
                <h1 className="hero-headline">
                    Know what you're building<br />
                    before you spend a dollar.
                </h1>
                <p className="hero-subhead">
                    We turn your rough sketches into the first professional plan of your project—so you can get real bids and move forward with confidence.
                </p>
                <div className="hero-cta">
                    <a
                        href="#pricing"
                        className="btn btn-primary btn-lg"
                        onClick={handlePrimaryClick}
                    >
                        Start Your Plan — $700
                    </a>
                    <a
                        href="#solution"
                        className="text-link"
                        onClick={handleSecondaryClick}
                    >
                        See an example →
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
