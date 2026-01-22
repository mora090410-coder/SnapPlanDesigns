import { useState } from 'react'

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null)

    const faqs = [
        {
            question: 'Is this architecture or permitting work?',
            answer: 'No. We provide layout clarity and bid-ready planning artifacts — not architectural services, code review, permits, or stamped drawings. You (or your contractor) handle permitting and engineering validation.'
        },
        {
            question: 'What do I need to get started?',
            answer: 'Rough dimensions of your space, photos if available, your goals and constraints, and a sense of what you\'re trying to achieve. We\'ll guide you through our intake process.'
        },
        {
            question: 'Why not just use a drafting service?',
            answer: 'Drafting services draw what you\'ve already decided. We help you make the decision — figuring out what goes where and why before anything gets drawn. Think of us as the step that comes before drafting.'
        },
        {
            question: 'Can contractors actually use these layouts?',
            answer: 'Yes. Our bid-ready artifacts are specifically designed for contractor usability. They include key dimensions, assumptions, and clear scope boundaries — everything needed to provide an accurate estimate.'
        },
        {
            question: 'What\'s the typical timeline?',
            answer: 'Layout Sprint (Stage 1) typically takes 3-5 business days. Bid-Ready Upgrade (Stage 2) adds another 2-3 business days. Both stages are fast, fixed-price, and tightly scoped.'
        }
    ]

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="section" id="faq">
            <div className="container">
                <h2 className="section-title">Frequently asked questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div className="faq-item" key={index}>
                            <button
                                className="faq-question"
                                onClick={() => toggleFaq(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
                            </button>
                            <div className={`faq-answer${openIndex === index ? '' : ' collapsed'}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FAQ
