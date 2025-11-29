import { useParams, Link } from "react-router-dom";
import { blogs } from "../../data/blogs";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog)
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Blog not found</h1>
        <Link to="/blogs" className="text-green-600 underline">
          Go Back
        </Link>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl"
      />

      <h1 className="text-4xl font-bold mt-6 text-green-700">
        {blog.title}
      </h1>

      <div
        className="mt-6 text-gray-700 leading-relaxed blog-content"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      <Link
        to="/blogs"
        className="inline-block mt-8 text-green-600 font-semibold"
      >
        ← Back to Blogs
      </Link>

      <style>{`
        .blog-content h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin-top: 1rem;
          color: #14532d;
        }
        .blog-content p {
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
}
