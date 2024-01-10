import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.account = new Account(this.client);
  }

  createAccount = async ({ email, password, name }) => {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  };

  login = async ({ email, password }) => {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  };

  getCurrentUser = async () => {
    try {
      return await this.account.get();
    } catch (error) {
      throw error;
    }
    return null;
  };

  logOut = async () => {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  };
}

const authService = new AuthService();

export default AuthService;
