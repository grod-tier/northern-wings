import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Plight() {
  return (
    <>
      <Navbar />

      <header className="plight-page-header">
        <div className="plight-page-header-inner">
          <div className="eyebrow">Conservation · Monarch Watch</div>
          <h1>The plight of the <em>monarchs.</em></h1>
          <p className="lede">One of North America's most iconic species faces an uncertain future — but understanding the threats is the first step toward reversing them.</p>
        </div>
      </header>

      <div className="content-img-wrap">
        <img
          className="content-img"
          src="https://images.unsplash.com/photo-1578557391012-48170ca12667?w=1320&h=530&fit=crop&auto=format"
          alt="Monarch butterfly resting on native wildflowers"
          loading="eager"
        />
      </div>

      <main className="prose-content">
        <div className="prose">
          <p>The Monarch butterfly is one of North America's most recognizable and remarkable insects, known for its vivid orange-and-black wings and extraordinary long-distance migration. Each year, monarchs travel thousands of miles between breeding grounds in the United States and Canada and overwintering sites in central Mexico and coastal California. Along the way, they depend on a network of habitats that provide food, shelter, and a place to reproduce.</p>
          <p>Monarch butterflies are unique because their life cycle is entirely dependent on milkweed plants. Female monarchs lay their eggs exclusively on milkweed, which serves as the sole food source for their caterpillars. As adults, monarchs rely on a wide variety of nectar-producing flowers for energy during migration and breeding. This close relationship with native plants makes them especially sensitive to environmental changes.</p>
          <p>In recent decades, monarch populations have declined significantly. The eastern population, which migrates to Mexico, has experienced dramatic fluctuations and long-term decreases, while the western population has dropped to a fraction of its historic size. Scientists and conservation groups, including Monarch Watch, attribute these declines to habitat loss, widespread pesticide use, and the impacts of climate change.</p>
          <p>The loss of milkweed across agricultural and developed landscapes has been particularly damaging, removing critical breeding habitat from the monarch's migratory path. As a result, monarchs face increasing challenges in completing their life cycle. However, there is hope: individuals, communities, and organizations can make a meaningful difference by restoring habitat and planting native species. Even small actions — like creating a Monarch Waystation — can help support the recovery of this iconic species.</p>
        </div>

        <div className="links-section">
          <h2>Learn more</h2>
          <ul className="resource-list">
            <li>
              <a href="https://www.monarchwatch.org/" target="_blank" rel="noopener noreferrer">Monarch Watch — Learn About Monarchs</a>
              <p>A great all-in-one resource covering biology, migration, tagging, and how to build a Monarch Waystation.</p>
            </li>
            <li>
              <a href="https://xerces.org/monarchs" target="_blank" rel="noopener noreferrer">Xerces Society — Monarch Conservation</a>
              <p>One of the leading conservation organizations. Includes population data, threats, and practical ways to help.</p>
            </li>
            <li>
              <a href="https://www.monarchwatch.org/resource/" target="_blank" rel="noopener noreferrer">Monarch Watch Resource Library</a>
              <p>A curated collection of monarch research, education tools, and conservation programs.</p>
            </li>
          </ul>
        </div>
      </main>

      <section className="plight-cta-band">
        <h2>Take action for the <em>monarch.</em></h2>
        <p>Help us restore habitat — one garden, one kit, one waystation at a time.</p>
        <a href="/#kits" className="btn btn-primary">Get a Pollinator Kit <span className="btn-arrow">→</span></a>
      </section>

      <Footer />
    </>
  );
}
