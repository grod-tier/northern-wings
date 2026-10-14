import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { getJournalPost, imageUrl } from '../lib/sanity.js';

function renderBlock(block, i) {
  if (block._type === 'image') {
    return (
      <figure key={i} className="post-figure">
        <img src={imageUrl(block.asset._ref, 900)} alt={block.alt || ''} />
        {block.caption && <figcaption>{block.caption}</figcaption>}
      </figure>
    );
  }
  if (block._type !== 'block') return null;

  const children = (block.children || []).map((span, j) => {
    let text = span.text;
    if (span.marks?.includes('strong')) text = <strong key={j}>{text}</strong>;
    else if (span.marks?.includes('em')) text = <em key={j}>{text}</em>;
    else text = <span key={j}>{text}</span>;
    return text;
  });

  switch (block.style) {
    case 'h2': return <h2 key={i}>{children}</h2>;
    case 'h3': return <h3 key={i}>{children}</h3>;
    case 'blockquote': return <blockquote key={i}>{children}</blockquote>;
    default: return <p key={i}>{children}</p>;
  }
}

export default function JournalPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJournalPost(slug).then(data => {
      setPost(data);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="post-loading">Loading…</div>
        <Footer />
      </>
    );
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="post-not-found">
          <h1>Post not found.</h1>
          <Link to="/journal">← Back to Journal</Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <article className="journal-post">
        <header className="post-header">
          <div className="post-header-inner">
            <Link to="/journal" className="post-back">← Journal</Link>
            {post.publishedAt && (
              <div className="post-date">
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
            )}
            <h1>{post.title}</h1>
            {post.excerpt && <p className="post-excerpt">{post.excerpt}</p>}
          </div>
        </header>

        {post.mainImage && (
          <div className="post-hero-img-wrap">
            <img src={imageUrl(post.mainImage, 1200)} alt={post.title} className="post-hero-img" />
          </div>
        )}

        <div className="post-body">
          {(post.body || []).map((block, i) => renderBlock(block, i))}
        </div>
      </article>
      <Footer />
    </>
  );
}
