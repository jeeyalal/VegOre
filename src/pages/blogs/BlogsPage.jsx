import { Link } from "react-router-dom";
import { blogs } from "../../data/blogs";

export default function BlogsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-green-700 mb-6 text-center">
        VegOre Blogs
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-bold">{blog.title}</h2>
              <p className="text-gray-600 mt-2 line-clamp-2">
                {blog.shortDesc}
              </p>

              <Link
                to={`/blogs/${blog.slug}`}
                className="inline-block mt-3 text-green-600 font-semibold hover:text-green-800"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

