import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

export default function Blog() {
  if (posts.length === 0) {
    return (
      <section className="section">
        <div className="wrap">
          <p className="section-label">Blog</p>
          <p className="prose-note">Coming soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="wrap">
        <p className="section-label">Blog</p>
        <ul className="post-list">
          {posts.map((post) => (
            <li className="post-card" key={post.slug}>
              <Link to={`/blog/${post.slug}`} className="post-card-title">
                {post.title}
              </Link>
              <div className="post-card-meta">
                <span className="tag">{post.category}</span>
                <time>{post.date}</time>
              </div>
              <p className="post-card-excerpt">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
