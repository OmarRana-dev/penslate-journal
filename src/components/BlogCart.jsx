import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/appwriteConfigService";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCommentDots,
  faShareFromSquare,
  faBookmark,
} from "@fortawesome/free-regular-svg-icons";

function BlogCart({
  $id,
  $createdAt,
  $updatedAt,
  username,
  title,
  subtitle,
  featuredImage,
  content,
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);

  useEffect(() => {
    try {
      appwriteService.getFilePreview(featuredImage).then((url) => {
        setImageUrl(url);
        console.log(url);
      });
    } catch (error) {
      throw new Error(error);
    }
  }, [featuredImage]);

  const likeBlog = (e) => {
    e.stopPropagation();

    setLike(like + 1);
  };

  return (
    <div className="relative max-w-2xl mx-auto shadow-lg px-2 py-4 cursor-default">
      <Link
        to={`blog/${$id}`}
        state={{
          $id,
          $createdAt,
          $updatedAt,
          username,
          title,
          subtitle,
          content,
          imageUrl,
        }}
        className="absolute inset-0 z-10"
      />
      <div className="grid grid-cols-[1fr_.25fr] gap-x-6 ">
        <div className="">
          <div>
            <h1 className="text-xl font-bold text-gray-800 mb-2">
              {title}
            </h1>
            <p className="text-gray-600 text-sm mb-4">{subtitle}</p>
          </div>
          <div className="flex items-center mb-4">
            <div className="text-sm text-gray-500">Posted by</div>
            <span className="text-sm font-semibold text-gray-700 ml-2">
              {username}
            </span>
          </div>
          <div className="flex justify-between gap-y-4 space-x-4 px-2 text-gray-500">
            <span
              className="cursor-pointer text-gray-500 font-mono"
              onClick={(e) => likeBlog(e)}
            >
              <FontAwesomeIcon icon={faHeart} /> {like > 0 && like}
            </span>
            <div className="cursor-pointer text-gray-600 font-mono">
              <FontAwesomeIcon icon={faCommentDots} />{" "}
              {comment > 0 && comment}
            </div>
            <div className="hover:text-green-500 cursor-pointer">
              <FontAwesomeIcon icon={faShareFromSquare} />
            </div>
            <div className="hover:text-green-500 cursor-pointer">
              <FontAwesomeIcon icon={faBookmark} />
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg overflow-hidden w-full ">
            <img
              className="object-cover "
              src={imageUrl || "https://via.placeholder.com/150"}
              alt="Blog post thumbnail"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCart;
