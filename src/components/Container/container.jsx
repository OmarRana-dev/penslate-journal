import React from "react";

function Container({ children }) {
  return (
    <div className="w-full max-w-7xl mx-auto  bg-white">
      {children}
    </div>
  );
}

export default Container;
