import './About.scss';

const About = () => {
  return (
    <div id='aboutOak'>
      <div id='sectionIntro'>
        <h2>ABOUT OAK.</h2>
        <p>
          <span id='WhiteText'>
            {' '}
            OAKONSULT DISABILITY OUTREACH (OAKONSULT){' '}
          </span>
          Is A Mission Focused On Introducing People With{' '}
          <span id='WhiteText'>Special Needs Children</span>
          (Parents/ Carers) To The Possibility Of{' '}
          <span id='WhiteText'>
            {' '}
            Having A Purposeful And Fufilled Lifestyle
          </span>{' '}
          Despite Life Demands Associated With The{' '}
          <span id='WhiteText'>Caring Role.</span> We Also Work With{' '}
          <span id='WhiteText'></span>Churches And Other Organizations To Create
          Awareness And Build <span id='WhiteText'>Inclusive Culture</span> In
          Relation To People With Disability And Their Families
        </p>
      </div>
      <div id='OurMission'>
        <div id='MissionContent' className='content'>
          <div id='sectionIcon'></div>
          <h2>Our Mission</h2>
          <p>
          OAKONSULT’s mandate is to introduce the gospel of Christ to Carers. We empower Carers and families dealing with disability matters with biblical principles and truths that will enable them find fulfilment at whatever stage they might be in their individual journeys.
          </p>
        </div>
      </div>

      <div id='OurVision'>
        <div id='VisionContent' className='content'>
          <div id='sectionIcon'></div>
          <h2>Our Vision</h2>
          <p>
          We see families within the disability community empowered, flourishing, 
          and living the dominion life victoriously as a people made in the image of God!
          </p>
        </div>
      </div>

      <div id='OurCreed'>
        <div id='CreedContent' className='content'>
          <div id='sectionIcon'></div>
          <h2>Our Creed</h2>
          <p>
          We believe in the sovereignty of God the Father, the Son, and the Holy Spirit in the affairs of man. 
          We hold on to the promise of ‘life in abundance’ as promised in John 10:10b.
          </p>
        </div>
      </div>

      <div id='ourValues'>
        <div id='ValueContent' className='content'>
          <div id='sectionIcon'></div>
          <h2>Our Values</h2>
          <ul>
            <li>Faith</li>
            <li>Strength</li>
            <li>Endurance</li>
            <li>Resilience</li>
            <li>Kindness</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;
