import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import Config from "../../utils/Config";

export default function RTE({
  name,
  control,
  label,
  defaultValue = "",
  className = "",
}) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-base text-gray-700 ">
          {label}
        </label>
      )}

      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange } }) => (
          <Editor
            apiKey={Config.tinymce_APIKEY}
            initialValue={defaultValue}
            init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
              ],
              toolbar:
                "undo redo | blocks | bold italic forecolor | alignleft aligncenter |alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: Helvetica, sans-serif, Arial; font-size: 14px; line-height: 1.6; } h1 { font-size: 24px; font-weight: bold; margin-bottom: 12px; } p { margin-bottom: 10px; } img { max-width: 100%; height: auto; }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
}
