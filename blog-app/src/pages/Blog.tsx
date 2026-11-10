import { Link } from "react-router-dom";
import { posts } from "../lib/posts";

function Blog() {
  return (
    <div>
      <h1>Blog Posts</h1>
      <p>Select a post to read more.</p>
      {/* map goes through each post and creates a card. */}
      {posts.map((post) => (
        <div className="card mb-3" key={post.id}>
          <div className="card-body">
            <h4>{post.title}</h4>
            <Link to={`/blog/${post.slug}`}>Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
