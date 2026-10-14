import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  return (
    <>
      <Navbar />

      <header className="waystation-page-header">
        <div className="waystation-header-inner">
          <div>
            <div className="eyebrow">Emmet County, Michigan</div>
            <h1>The Northern Wings <em>Waystation.</em></h1>
            <p className="lede">A certified Monarch Waystation on a real migratory corridor — where science, conservation, and community come together to give monarchs a fighting chance.</p>
          </div>
          <div className="header-img-wrap">
            <img
              className="header-img"
              src="/emmet-county-map.jpg"
              alt="Map of Emmet County, Michigan showing the fall monarch migration route through Little Traverse Bay, Petoskey, and Harbor Springs"
              loading="eager"
            />
            <div className="cert-badge-float" aria-label="Certified Monarch Waystation #54310">MONARCH<br />WATCH<br />#54310</div>
          </div>
        </div>
      </header>

      <section className="location">
        <div className="location-inner">
          <div>
            <div className="section-label">— Location</div>
            <h2>A natural funnel point for <em>migrating monarchs.</em></h2>
            <p>The Northern Wings Waystation is in Emmet County, MI — the northernmost part of Michigan's Lower Peninsula (The Mitten), positioned between Lake Michigan and Lake Huron.</p>
            <p>The eastern population of the Monarch butterfly migrates each year between the northern U.S. and Canada and overwintering sites in Mexico. In spring, monarchs spread northward and repopulate the Great Lakes region. In late summer and fall, a new generation heads south — and many pass directly through northern Michigan on their way toward Mexico.</p>
            <p>Because of the Great Lakes, monarch migration is not a straight path. These butterflies tend to follow shorelines and natural land corridors, creating concentrated travel routes. Emmet County forms one of these natural funnel points, making it an especially important passage area during migration.</p>
          </div>
          <ul className="location-facts">
            <li>
              <span className="fact-label">County</span>
              <span>Emmet County, Michigan — northern tip of the Lower Peninsula</span>
            </li>
            <li>
              <span className="fact-label">Land</span>
              <span>Private property; secured landowner permission for long-term conservation use</span>
            </li>
            <li>
              <span className="fact-label">History</span>
              <span>Former farmland, now managed exclusively for wildlife habitat</span>
            </li>
            <li>
              <span className="fact-label">Size</span>
              <span>Approximately 4× the average Monarch Waystation — over 1.2 acres</span>
            </li>
            <li>
              <span className="fact-label">Corridor</span>
              <span>Situated on a confirmed monarch migration corridor between Lake Michigan and Lake Huron</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="steps">
        <div className="steps-inner">
          <div className="steps-head">
            <div className="section-label">— How we built it</div>
            <h2>From research to <em>roots in the ground.</em></h2>
          </div>
          <div className="step-list">
            <div className="step">
              <div className="step-num">01</div>
              <div>
                <h3>Research</h3>
                <p>Consulted Monarch Watch, local conservation experts, and reviewed scientific literature on monarch migration corridors to identify the highest-impact location in northern Michigan.</p>
                <p>Collaborated with Dr. Nick Haddad (Michigan State University) and Dr. Nate Sanders (University of Michigan) on project planning, optimal milkweed species selection, and impact-measurement frameworks.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div>
                <h3>Selecting the land</h3>
                <p>Secured permission from a private landowner on property that sits directly on the migration corridor, is protected from road exposure, and has established soil conditions ideal for native plant growth.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div>
                <h3>Making a plan</h3>
                <p>Determined native seed types that benefit monarchs and work with the local soil profile. Mapped coverage and seed amounts, identified optimal planting times, and selected planting methods appropriate for the scale of the site.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <div>
                <h3>Securing resources</h3>
                <p>Native seeds were secured through private donations. The landowner contributed time and equipment as part of broader habitat management. Local conservation partners provided additional support.</p>
              </div>
            </div>
            <div className="step">
              <div className="step-num">05</div>
              <div>
                <h3>Planting</h3>
                <p>Seeding was timed as close to first frost as possible to avoid early germination — perfectly timed for cold stratification. The site was tilled and seeded using a seed drill and cultipack method to ensure even establishment across the full acreage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="highlights" id="highlights">
        <div className="highlights-head">
          <h2>Project highlights, <em>month by month</em></h2>
          <p>A growing season at the waystation: from seedling to sanctuary.</p>
        </div>
        <div className="timeline">
          <article className="month">
            <img className="month-img" src="/seed-sourcing.jpg" alt="Holding a bag of Renovo Seed native wildflower mix sourced for the waystation" style={{ objectPosition: 'top' }} />
            <div className="month-meta">
              <span className="month-num">Month 1 · August</span>
              <span className="month-tag">Seed sourcing</span>
            </div>
            <h3>The seeds arrived</h3>
            <p>After researching Michigan-native species, we sourced a custom wildflower and milkweed blend from Renovo Seed — chosen for bloom timing, monarch host value, and regional hardiness.</p>
          </article>
          <article className="month">
            <img className="month-img" src="/avery-tractor.avif" alt="Avery Siudara standing beside farm equipment used for waystation site preparation" />
            <div className="month-meta">
              <span className="month-num">Month 2 · September</span>
              <span className="month-tag">Site prep</span>
            </div>
            <h3>Breaking ground</h3>
            <p>With a tractor, brush mower, and seed drill on loan, we cleared and prepped the field — laying the groundwork for over an acre of native wildflower and milkweed habitat.</p>
          </article>
          <article className="month">
            <img className="month-img" src="/seed-drill.jpg" alt="Land Pride seed drill poised over freshly tilled soil, ready to plant the native wildflower mix" />
            <div className="month-meta">
              <span className="month-num">Month 3 · October</span>
              <span className="month-tag">Planting day</span>
            </div>
            <h3>Seeds planted</h3>
            <p>With the Land Pride drill loaded and the field tilled, we made pass after pass across the acre — pressing thousands of native wildflower and milkweed seeds into the soil. This was done as late in season as possible to avoid early germination but before the first snow.</p>
          </article>
          <article className="month">
            <img src="/month-4.jpg" alt="Freshly tilled waystation field ready for seeding" loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 4, marginBottom: 'var(--space-md)' }} />
            <div className="month-meta">
              <span className="month-num">Month 4 · November</span>
              <span className="month-tag">Winterizing</span>
            </div>
            <h3>Ready for winter!</h3>
            <p>The waystation fields are ready for a long winter's nap.</p>
          </article>
          <article className="month month-span">
            <img src="/month-5-8.png" alt="Heavy snow covering the waystation fields in winter" loading="lazy" style={{ width: '100%', aspectRatio: '8/3', objectFit: 'cover', objectPosition: 'top', borderRadius: 4, marginBottom: 'var(--space-md)' }} />
            <div className="month-meta">
              <span className="month-num">Months 5–8 · December–March</span>
              <span className="month-tag">Winter</span>
            </div>
            <h3>Winter!</h3>
            <p>Northern Michigan experienced a classic, heavy snowfall season. Lake-effect belts and inland areas easily surpassed 125 to 150 inches of total accumulation. This included a late blizzard in March which dropped 20" of snow on the waystation.</p>
          </article>
          <article className="month">
            <img src="/month-9.jpg" alt="Bare waystation field in early spring after snow melt" loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'top', borderRadius: 4, marginBottom: 'var(--space-md)' }} />
            <div className="month-meta">
              <span className="month-num">Month 9 · April</span>
              <span className="month-tag">Early spring</span>
            </div>
            <h3>Spring is finally here?</h3>
            <p>By the end of April, the snow had finally melted from the waystation fields. Early spring remained very cold, with no signs of growth yet. Will keep watching!</p>
          </article>
          <article className="month">
            <img src="/month-10.jpg" alt="First green shoots emerging in the waystation field" loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', objectPosition: 'top', borderRadius: 4, marginBottom: 'var(--space-md)' }} />
            <div className="month-meta">
              <span className="month-num">Month 10 · May</span>
              <span className="month-tag">First growth</span>
            </div>
            <h3>Growth?</h3>
            <p>The first green shoots from the fields are coming up. Hard to tell what they are though. We planted a mixture of seeds and pre-existing natural grasses will likely also sprout.</p>
          </article>
          <article className="month">
            <img src="/month-11.jpg" alt="Young milkweed plants growing in the waystation field" loading="lazy" style={{ width: '100%', aspectRatio: '4/3', objectFit: 'cover', borderRadius: 4, marginBottom: 'var(--space-md)' }} />
            <div className="month-meta">
              <span className="month-num">Month 11 · June</span>
              <span className="month-tag">Success!</span>
            </div>
            <h3>Success!</h3>
            <p>I could not get up to visit the waystation in June due to school final exams and sports playoffs. But a neighbor snapped this picture for me. Lots of plants are coming up and I can see stalks of milkweed.</p>
          </article>
          <article className="month">
            <div className="month-img-duo">
              <img src="/milkweed-up-close.jpg" alt="Mature milkweed growing at the waystation" loading="lazy" />
              <img src="/monarch-on-fern.jpg" alt="Monarch butterfly resting on fern" loading="lazy" />
            </div>
            <div className="month-meta">
              <span className="month-num">Month 12 · July</span>
              <span className="month-tag">Monarchs!</span>
            </div>
            <h3>Mature plants and Monarchs are here.</h3>
            <p>Mature Milkweed and Wildflower plants have grown, and more are coming up. The bigger of the two fields is having good growth and we saw our first Monarchs on July 3rd!</p>
          </article>
          <article className="month month-full">
            <div className="month-img-quad">
              <img src="/month-13-a.jpg" alt="Avery with the Northern Wings waystation sign" loading="lazy" />
              <img src="/month-13-b.jpg" alt="Avery pointing out milkweed plant with caterpillar" loading="lazy" />
              <img src="/month-13-c.jpg" alt="Avery documenting progress at the waystation" loading="lazy" />
              <img src="/month-13-d.jpg" alt="Monarch caterpillar on milkweed leaf" loading="lazy" />
            </div>
            <div className="month-meta">
              <span className="month-num">Month 13 · Results</span>
              <span className="month-tag">Year One</span>
            </div>
            <h3>The first growing season.</h3>
            <p>The first growing season has cultivated over 100 native milkweed plants, including at least 40 observed caterpillars — creating meaningful habitat for one of North America's most iconic pollinators.</p>
          </article>
        </div>
      </section>

      <section className="waystation-images" id="certification">
        <div className="waystation-images-inner">
          <div className="section-label">The waystation</div>
          <h2>Official certification &amp; <em>signage.</em></h2>
          <div className="img-grid">
            <img src="/waystation-certificate.jpg" alt="Northern Wings Monarch Watch Certificate of Recognition, Monarch Waystation #54310" />
            <img src="/waystation-sign-photo.jpg" alt="Photo of the Monarch Waystation sign installed at Northern Wings, registered with Monarch Watch" />
          </div>
        </div>
      </section>

      <section className="thankyou">
        <div className="thankyou-inner">
          <div className="section-label">Acknowledgements</div>
          <h2>Thank <em>you.</em></h2>
          <p className="thankyou-lead">This project would not exist without the generosity, expertise, and encouragement of the following people and organizations.</p>
          <ul className="thankyou-list">
            <li><strong>Ken Ginop</strong><span>Kens Conservation</span></li>
            <li><strong>Dr. Nick Haddad</strong><span>Michigan State University</span></li>
            <li><strong>Dr. Nate Sanders</strong><span>University of Michigan</span></li>
            <li><strong>Mrs. Betty Tavener</strong></li>
            <li><strong>Monarch Watch</strong></li>
            <li><strong>Condesa Advisory, Inc.</strong></li>
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Build your own <em>waystation.</em></h2>
          <p>Every garden counts. Our pollinator kits give you everything to start your own monarch habitat — wherever you are.</p>
          <a href="/#kits" className="btn btn-primary">Get a Pollinator Kit <span className="btn-arrow">→</span></a>
        </div>
      </section>

      <Footer />
    </>
  );
}
