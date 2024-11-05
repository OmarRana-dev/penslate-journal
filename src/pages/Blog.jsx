import React, { useEffect, useState } from "react";
import {
  useNavigate,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import parse from "html-react-parser";
import appwriteService from "../appwrite/appwriteConfigService";
import verticalDots from "../assets/more-vertical.svg";
import { BlogDate } from "../components";

function Blog() {
  const location = useLocation();
  const [blogData, setBlogData] = useState(location.state);
  const [imageUrl, setImageUrl] = useState(blogData?.imageUrl);

  const userData = useSelector((state) => state.auth.userData);
  const navigate = useNavigate();

  const isAuthor = userData
    ? blogData?.authorId === userData.$id
    : false;
  const { slug } = useParams();

  useEffect(() => {
    console.log(blogData);
    if (!blogData) {
      console.log(blogData);
      if (slug) {
        console.log(slug);
        appwriteService.getBlog(slug).then((blogData) => {
          if (blogData) {
            setBlogData(blogData);

            appwriteService
              .getFilePreview(blogData.featuredImage)
              .then((url) => {
                setImageUrl(url);
                setBlogData((prevData) => ({
                  ...prevData,
                  imageUrl: url,
                }));

                appwriteService
                  .getAuthor(blogData.authorId)
                  .then((data) => {
                    setBlogData((prevData) => ({
                      ...prevData,
                      username: data.documents[0].username,
                      userImage: data.documents[0].userImage,
                    }));
                  });
              });
          }
        });
      }
    }
  }, [slug, blogData]);

  const deleteBlog = () => {
    appwriteService.deleteBlog(blogData.$id).then((data) => {
      if (data) {
        appwriteService.deleteFile(blogData.featuredImage);
        navigate("/");
      }
    });
  };

  return blogData ? (
    <div className="max-w-3xl mx-auto  overflow-hidden mt-2 px-4 py-8 relative">
      {isAuthor && (
        <div className=" dropdown dropdown-bottom dropdown-left absolute right-0 top-2 p-2">
          <div tabIndex={0} role="button" className="">
            <img src={verticalDots} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-gray-200 font-lights text-gray-600 z-[1] w-52 p-2 shadow"
          >
            <li>
              <Link
                to={`/editor/${blogData.$id}`}
                state={{
                  blogData,
                }}
              >
                <div>Edit Story</div>
              </Link>
            </li>
            <li>
              <div onClick={deleteBlog}>Delete Story</div>
            </li>
          </ul>
        </div>
      )}
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          {blogData.title}
        </h1>
        <p className="text-gray-600 text-sm">{blogData.subtitle}</p>
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
            {blogData.username}
          </div>
          <BlogDate date={blogData.$createdAt} />
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full max-w-full h-auto bg-gray-100 mt-4">
        <img
          src={imageUrl || "https://via.placeholder.com/400"}
          alt="Featured preview"
          className="object-cover w-full h-auto max-h-96 aspect-[16/9] sm:aspect-[21/9]"
        />
      </div>

      {/* Blog Content */}
      <div className="py-6">
        <div className="text-gray-800 text-base leading-relaxed">
          <div className="browser-css">{parse(blogData.content)}</div>
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
  ) : (
    <div>data not avalible</div>
  );
}

export default Blog;
