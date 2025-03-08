import { CoreManager } from "../../../core/manager/core_manager";

export default class PanelBaseManager extends CoreManager{
    init(){
        this.checkIsLogged();
        this.setNewTitle("Admin Panel");

    }

    checkIsLogged(){
        const credential:string|null = localStorage.getItem("adminCredential");
        if(credential!=null && credential =="basardimorzbucocukları"){
            return;
        }
        else{
            this.navigate("busted")
        }
    }
}