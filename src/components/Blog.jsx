import React from "react";
import { useLocation } from "react-router-dom";
import parse from "html-react-parser";

function Blog() {
  const location = useLocation();
  const blog = location.state;

  console.log(location);
  if (!blog) {
    return <div>Blog data not available.</div>; // Handle case if no data is passed
  }

  return (
    <div className="max-w-3xl mx-auto bg-white overflow-hidden mt-2 py-8">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          {blog.title}
        </h1>
        <p className="text-gray-600 text-sm">{blog.subtitle}</p>
      </div>

      {/* Author Info */}
      <div className="flex items-center py-4">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={"https://via.placeholder.com/40"}
            alt="userImage"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-semibold text-gray-700">
            {blog.username}
          </div>
          <div className="text-xs text-gray-500">
            Published on <span>12th Jan 2024</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="w-full h-64 bg-gray-100">
        <img
          src={blog.imageUrl || "https://via.placeholder.com/400"}
          alt="featured image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Blog Content */}
      <div className="py-6">
        <div className="text-gray-800 text-base leading-relaxed">
          <div className="browser-css">{parse(blog.content)}</div>
        </div>
      </div>

      {/* Interaction Section */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-10 text-gray-500">
          <span className="hover:text-blue-500 cursor-pointer">
            👍
          </span>
          <span className="hover:text-red-500 cursor-pointer">
            ❤️
          </span>
          <span className="hover:text-gray-700 cursor-pointer">
            💬 Comment
          </span>
        </div>
        <div className="text-gray-500 hover:text-green-500 cursor-pointer">
          🔗 Share
        </div>
      </div>
    </div>
  );
}

export default Blog;
