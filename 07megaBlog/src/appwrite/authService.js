import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class authServices {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account=new Account(this.client);
  }
  async creatUser({email,password,name}){
    try {
      console.log("Hellow Sg");
        const userAccount=await this.account.create(ID.unique(),email,password,name);
        console.log("userAccount",userAccount);
        if(userAccount){
              return this.login({email,password});
        }else{
              return userAccount;
        }
    } catch (error) {
        console.log("Error:",error);
    }

  }
  async login({email,password}){
    try {
        return await this.account.createEmailPasswordSession(email,password);
    } catch (error) {
        console.log("Error:",error);
        
    }
  }
  async getUser(){
    try {
        return await this.account.get();
    } catch (error) {
        throw error;
    }
  }
  async logout(){
    try {
        await this.account.deleteSessions();
        return true;
    } catch (error) {
        throw error;
    }

  }
}
const authService = new authServices();
export default authService;
