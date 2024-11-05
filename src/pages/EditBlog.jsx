import React, { useState } from "react";
import { BlogForm } from "../components";
import { useLocation, useParams } from "react-router-dom";

function EditBlog() {
  const location = useLocation();
  const blog = location.state.blogData;

  console.log(blog);
  const { slug } = useParams();
  const [imageUrl, setImageUrl] = useState(blog?.imageUrl);
  const [blogData, setBlogData] = useState(blog);

  return (
    <>
      <BlogForm blog={blog} />
    </>
  );
}

export default EditBlog;
