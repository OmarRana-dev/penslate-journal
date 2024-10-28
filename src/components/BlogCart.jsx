import React from "react";

function BlogCard({
  headline,
  description,
  username,
  likesCount,
  commentsCount,
}) {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 max-w-2xl mx-auto">
      <div className="md:w-2/3 p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {headline}
        </h1>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <div className="flex items-center mb-4">
          <div className="text-sm text-gray-500">Posted by</div>
          <span className="text-sm font-semibold text-gray-700 ml-2">
            {username}
          </span>
        </div>
        <div className="flex gap-y-4 space-x-4 text-gray-500">
          {likesCount > 0 && (
            <span className="hover:text-blue-500 cursor-pointer">
              👍{likesCount}
            </span>
          )}
          {commentsCount > 0 && (
            <span className="hover:text-red-500 cursor-pointer">
              💬{commentsCount}
            </span>
          )}
          <span className="hover:text-green-500 cursor-pointer">
            🔖
          </span>
        </div>
      </div>
      <div className="md:w-1/3 h-48 md:h-auto">
        <img
          className="object-cover w-full h-full"
          src="https://via.placeholder.com/150"
          alt="Blog post thumbnail"
        />
      </div>
    </div>
  );
}

export default BlogCard;
