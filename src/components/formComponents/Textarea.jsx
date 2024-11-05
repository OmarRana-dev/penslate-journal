import React, { useState, useId, forwardRef } from "react";

const Textarea = (
  {
    label,
    placeholder = "Type here...",
    initialHeight = "auto",
    autoGrow = true,
    className = "",
    onChange,
    ...rest
  },
  ref
) => {
  const [height, setHeight] = useState(initialHeight);
  const id = useId();

  const handleInput = (e) => {
    if (autoGrow) {
      e.target.style.height = "auto"; // Reset height
      e.target.style.height = `${e.target.scrollHeight}px`; // Adjust to scroll height
    }
    onChange && onChange(e); // Trigger onChange if provided
  };

  return (
    <>
      <div className="w-full">
        {label && (
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <textarea
          placeholder={placeholder}
          style={{ resize: "none", height }} // Fixed height by default
          className={`border px-3  py-2 w-full outline-none overflow-hidden ${className}`} // Append custom classes
          onInput={handleInput}
          ref={ref}
          id={id}
          {...rest}
        />
      </div>
    </>
  );
};

export default forwardRef(Textarea);
