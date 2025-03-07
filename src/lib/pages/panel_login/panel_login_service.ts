import NetworkManager from "../../core/manager/network_manager";

export class PanelLoginService extends NetworkManager{
    
    override init(){
        this.subUrl = "global"
    }
    async login(password:string){
     const test =  await this.postRequest("admin-login",{"pass":password});
     console.log(test);
    }
}