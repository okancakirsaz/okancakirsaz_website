import IntelligentPersonDto from "../../../core/dto/intelligent_person_dto";
import NetworkManager from "../../../core/manager/network_manager";

export class BustedService extends NetworkManager{
    
    override init(){
        this.subUrl = "global"
    }
    async saveHackerCredentials(data:IntelligentPersonDto):Promise<Record<string,any>|null>{
     const response =  await this.postRequest("save-hacker-credentials",data.toJson(),localStorage.getItem("token")!);
     if(response!=null){
        return response;
     }
     else{
        return null;
     }
    }
}