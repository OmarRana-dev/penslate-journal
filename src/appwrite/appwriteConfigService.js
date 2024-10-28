import appwriteConfig from "../utils/appwriteConfig";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(appwriteConfig.appwrite_URL)
      .setProject(appwriteConfig.appwritePROJECT_ID);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({
    title,
    content,
    featuredImage,
    status,
    userId,
  }) {
    console.log(title);
    console.log(content);
    console.log(featuredImage);
    console.log(status);
    console.log(userId);
    try {
      const response = await this.databases.createDocument(
        appwriteConfig.appwriteDATABASE_ID,
        appwriteConfig.appwriteCOLLECTION_ID,
        ID.unique(),
        {
          title,
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

  async updatePost(
    DocumentID,
    { title, content, featuredImage, status }
  ) {
    try {
      const response = await this.databases.updateDocument(
        appwriteConfig.appwriteDATABASE_ID,
        appwriteConfig.appwriteCOLLECTION_ID,
        DocumentID,
        {
          title,
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

  async deletePost(DocumentID) {
    try {
      const response = await this.databases.deleteDocument(
        appwriteConfig.appwriteDATABASE_ID,
        appwriteConfig.appwriteCOLLECTION_ID,
        DocumentID
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPost(DocumentID) {
    try {
      const response = await this.databases.getDocument(
        appwriteConfig.appwriteDATABASE_ID,
        appwriteConfig.appwriteCOLLECTION_ID,
        DocumentID
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      const response = await this.databases.listDocuments(
        appwriteConfig.appwriteDATABASE_ID,
        appwriteConfig.appwriteCOLLECTION_ID,
        queries
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async uploadFile(file) {
    try {
      const response = await this.storage.createFile(
        appwriteConfig.appwriteBUCKET_ID,
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
        appwriteConfig.appwriteBUCKET_ID,
        fileId
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getFilePreview(fileId) {
    const response = this.storage.getFilePreview(
      appwriteConfig.appwriteBUCKET_ID,
      fileId
    );
    return response;
  }
}

const appwriteService = new Service();
export default appwriteService;
