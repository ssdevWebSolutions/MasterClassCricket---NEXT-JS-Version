'use client';
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="heroSection" id="hero">
      <div className="heroInner">

        {/* LEFT SIDE */}
        <div className="heroLeft">
          <h1 className="heroTitle">
            <span>Cricket Camps</span>
            <span>This Month —</span>
            <span>Train. Compete.</span>
            <span className="heroTitleLine4">Level Up.</span>
          </h1>

          <p className="heroDescription">
            Join our upcoming professional cricket camps designed for every player who wants to sharpen
            their skills, boost performance, and train with expert coaches.
          </p>

          {/* CAMP CARD */}
          <div className="campCard">
  
  <span className="campRibbon">10% Early Bird Discount</span>

  <h2 className="campTitle">Winter Fast-Bowling Camp</h2>

  <div className="campDetailsRow">
    <div className="campDetail">
      <i className="fa-regular fa-calendar campIcon"></i>
      <span>Jan 16–28</span>
    </div>
    <div className="campDetail">
      <i className="fa-solid fa-location-dot campIcon"></i>
      <span>London, UK</span>
    </div>
  </div>

  <div className="campDetailsRow">
    <div className="campDetail">
      <i className="fa-solid fa-user-group campIcon"></i>
      <span>Age 10+</span>
    </div>
    <div className="campDetail">
      <i className="fa-regular fa-star campIcon"></i>
      <span>Limited Seats</span>
    </div>
  </div>

  <div className="campButtons">
    <button className="campBtnPrimary">Book Your Spot</button>
    <button className="campBtnSecondary">Explore All Camps</button>
  </div>

</div>

        </div>

        {/* RIGHT SIDE */}
        <div className="heroRight">
          <div className="heroImageCard">
            <div className="heroImageInner">
              <img
                src="/elite-performance.png"
                alt="Cricket gear on field"
              />
            </div>

            <div className="heroStatsBar">
              <div className="heroStat">
                <span className="heroStatValue">20+</span>
                <span className="heroStatLabel">Years Exp</span>
              </div>
              <div className="heroStat">
                <span className="heroStatValue">1k+</span>
                <span className="heroStatLabel">Athletes</span>
              </div>
              <div className="heroStat">
                <span className="heroStatValue">10M+</span>
                <span className="heroStatLabel">Views</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

