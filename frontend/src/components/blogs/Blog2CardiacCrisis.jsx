import React, { useEffect } from 'react';
import './blog2.css';

const Blog2CardiacCrisis = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="blog2-container">
      <header>
        <a href="/" style={{ textDecoration: 'none' }}>
          <div className="logo">saah<span>ECG</span></div>
        </a>
        <a href="/blogs" style={{ textDecoration: 'none' }}>
          <div className="header-tag">All Blogs</div>
        </a>
      </header>

      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-content">
          <div className="issue-tag">Critical Issue</div>
          <h1>India's <span className="accent">Silent</span> Cardiac <span className="accent2">Crisis</span></h1>
          <p className="hero-sub">We are the world's heart attack capital — and most of us never get a warning. Why India's cardiac care gap is costing millions of lives, and what can change.</p>
          <div className="meta">
            <span>ECPW India</span>
            <span className="meta-bar"></span>
            <span>10 min read</span>
            <span className="meta-bar"></span>
            <span>Public Health</span>
          </div>
        </div>
      </section>

      <div className="container">
        <p>In 1910, James Herrick — an American physician — described, for the first time, the clinical picture of a heart attack. He called it a sudden, devastating event. A crisis. Something you could not miss.</p>

        <p>More than a century later, we have built entire emergency systems around that image of the heart attack: the crushing chest pain, the call to the ambulance, the race to the catheterisation lab. We have trained ourselves to respond to the crisis.</p>

        <p>What we have not trained ourselves for is the silence before it.</p>

        <p>In India, that silence is killing more people than almost any other cause — and we are, for the most part, not even measuring it.</p>

        <h2>The Numbers That Should Alarm Every Physician</h2>

        <div className="stat-grid">
          <div className="stat-block">
            <div className="n">#1</div>
            <div className="l">Cause of death in India — cardiovascular disease, accounting for 28% of all deaths annually</div>
          </div>
          <div className="stat-block">
            <div className="n gold">10</div>
            <div className="l">Years earlier — the average age gap between Indian and Western heart attack patients</div>
          </div>
          <div className="stat-block">
            <div className="n teal">~32M</div>
            <div className="l">Indians currently living with heart disease — the vast majority undiagnosed or undertreated</div>
          </div>
          <div className="stat-block">
            <div className="n">50%</div>
            <div className="l">Of Indian heart attacks occur before age 50 — often in patients with no prior cardiac history</div>
          </div>
        </div>

        <p>These are not projections. They are the present reality. And what makes them particularly devastating is that the majority of these events are preventable — if only the pathology could be detected before it causes catastrophic damage.</p>

        <h2>Why India Is Different</h2>

        <p>The global understanding of cardiovascular risk was built largely on Western populations: older, often sedentary, typically presenting with years of documented hypertension or diabetes before their first cardiac event.</p>

        <p>The Indian patient does not follow this script. Multiple large-scale studies have documented a distinctly Indian cardiac risk profile:</p>

        <ul className="num-list">
          <li><div className="num">01</div><div className="body-text"><strong>Earlier onset of disease</strong>Indian patients develop significant coronary artery disease (CAD) a full decade earlier than their Western counterparts — in their 30s and 40s, not their 50s and 60s. This means the window for early detection is both earlier and narrower.</div></li>
          <li><div className="num">02</div><div className="body-text"><strong>Diffuse small-vessel disease</strong>Indian coronary pathology often involves diffuse involvement of small vessels rather than focal stenosis in large vessels. This pattern is less visible on conventional coronary angiography and significantly less detectable on conventional ECG.</div></li>
          <li><div className="num">03</div><div className="body-text"><strong>High rates of diabetes and insulin resistance</strong>India has 77 million diabetics — the second-largest diabetic population in the world. Diabetes causes silent, painless myocardial ischaemia, meaning patients often have no symptoms until the damage is advanced.</div></li>
          <li><div className="num">04</div><div className="body-text"><strong>Genetic predisposition</strong>South Asians carry a significantly higher genetic risk for CAD, independent of classical risk factors. This means standard risk calculators consistently underestimate risk in Indian patients.</div></li>
          <li><div className="num">05</div><div className="body-text"><strong>Stress and urban lifestyle transition</strong>Rapid urbanisation, occupational stress, sleep disruption, and dietary transition have created a generation experiencing cardiac ageing at an accelerated rate — without the healthcare infrastructure to match.</div></li>
        </ul>

        <h2>The Infrastructure Gap</h2>

        <p>Even if every at-risk patient in India presented to a physician today, the diagnostic infrastructure to detect cardiac disease in its early, treatable form simply does not exist at the scale needed.</p>

        <div className="highlight">
          <div className="label">The Electrophysiology Access Problem</div>
          <p>India has fewer than 500 trained cardiac electrophysiologists serving 1.4 billion people — a ratio of approximately 1 per 3 million. Invasive electrophysiology, the only tool capable of assessing the cardiac conduction system in detail, is available in fewer than 100 hospitals across the country. For a patient in Jodhpur, Patna, or Bhubaneswar, it is effectively inaccessible.</p>
        </div>

        <p>The conventional ECG — available in virtually every clinic and nursing home — is what most patients get. It is fast, cheap, and familiar. But as we have explored, it detects CAD at only 17% before a heart attack, misses 100% of early heart failure, and cannot assess the conduction system at all.</p>

        <p>The result is a vast diagnostic gap: millions of patients with significant, detectable cardiac pathology who present with a normal ECG, are reassured, and are sent home — until they are not.</p>

        <div className="pull-quote">
          <p>"The most dangerous cardiac condition in India today is not the one we are treating — it is the one we are missing."</p>
          <cite>— Clinical observation from ongoing saahECG validation programme, SMS Hospital, Jaipur</cite>
        </div>

        <h2>What Early Detection Could Change</h2>

        <p>The evidence is unambiguous: cardiac outcomes are dramatically better when disease is detected early. A patient with CAD identified before their first MI can be managed with medications, lifestyle intervention, and appropriate revascularisation. A patient who presents with an acute MI — or worse, a cardiac arrest — faces a fundamentally different prognosis and a vastly higher treatment cost.</p>

        <p>Early detection of arrhythmias like Atrial Fibrillation, before the first embolic stroke, can prevent events that leave patients permanently disabled. Early identification of conduction system disease enables prophylactic pacemaker implantation before syncope or sudden death.</p>

        <p>The mathematics of prevention are simple. But prevention requires a diagnostic tool sensitive enough to detect disease before it becomes an emergency. In India, that tool has not existed — until now.</p>

        <h2>saahECG — Designed for the Indian Reality</h2>

        <p>saahECG was not designed to sit in a quaternary cardiac centre. It was designed to work in a physician's clinic, a district hospital outpatient department, a health camp in a rural taluka. Its test takes 12 seconds. Its electrode placement is identical to conventional ECG. Its AI generates a complete diagnostic report with no specialist interpretation required.</p>

        <p>In a country where the cardiac diagnostic gap is widest precisely at the level of primary and secondary care — where the majority of patient contact happens, and where the majority of cardiac events are first missed — saahECG's capability profile is not a luxury. It is a necessity.</p>

        <p>Detecting CAD before MI occurs in a 44-year-old diabetic male at a general physician's clinic in Jaipur. Identifying pre-onset Atrial Fibrillation in a 58-year-old woman before her first stroke in a nursing home in Jodhpur. Characterising a complete AV block in a 70-year-old before syncope and injury in a rural primary health centre. These are not aspirational scenarios. They are what this technology makes possible, today.</p>

        <p>India does not need to wait for its cardiac crisis to worsen. It needs better tools at the point where patients already are.</p>

        <div className="cta-strip">
          <h3>Bring saahECG to Your Practice</h3>
          <p>CE MDR certified. CDSCO licensed. Validated at SMS Hospital, Jaipur. Deployable in any clinical setting — no special infrastructure required.</p>
          <a href="/" className="btn">Request Information</a>
        </div>

        <div className="tags">
          <span className="tag">India Cardiac Health</span>
          <span className="tag">Heart Disease Prevention</span>
          <span className="tag">saahECG</span>
          <span className="tag">Non-Invasive Cardiology</span>
          <span className="tag">ECPW India</span>
          <span className="tag">Early Detection</span>
        </div>

      </div>
    </div>
  );
};

export default Blog2CardiacCrisis;
