import NetworkManager from "./lib/core/manager/network_manager";

export class ApplicationManager extends NetworkManager{
   async init(){
        this.subUrl="global"
        if(localStorage.getItem("token")==null){
          await this.getTemporaryBearerToken();
        }
    }

   async getTemporaryBearerToken(){
      const response = await this.getRequest("guest");
      if(response!=null){
        localStorage.setItem("token",response["token"]);
      }
    }
}