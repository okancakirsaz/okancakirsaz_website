import { CoreManager } from "../../core/manager/core_manager";
import { PanelLoginService } from "./panel_login_service";

export default class PanelLoginManager extends CoreManager{
private service = new PanelLoginService();
private textInput?:HTMLInputElement;

init(){
    this.setNewTitle("Wait where did you find this page?");
    this.service.init();
    this.textInput = (document.getElementById("adminLoginTextField") as HTMLInputElement)
    //TODO: Don't forget unfollow by robots
}

async login(){
   const response:boolean = await this.service.login(this.textInput!.value);
   if(response){
    localStorage.setItem("adminCredential","basardimorzbucocukları");
    this.navigate("admin-panel");
   }
   else{
    alert("Upss! Looks like someone trying to be a hacker.")
   }
}
}