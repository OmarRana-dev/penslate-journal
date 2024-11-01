const appwriteConfig = {
  appwrite_URL: String(import.meta.env.VITE_APPWRITE_URL),
  appwritePROJECT_ID: String(
    import.meta.env.VITE_APPWRITE_PROJECT_ID
  ),
  appwriteDATABASE_ID: String(
    import.meta.env.VITE_APPWRITE_DATABASE_ID
  ),
  appwrite_BLOG_COLLECTION_ID: String(
    import.meta.env.VITE_APPWRITE_BLOGS_COLLECTION_ID
  ),
  appwrite_USER_INFO_COLLECTION_ID: String(
    import.meta.env.VITE_APPWRITE_USER_INFO_COLLECTION_ID
  ),
  appwriteBUCKET_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default appwriteConfig;
