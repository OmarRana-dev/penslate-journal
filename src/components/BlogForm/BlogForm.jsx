import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input, RTE, Textarea, Select } from "../index";
import appwriteService from "../../appwrite/appwriteConfigService";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function BlogForm({ blog }) {
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, handleSubmit, getValues, control, watch } =
    useForm({
      defaultValues: {
        title: blog?.title || "",
        subtitle: blog?.subtitle || "",
        content: blog?.content || "",
        status: blog?.status || "active",
      },
    });

  // Initialize with the existing image if it’s an update
  const [imagePreview, setImagePreview] = useState(
    blog ? blog.imageUrl : null
  );

  const onSubmit = useCallback(
    async (data) => {
      // update post
      if (blog) {
        console.log(data);
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;

        const dbBlog = await appwriteService.updateBlog(blog.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (dbBlog) {
          await appwriteService.deleteFile(blog.featuredImage);
          navigate(`/blog/${dbBlog.$id}`);
        }
      } else {
        // create new post
        const file = data.image[0]
          ? await appwriteService.uploadFile(data.image[0])
          : null;
        const dbBlog = await appwriteService.createBlog({
          ...data,
          userId: userData.$id,
          featuredImage: file ? file.$id : undefined,
        });
        console.log(dbBlog);

        if (dbBlog) {
          navigate(`/blog/${dbBlog.$id}`);
        }
      }
    },
    [blog, userData, navigate]
  );

  // Watch the file input for changes
  const watchedImage = watch("image");
  useEffect(() => {
    if (watchedImage && watchedImage.length > 0) {
      const file = watchedImage[0];
      const reader = new FileReader();

      reader.onload = () => {
        setImagePreview(reader.result); // Set the preview to the image data
      };

      reader.onerror = (error) => {
        console.error("Error reading file:", error);
      };

      reader.readAsDataURL(file);
    }
  }, [watchedImage]); // Re-run this effect if the watched file input changes

  return (
    <>
      <div className="max-w-3xl mx-auto bg-white overflow-hidden mt-2 px-3 py-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Textarea
            label="Title :"
            placeholder="Title"
            className="mb-2 outline-none bg-white text-3xl font-mono font-semibold text-gray-800"
            {...register("title", { required: true })}
          />
          <Textarea
            label="SubTitle :"
            placeholder="SubTitle"
            className="mb-2 outline-none bg-white text-base font-medium font-mono text-gray-800"
            {...register("subtitle", { required: true })}
          />

          <Select
            options={["active", "inactive"]}
            label="Status"
            className="mb-6 outline-none bg-white  text-gray-800"
            {...register("status", { required: true })}
          />

          {/* Featured Image */}
          <Input
            label="Featured Image :"
            type="file"
            className="mb-4"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            {...register("image", { required: !blog })}
          />
          {imagePreview && (
            <div className="relative w-full max-w-full h-auto bg-gray-100 mt-4">
              <img
                src={imagePreview}
                alt="Featured preview"
                className="object-cover w-full h-auto max-h-96 aspect-[16/9] sm:aspect-[21/9]"
              />
            </div>
          )}

          {/* Blog Content */}
          <RTE
            name="content"
            label="Content :"
            className="pt-6"
            control={control}
            defaultValue={getValues("content")}
          />
          <div className=" absolute top-4 right-16 ">
            <button
              type="submit"
              className="btn  btn-sm btn-outline btn-success"
            >
              Publish
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default BlogForm;
