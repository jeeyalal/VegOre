

// import { useParams, Link } from "react-router-dom";
// import { blogs } from "../../data/blogs";

// export default function BlogDetails() {
//   const { slug } = useParams();
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog)
//     return (
//       <div className="text-center py-20">
//         <h1 className="text-3xl font-bold">Blog not found</h1>
//         <Link to="/blogs" className="text-green-600 underline">
//           Go Back
//         </Link>
//       </div>
//     );

//   return (
//     <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-14 px-4">
//       <div className="max-w-4xl mx-auto">
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full h-80 object-cover rounded-2xl shadow-lg"
//         />

//         <h1 className="text-4xl font-bold text-green-800 mt-8">
//           {blog.title}
//         </h1>

//         <p className="text-gray-500 text-sm mt-2">
//           {blog.date} • {blog.readTime}
//         </p>

//         <div
//           className="mt-8 text-gray-700 leading-relaxed blog-content"
//           dangerouslySetInnerHTML={{ __html: blog.content }}
//         />

//         <Link
//           to="/blogs"
//           className="inline-block mt-10 text-green-700 font-semibold"
//         >
//           ← Back to Blogs
//         </Link>

//         <style>{`
//           .blog-content h2 {
//             font-size: 1.6rem;
//             font-weight: 700;
//             margin-top: 1.4rem;
//             color: #166534;
//           }
//           .blog-content p {
//             margin-top: 0.6rem;
//             font-size: 1.05rem;
//           }
//         `}</style>
//       </div>
//     </div>
//   );
// }



import { useParams, Link } from "react-router-dom";
import { blogs } from "../../data/blogs";
import { ArrowLeft, Clock, Calendar, Share2, BookmarkPlus, Tag } from "lucide-react";

export default function BlogDetails() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4">
        <div className="text-center bg-white p-12 rounded-2xl shadow-lg max-w-md">
          <div className="text-red-500 mb-4">
            <BookmarkPlus size={64} className="mx-auto" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Blog Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition"
          >
            <ArrowLeft size={20} />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.shortDesc,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-14 px-4">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to All Blogs
        </Link>

        {/* Hero Image */}
        <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 h-96">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          
          {/* Category Badge on Image */}
          <span className="absolute top-6 left-6 text-sm bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold shadow-lg">
            <Tag size={16} className="inline mr-1" />
            {blog.category}
          </span>
        </div>

        {/* Content Card */}
        <article className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
          
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            {blog.title}
          </h1>

          {/* Meta Info Bar */}
          <div className="flex flex-wrap items-center gap-6 pb-6 mb-8 border-b border-gray-200">
            <span className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} className="text-emerald-600" />
              <span className="text-sm font-medium">{blog.date}</span>
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <Clock size={18} className="text-emerald-600" />
              <span className="text-sm font-medium">{blog.readTime}</span>
            </span>
            
            {/* Share Button */}
            <button
              onClick={handleShare}
              className="ml-auto flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
            >
              <Share2 size={18} />
              <span className="text-sm">Share</span>
            </button>
          </div>

          {/* Blog Content */}
          <div
            className="prose prose-lg max-w-none blog-content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </article>

        {/* Related/Navigation Footer */}
        <div className="mt-12 flex justify-center">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl"
          >
            <ArrowLeft size={20} />
            Explore More Articles
          </Link>
        </div>

        {/* Custom Styling for Blog Content */}
        <style>{`
          .blog-content {
            color: #374151;
            line-height: 1.8;
          }
          .blog-content h2 {
            font-size: 1.875rem;
            font-weight: 700;
            margin-top: 2.5rem;
            margin-bottom: 1rem;
            color: #166534;
            border-left: 4px solid #10b981;
            padding-left: 1rem;
          }
          .blog-content h3 {
            font-size: 1.5rem;
            font-weight: 600;
            margin-top: 2rem;
            margin-bottom: 0.75rem;
            color: #059669;
          }
          .blog-content p {
            margin-top: 1rem;
            margin-bottom: 1rem;
            font-size: 1.125rem;
          }
          .blog-content ul, .blog-content ol {
            margin-top: 1rem;
            margin-bottom: 1rem;
            padding-left: 1.5rem;
          }
          .blog-content li {
            margin-top: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .blog-content strong {
            color: #065f46;
            font-weight: 600;
          }
          .blog-content a {
            color: #10b981;
            text-decoration: underline;
          }
          .blog-content a:hover {
            color: #059669;
          }
          .blog-content blockquote {
            border-left: 4px solid #10b981;
            padding-left: 1.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            color: #6b7280;
            background: #f0fdf4;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
          }
          .blog-content img {
            border-radius: 1rem;
            margin: 2rem 0;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          }
          .blog-content code {
            background: #f3f4f6;
            padding: 0.2rem 0.4rem;
            border-radius: 0.25rem;
            font-size: 0.9em;
            color: #059669;
          }
        `}</style>
      </div>
    </div>
  );
}