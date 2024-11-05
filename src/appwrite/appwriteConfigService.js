import Config from "../utils/Config";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(Config.appwrite_URL)
      .setProject(Config.appwritePROJECT_ID);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createBlog({
    title,
    subtitle,
    content,
    featuredImage,
    status,
    userId,
  }) {
    // console.log(title);
    // console.log(content);
    // console.log(featuredImage);
    // console.log(status);
    // console.log(userId);
    try {
      const response = await this.databases.createDocument(
        Config.appwriteDATABASE_ID,
        Config.appwrite_BLOG_COLLECTION_ID,
        ID.unique(),
        {
          title,
          subtitle,
          content,
          featuredImage,
          status,
          userId,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async createUser({ username, userId, userEmail, userImage }) {
    try {
      const response = await this.databases.createDocument(
        Config.appwriteDATABASE_ID,
        Config.appwrite_USER_INFO_COLLECTION_ID,
        ID.unique(),
        { username, userId, userEmail, userImage }
      );
      return response;
    } catch (error) {
      console.error("Error registering user:", error.message);
      throw new Error(error.message);
    }
  }

  async getAuthors() {
    try {
      const result = await this.databases.listDocuments(
        Config.appwriteDATABASE_ID,
        Config.appwrite_USER_INFO_COLLECTION_ID
      );

      return result.documents;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  }

  async getAuthor(DocumentID) {
    try {
      const response = await this.databases.listDocuments(
        Config.appwriteDATABASE_ID,
        Config.appwrite_USER_INFO_COLLECTION_ID,
        [Query.equal("userId", DocumentID)]
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async updateBlog(
    DocumentID,
    { title, subtitle, content, featuredImage, status }
  ) {
    console.log(featuredImage);
    try {
      const response = await this.databases.updateDocument(
        Config.appwriteDATABASE_ID,
        Config.appwrite_BLOG_COLLECTION_ID,
        DocumentID,
        {
          title,
          subtitle,
          content,
          featuredImage,
          status,
        }
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteBlog(DocumentID) {
    try {
      const response = await this.databases.deleteDocument(
        Config.appwriteDATABASE_ID,
        Config.appwrite_BLOG_COLLECTION_ID,
        DocumentID
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getBlog(DocumentID) {
    try {
      const response = await this.databases.getDocument(
        Config.appwriteDATABASE_ID,
        Config.appwrite_BLOG_COLLECTION_ID,
        DocumentID
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getBlogs(queries = [Query.equal("status", "active")]) {
    try {
      const response = await this.databases.listDocuments(
        Config.appwriteDATABASE_ID,
        Config.appwrite_BLOG_COLLECTION_ID,
        queries
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async uploadFile(file) {
    console.log(file);
    try {
      const response = await this.storage.createFile(
        Config.appwriteBUCKET_ID,
        ID.unique(),
        file
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteFile(fileId) {
    try {
      const response = await this.storage.deleteFile(
        Config.appwriteBUCKET_ID,
        fileId
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getFilePreview(fileId) {
    const response = this.storage.getFilePreview(
      Config.appwriteBUCKET_ID,
      fileId
    );
    return response;
  }
}

const appwriteService = new Service();
export default appwriteService;
