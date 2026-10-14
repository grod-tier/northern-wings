import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { getJournalPosts, imageUrl } from '../lib/sanity.js';

export default function Journal() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJournalPosts().then(data => {
      setPosts(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Navbar />
      <header className="journal-page-header">
        <div className="journal-page-header-inner">
          <div className="eyebrow">Northern Wings</div>
          <h1>Journal</h1>
          <p className="lede">Updates, observations, and lessons from the waystation.</p>
        </div>
      </header>

      <main className="journal-list-wrap">
        {loading ? (
          <div className="journal-loading">Loading posts…</div>
        ) : posts.length === 0 ? (
          <div className="journal-empty">No posts yet. Check back soon.</div>
        ) : (
          <div className="journal-grid">
            {posts.map(post => (
              <article className="journal-card" key={post._id}>
                {post.mainImage && (
                  <Link to={`/journal/${post.slug.current}`} className="journal-card-img-link">
                    <img
                      src={imageUrl(post.mainImage, 600)}
                      alt={post.title}
                      className="journal-card-img"
                      loading="lazy"
                    />
                  </Link>
                )}
                <div className="journal-card-body">
                  {post.publishedAt && (
                    <div className="journal-card-date">
                      {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                  )}
                  <h2 className="journal-card-title">
                    <Link to={`/journal/${post.slug.current}`}>{post.title}</Link>
                  </h2>
                  {post.excerpt && <p className="journal-card-excerpt">{post.excerpt}</p>}
                  <Link to={`/journal/${post.slug.current}`} className="journal-read-more">
                    Read more <span>→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}
