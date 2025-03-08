import NetworkManager from "../../core/manager/network_manager";

export class PanelLoginService extends NetworkManager{
    
    override init(){
        this.subUrl = "global"
    }
    async login(password:string):Promise<boolean>{
     const response =  await this.postRequest("admin-login",{"pass":password},localStorage.getItem("token")!);
     if(response!=null){
        return response;
     }
     else{
        return false;
     }
    }
}