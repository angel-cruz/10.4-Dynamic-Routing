import { Link, useParams } from "react-router-dom";
import { posts } from "../lib/posts";

function BlogPost() {
  // Read the slug from the URL, such as /blog/learning-react.
  const { slug } = useParams();

  // Find the post that has the same slug.
  const post = posts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div>
        <h2>Post not found</h2>
        <Link to="/blog">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <Link to="/blog">Back to Blog</Link>
    </div>
  );
}

export default BlogPost;
