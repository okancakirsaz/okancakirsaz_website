import { CoreManager } from "../../../core/manager/core_manager";

export default class BustedManager extends CoreManager{

  async getUserIpAndLocation():Promise<any>{
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    document.getElementById("locationData")!.innerHTML =`Your IP address is: ${data.ip}<br/><br/>Your current location is: ${data.city}/${data.country_name}<br/><br/>Lat: ${data.latitude}<br/><br/>Long: ${data.longitude}<br/><br/>Organization: ${data.org}`;

   }
   
}