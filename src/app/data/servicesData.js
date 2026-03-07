const servicesData = [
  {
    slug: "1-2-1-coaching",
    title: "1-2-1 Coaching",
    subtitle: "Tailored Training for Every Cricketer",
    detail: `
Our 1-2-1 coaching sessions are tailored to players of all ages and abilities, from complete beginners to experienced cricketers aspiring to reach county, regional, or professional levels. Whether you're looking to establish a solid technical foundation or refine advanced skills, our expert coaches provide personalised training designed to suit your individual needs.

Using high-level technical analysis, biomechanical breakdowns, and real-time video feedback, we ensure that every session is structured to provide maximum improvement.

**Our coaching covers:**
✔ Batting Technique & Shot Selection  
✔ Bowling Mechanics, Pace, and Spin Control  
✔ Fielding Skills & Match Awareness  
✔ Game Strategy & Mental Resilience

**How It Works**  
Our 1-2-1 coaching process begins with an initial assessment to ensure we understand your current level, expectations, and goals. During this assessment, we analyse your technique using video feedback and create a tailored plan. Every session concludes with a short feedback form and homework drills to ensure continuous improvement.

This high-end service is the pinnacle of the Masterclass Cricket experience — focused, personalised development to help you reach your full potential.
    `,
    image: "/1-2-1-coaching.png",
    expectations: [
      {
        title: "Personalized Training",
        image: "/images/expect-personalized.jpg",
      },
      { title: "Expert Guidance", image: "/images/expect-expert.jpg" },
      { title: "Flexible Scheduling", image: "/images/expect-schedule.jpg" },
    ],
  },
  {
    slug: "small-group-sessions",
    title: "Small Group Sessions",
    subtitle: "Train with Peers, Excel Together",
    detail: `
Our small group sessions provide the perfect balance of individual attention and competitive learning. Each cricketer benefits from personalised coaching while experiencing the match intensity of group dynamics. We focus on scenario-based training, tactical awareness, and pressure simulations, ensuring players develop their skills in real-match conditions.

This approach enhances decision-making, adaptability, and confidence, preparing players for high-level cricket. For those who thrive in a team-driven environment, small group sessions are the key to unlocking their potential.
    `,
    image: "/small-group-sessions.png",
    expectations: [
      { title: "Scenario Training", image: "/images/expect-scenario.jpg" },
      { title: "Match Simulations", image: "/images/expect-match.jpg" },
      { title: "Peer Learning", image: "/images/expect-peers.jpg" },
    ],
  },
  {
    slug: "masterclass-academy-sessions",
    title: "Masterclass Academy Sessions",
    subtitle: "Structured Training for Age-Group Development",
    detail: `
The Masterclass Academy is designed to create strong age-group training environments where players benefit from practising alongside their peers while receiving expert coaching. Our structured sessions focus on technical, tactical, and physical development, ensuring every player improves in a challenging yet supportive atmosphere.

At the heart of our academy is the Masterclass Cricket Curriculum, which provides a clear development pathway. Players are tested weekly in a group environment, tracking progress in batting, bowling, fielding, and game awareness. By training in structured, high-quality sessions, players build their skills, gain confidence, and develop match-winning abilities.
    `,
    image: "/masterclass-academy.png",
    expectations: [
      {
        title: "Curriculum-Based Coaching",
        image: "/images/expect-curriculum.jpg",
      },
      { title: "Weekly Assessments", image: "/images/expect-assess.jpg" },
      { title: "Skill Progression", image: "/images/expect-progression.jpg" },
    ],
  },
  {
    slug: "elite-performance-clinics",
    title: "Elite Performance Clinics",
    subtitle: "For Cricketers Who Aspire to Be the Best",
    detail: `
Our Elite Performance Camps are designed for advanced players looking to take their game to the highest level. Focusing on technical mastery, tactical intelligence, and elite-level fitness, these camps are for those who want to play at the top—whether that's county, national, or professional cricket.

✔ Biomechanical assessments to perfect technique  
✔ Bowling speed & spin control enhancement  
✔ Advanced batting strategies for professional cricket  
✔ Strength & conditioning for power and endurance  
✔ Exclusive access to professional cricketers & coaches
    `,
    image: "/elite-performance.png",
    expectations: [
      { title: "Biomechanical Assessment", image: "/images/expect-bio.jpg" },
      { title: "Advanced Tactics", image: "/images/expect-tactics.jpg" },
      { title: "Strength & Conditioning", image: "/images/expect-fitness.jpg" },
    ],
  },
  {
    slug: "tours-for-clubs-and-members",
    title: "Tours for Clubs and Members",
    subtitle: "Experience Cricket in Different Conditions",
    detail: `
Our domestic and international tours provide a unique opportunity for players to gain invaluable match experience in different playing environments. Playing in challenging conditions enhances adaptability, cricketing intelligence, and mental resilience—key traits of a successful cricketer.

✔ Competitive fixtures against elite opposition  
✔ Exposure to different pitch & climate conditions  
✔ Specialist coaching from international-level coaches  
✔ Cultural exchange & team bonding experiences
    `,
    image: "/images/tours.jpg",
    expectations: [
      { title: "Competitive Fixtures", image: "/images/expect-fixtures.jpg" },
      { title: "Adaptability Training", image: "/images/expect-adapt.jpg" },
      { title: "Team Bonding", image: "/images/expect-bonding.jpg" },
    ],
  },
  {
    slug: "corporate-team-building-events",
    title: "Corporate Team-Building Events",
    subtitle: "Cricket as a Tool for Leadership & Teamwork",
    detail: `
Our corporate cricket experiences are designed to develop team cohesion, leadership skills, and resilience in a fun and competitive environment. Through interactive coaching sessions and match play, we tailor activities to improve team dynamics in the workplace.

✔ Communication & strategic thinking  
✔ Leadership & decision-making under pressure  
✔ Team bonding & problem-solving skills  

Whether you're looking for a motivational day out or a high-performance leadership workshop, our corporate events offer an unforgettable experience.
    `,
    image: "/images/corporate-events.jpg",
    expectations: [
      { title: "Leadership Drills", image: "/images/expect-leadership.jpg" },
      { title: "Team Activities", image: "/images/expect-team.jpg" },
      { title: "Problem Solving", image: "/images/expect-problem.jpg" },
    ],
  },
  {
    slug: "online-bowling-assessments",
    title: "Online Bowling Assessments",
    subtitle: "Get Expert Feedback—Anytime, Anywhere",
    detail: `
Our online bowling assessments allow players worldwide to receive detailed technical analysis from our expert coaches. Players submit video footage of their bowling action, and our coaching team provides comprehensive feedback to improve performance.

✔ Biomechanical breakdown & correction strategies  
✔ Action efficiency improvements to increase pace & accuracy  
✔ Personalised drills & exercises for long-term success  

Perfect for aspiring fast bowlers and spinners seeking elite-level coaching without geographical barriers.
    `,
    image: "/images/online-bowling.jpg",
    expectations: [
      { title: "Video Analysis", image: "/images/expect-video.jpg" },
      { title: "Correction Plans", image: "/images/expect-correct.jpg" },
      { title: "Targeted Drills", image: "/images/expect-drills.jpg" },
    ],
  },
  {
    slug: "school-coaching-programmes",
    title: "School Coaching Programmes",
    subtitle: "Bringing Expert Coaching to Schools",
    detail: `
At Masterclass Cricket, we provide specialist school coaching to enhance both teacher development and student cricketing ability. Our programmes ensure a structured, engaging, and high-quality coaching experience, helping schools raise their cricketing standards.

**We Offer Two Key Services:**  
- *Teacher Training & Development* – Educational training days designed to improve teachers' cricket knowledge and coaching methods.  
- *Student Masterclasses* – Professional coaching sessions aimed at developing skills, progression, and overall cricketing standards.  

All sessions follow our Masterclass Cricket curriculum, ensuring a fun, structured, and high-quality learning experience for all students.
    `,
    image: "/images/school-coaching.jpg",
    expectations: [
      { title: "Teacher Training", image: "/images/expect-teacher.jpg" },
      { title: "Student Masterclasses", image: "/images/expect-students.jpg" },
      {
        title: "Structured Curriculum",
        image: "/images/expect-curriculum2.jpg",
      },
    ],
  },
  {
    slug: "online-batting-assessments",
    title: "Online Batting Assessments",
    subtitle: "Analyse, Adjust, Improve",
    detail: `
Submit your batting footage for a professional technical breakdown from our coaches. Following the assessment, players receive a one-on-one coaching call with clear, actionable steps to improve batting.

✔ Detailed video analysis of stance, shot selection & footwork  
✔ Strategies for building a strong, adaptable batting game  
✔ Personalised drills to enhance timing, power, and shot range
    `,
    image: "/images/online-batting.jpg",
    expectations: [
      { title: "Shot Analysis", image: "/images/expect-shot.jpg" },
      { title: "Technique Fixes", image: "/images/expect-tech.jpg" },
      { title: "Personal Plans", image: "/images/expect-plan.jpg" },
    ],
  },
  {
    slug: "mental-mind-mapping-course",
    title: "Mental Mind Mapping Course",
    subtitle: "Train Your Mind. Elevate Your Game.",
    detail: `
Success in cricket isn't just about skill—it's about mindset. Our Masterclass Mind Mapping course helps cricketers develop a stronger mental game, equipping them to handle pressure, stay focused, and perform at their best when it matters most.

Through expert-led sessions, players learn mental techniques to enhance confidence, resilience, and decision-making on the field.  

Whether you're striving for peak performance or looking to overcome mental barriers, this course gives you the mental edge to succeed.
    `,
    image: "/images/mental-mind-mapping.jpg",
    expectations: [
      { title: "Focus Techniques", image: "/images/expect-focus.jpg" },
      { title: "Stress Management", image: "/images/expect-stress.jpg" },
      { title: "Decision Drills", image: "/images/expect-decision.jpg" },
    ],
  },
  {
    slug: "master-class-elite-academy",
    title: "Master Class Elite Academy",
    subtitle: "Professional-Level Coaching for Future Stars",
    detail: `
The Master Class Elite Academy is designed for serious cricketers preparing for professional-level cricket. Combining high-performance coaching, strength and conditioning, tactical awareness, and performance psychology, this academy offers the complete package for aspiring professionals.

✔ Advanced player development programs  
✔ Personalised performance tracking & analytics  
✔ Access to elite-level facilities and match analysis  
✔ Mentorship from national & international players  
✔ Fitness, nutrition, and recovery guidance  

This is where potential transforms into performance — where the next generation of cricket stars is shaped.
    `,
    image: "/images/elite-academy.jpg",
    expectations: [
      { title: "Performance Analytics", image: "/images/expect-analytics.jpg" },
      { title: "Elite Mentorship", image: "/images/expect-mentor.jpg" },
      {
        title: "Full Performance Package",
        image: "/images/expect-package.jpg",
      },
    ],
  },
];

export default servicesData;
