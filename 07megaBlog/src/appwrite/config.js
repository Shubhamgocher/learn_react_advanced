import { Client, Databases, Storage, ID, Query } from "appwrite";
import conf from "../conf/conf";

export class dataServices {
  client = new Client();
  database;
  storage;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.database = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, status, content, featuredImage, userId }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Unable to create Post: Error:", error);
    }
  }
  async updatePost(slug, { title, content, status, featuredImage }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Unable to update Post: Error:", error);
    }
  }
  async deletePost(slug){
    try {
        await this.database.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
        )
        return true;
    } catch (error) {
        console.log("Unable to delete Post: Error:", error);
    }

  }
  async getPost(slug){
    try {
        return await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,

        )
    } catch (error) {
        console.log("Unable to load Post :: Error :: ", error);
    }
  }
  async getPosts(queries=[Query.equal("status","active")]){
    try {
        return await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,
        )
    } catch (error) {
        console.log("Unable to create Post: Error:", error);        
    }
  }

  async uploadFile(file){
    try {
        return await this.storage.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file,

        )
    } catch (error) {
        console.log("Unable to create Post: Error:", error);
        
    }
  }
  async deleteFile(fileId){
    try {
        await this.storage.deleteFile(
            conf.appwriteBucketId,
            fileId,
        )
        return true;
    } catch (error) {
        console.log("Unable to create Post: Error:", error);
        return false;
    }
  }
  perviewFile(fileId){
    return this.storage.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )

  }
}
const dataService = new dataServices();
export default dataService;
