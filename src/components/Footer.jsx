function Footer() {
    const handleBackToTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    const handleNavClick = (e, targetId) => {
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
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">Snap Plan Designs</span>
                        <p className="footer-tagline">Know what you're building before you spend a dollar.</p>
                    </div>
                    <div className="footer-links">
                        <a href="mailto:hello@snapplandesigns.com">hello@snapplandesigns.com</a>
                        <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How It Works</a>
                        <a href="#" onClick={handleBackToTop}>Back to top ↑</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Snap Plan Designs. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
