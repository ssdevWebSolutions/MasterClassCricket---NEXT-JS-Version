import '../assets/css/MasterclassEliteCricketAcademy.css'
const MasterclassEliteCricketAcademy = () => {
    return (
        <div className="coaching-container">

            <section className="hero-section">
                <h1 className="hero-title">Masterclass Elite Cricket Academy</h1>
                <p className="hero-description">
                    High-performance cricket coaching for the most promising young players in the Home Counties, built to mirror professional standards.
                </p>
                <div className="hero-content">
                    <div className="hero-image"></div>
                    <button className="book-btn">Book a Trial</button>
                </div>
            </section>

            <section className="about-section">
                <h2>About the Masterclass Elite Academy</h2>
                <p>
                    The Masterclass Elite Cricket Academy is where the region’s most promising cricketers are tested, challenged and developed to reach their full potential.<br></br>
                </p>
                <p>
                    Led by County players Uzi Arif (The Rocketman) and Fahim Qureshi (The Run Machine), alongside our specialist Masterclass coaching team, we prepare players for county and professional-level cricket through elite, performance-driven training that mirrors the standards of the professional game.
                </p>

            </section>

            <section className="expect-section">
                <h3>What You Can Expect</h3>
                <section className="card-section">
                    <div className="card-container">
                        <div className="card">
                            <div className="card-header">Professional EnvironmentProfessional Environment</div>
                            <div className="card-content">
                                Train in a high-intensity, match-scenario environment that feels like a professional academy: live bat-vs-ball, competitive net battles and pressure situations that demand focus, discipline and consistency.                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">Expert Coaching & Video Analysis</div>
                            <div className="card-content">
                                Work directly with Uzi Arif, Fahim Qureshi and the Masterclass specialists, using HD video analysis and technical intervention to break down your action, fix inefficiencies and build clear, personalised game plans.                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">High-Performance Development</div>
                            <div className="card-content">
                                Go beyond skills with cricket-specific fitness and strength & conditioning, tactical awareness sessions and mental skills training — giving you the physical power, game intelligence and resilience needed to perform at elite level.                            </div>
                        </div>
                    </div>
                </section>


            </section>

            <section className="cta-section">
                <h4>Ready to Get Started?</h4>
                <p>Trials for the 2026 Masterclass Elite Academy are strictly limited. If you believe you can compete with the best, this is your chance to prove it.</p>
                <button className="cta-btn">Contact Us</button>
            </section>
        </div>

    );
}
export default MasterclassEliteCricketAcademy;