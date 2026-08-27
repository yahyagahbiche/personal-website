import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { getPost } from "../lib/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="section">
        <div className="wrap">
          <p className="section-label">Blog</p>
          <p>Couldn't find that post.</p>
          <Link to="/blog" className="hero-scroll">
            ← Back to all posts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="wrap">
        <Link to="/blog" className="hero-scroll">
          ← Back to all posts
        </Link>
        <p className="section-label" style={{ marginTop: "1.5rem" }}>
          {post.category}
        </p>
        <h1 className="post-title">{post.title}</h1>
        <time className="post-date">{post.date}</time>
        <div className="prose post-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
}
