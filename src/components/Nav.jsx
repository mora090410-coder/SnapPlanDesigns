import { useState, useEffect } from 'react'

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleGetStarted = (e) => {
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

    return (
        <nav className={`nav${isScrolled ? ' scrolled' : ''}`} id="nav">
            <div className="nav-inner">
                <a href="#" className="nav-brand">Snap Plan Designs</a>
                <div className="nav-cta">
                    <a href="#how-it-works" className="nav-link">How It Works</a>
                    <a
                        href="#pricing"
                        className="btn btn-primary btn-sm"
                        onClick={handleGetStarted}
                    >
                        Start Your Plan — $700
                    </a>
                </div>
                <button
                    className="nav-toggle"
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </nav>
    )
}

export default Nav
