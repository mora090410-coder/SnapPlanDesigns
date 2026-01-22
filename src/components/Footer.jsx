function Footer() {
    const handleBackToTop = (e) => {
        e.preventDefault()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <span className="footer-logo">Snap Plan Designs</span>
                        <p className="footer-tagline">Decision infrastructure for residential projects.</p>
                    </div>
                    <div className="footer-links">
                        <a href="mailto:hello@snapplandesigns.com">hello@snapplandesigns.com</a>
                        <a href="#" className="back-to-top" onClick={handleBackToTop}>Back to top ↑</a>
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
