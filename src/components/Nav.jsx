import { useState, useEffect } from 'react'

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

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
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`nav${isScrolled ? ' scrolled' : ''}`} id="nav">
            <div className="nav-inner">
                <a href="#" className="nav-brand">Snap Plan Designs</a>
                <button
                    className={`nav-toggle${isMobileMenuOpen ? ' active' : ''}`}
                    aria-label="Toggle menu"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <div className={`nav-links${isMobileMenuOpen ? ' active' : ''}`}>
                    <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>How it works</a>
                    <a href="#deliverables" onClick={(e) => handleNavClick(e, '#deliverables')}>Deliverables</a>
                    <a href="#who-its-for" onClick={(e) => handleNavClick(e, '#who-its-for')}>Who it's for</a>
                    <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')}>FAQ</a>
                    <a href="#intake" className="btn btn-primary btn-sm" onClick={(e) => handleNavClick(e, '#intake')}>Start intake</a>
                </div>
            </div>
        </nav>
    )
}

export default Nav
