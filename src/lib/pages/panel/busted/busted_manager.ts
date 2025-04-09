import IntelligentPersonDto from "../../../core/dto/intelligent_person_dto";
import { CoreManager } from "../../../core/manager/core_manager";
import { BustedService } from "./busted_service";

export default class BustedManager extends CoreManager{

  service = new BustedService();
  userCredentials?:IntelligentPersonDto;

  async initPage():Promise<any>{
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    this.userCredentials = IntelligentPersonDto.fromJson({"ipAddress":data.ip,"location":`${data.city}/${data.country_name}`,"lat":data.latitude,"long":data.longitude,"org":data.org,"date": new Date().toLocaleString()});
    this.fetchUI();
    await this.fetchCredentialsToDb();
   }

  private fetchUI(){
    document.getElementById("locationData")!.innerHTML =`Your IP address is: ${this.userCredentials?.ipAddress}<br/><br/>Your current location is: ${this.userCredentials?.location}<br/><br/>Lat: ${this.userCredentials?.lat}<br/><br/>Long: ${this.userCredentials?.long}<br/><br/>Organization: ${this.userCredentials?.org}`;
  }

  private async fetchCredentialsToDb():Promise<any>{
    if(this.userCredentials!=undefined){
      await this.service.saveHackerCredentials(this.userCredentials);
    }
  }
   
}