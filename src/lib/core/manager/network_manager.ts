import axios, { AxiosResponse } from "axios";

export default abstract class NetworkManager{
    //Migrate to an .env file
    private baseUrl:string = "http://localhost:3000";
    public subUrl = "";

    init(){
    }

    private setHeader(token:string):Record<string,any>{
        return {
                headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        }
    }

   async postRequest(path:string,params:Record<string,any>,token?:string):Promise<any>{
   try {
    console.log(`Here: ${this.baseUrl}/${this.subUrl}/${path}`)
    const request:AxiosResponse = await axios.post(`${this.baseUrl}/${this.subUrl}/${path}`,params, token!=null? this.setHeader(token):{});
    return request.data;
   } catch (error) {
    return null
   }
    
   }

   async getRequest(path:string,token?:string):Promise<any>{
    try {
        const request:AxiosResponse = await axios.get(`${this.baseUrl}/${this.subUrl}/${path}`, token!=null? this.setHeader(token):{});
        return request.data;
       } catch (error) {
        return null
       }
   }

   async patchRequest(path:string,params:Record<string,any>,token?:string):Promise<any>{
    try {
        const request:AxiosResponse = await axios.patch(`${this.baseUrl}/${this.subUrl}/${path}`,params, token!=null? this.setHeader(token):{});
        return request.data;
       } catch (error) {
        return null
       }
   }

   async putRequest(path:string,params:Record<string,any>,token?:string):Promise<any>{
    try {
        const request:AxiosResponse = await axios.put(`${this.baseUrl}/${this.subUrl}/${path}`,params, token!=null? this.setHeader(token):{});
        return request.data;
       } catch (error) {
        return null
       }
   }

   async deleteRequest(path:string,token?:string):Promise<any>{
    try {
        const request:AxiosResponse = await axios.delete(`${this.baseUrl}/${this.subUrl}/${path}`, token!=null? this.setHeader(token):{});
        return request.data;
       } catch (error) {
        return null
       }
   }
}