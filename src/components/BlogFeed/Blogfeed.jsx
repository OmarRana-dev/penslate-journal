import React from "react";
import { BlogCard } from "../";

function Blogfeed() {
  const headline = "10 Advanced JavaScript Tricks You Don’t Know";
  const description =
    "Enhance your coding skills with these lesser-known JavaScript techniques.";
  const username = "bhavik prajapati";

  return (
    <>
      <div className="flex flex-col gap-4 pt-8">
        <BlogCard
          headline={headline}
          description={description}
          username={username}
          likesCount={5}
          commentsCount={1}
        />
        <BlogCard
          headline={headline}
          description={description}
          username={username}
          likesCount={0}
          commentsCount={0}
        />
        <BlogCard
          headline={headline}
          description={description}
          username={username}
          likesCount={15}
          commentsCount={0}
        />
        <BlogCard
          headline={headline}
          description={description}
          username={username}
          likesCount={55}
          commentsCount={21}
        />
        <BlogCard
          headline={headline}
          description={description}
          username={username}
          likesCount={71}
          commentsCount={0}
        />
      </div>
    </>
  );
}

export default Blogfeed;
