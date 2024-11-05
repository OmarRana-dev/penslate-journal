import React from "react";
import { format } from "date-fns";

function BlogDate({ date }) {
  // Convert and format the date from ISO 8601 string
  const formattedDate = format(new Date(date), "do MMM yyyy");

  return (
    <div className="text-xs text-gray-500">
      Published on <span>{formattedDate}</span>
    </div>
  );
}

export default BlogDate;
