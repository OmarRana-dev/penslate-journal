import Config from "../utils/Config";
import { Client, Account, ID, Databases } from "appwrite";
import appwriteService from "./appwriteConfigService";

export class AuthService {
  client = new Client();
  account;
  databases;

  constructor() {
    this.client
      .setEndpoint(Config.appwrite_URL)
      .setProject(Config.appwritePROJECT_ID);
    this.account = new Account(this.client);
    this.databases = new Databases(this.client);
  }

  async createAccount({ email, password, name, image }) {
    try {
      const response = await this.account.create(
        ID.unique(), // Generate a unique ID for the user
        email,
        password,
        name
      );
      if (response) {
        appwriteService.createUser({
          username: name,
          userId: response.$id,
          userEmail: email,
          userImage: image,
        });
      }
      console.log("User registered successfully:", response);
      return response;
    } catch (error) {
      console.error("Error registering user:", error.message);
      throw new Error(error.message);
    }
  }

  async login({ email, password }) {
    try {
      const response = await this.account.createEmailPasswordSession(
        email,
        password
      );
      return response;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      // Logged in
      return user;
    } catch (error) {
      console.log("No active session:", error.message);
      return false; // Return null if no user is logged in
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      throw new Error(err.message);
    }
  }
}

const authService = new AuthService();
export default authService;
