import React, { useEffect, useState } from "react";
import { BlogCart } from "../components";
import appwriteService from "../appwrite/appwriteConfigService";

function Blogfeed() {
  const [blogs, setBlogs] = useState([]);
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    appwriteService
      .getBlogs([])
      .then((blogs) => {
        if (blogs) {
          setBlogs(blogs.documents);
        }
      })
      .then(() => {
        appwriteService.getAuthors().then((authorDocs) => {
          // Convert authors array to a lookup object by userId for easy access
          const authorsLookup = authorDocs.reduce((acc, author) => {
            acc[author.userId] = author;
            return acc;
          }, {});
          setAuthors(authorsLookup);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex flex-col gap-4 pt-8 ">
      {blogs.map((blog) => {
        const author = authors[blog.authorId];
        if (author) {
          return (
            <div key={blog.$id}>
              <BlogCart author={author} blog={blog} />
            </div>
          );
        }
        return null; // Skip rendering if no author is found
      })}
    </div>
  );
}

export default Blogfeed;
