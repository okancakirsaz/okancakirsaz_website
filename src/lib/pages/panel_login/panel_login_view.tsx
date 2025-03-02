import "./panel_login_view.css";
import PanelLoginManager from "./panel_login_manager";
import { useEffect } from "react";
import CustomTextField from '../../core/components/custom_text_field';
import CustomButton from "../../core/components/custom_button/custom_button";

export default function PanelLoginView(){
    const manager:PanelLoginManager = new PanelLoginManager();

    useEffect(()=>{
        manager.init();
    })
    return (<>
    <section className="mainSectionOfLogin">
    <img src="/bitmoji/suspicious.svg" className="suspLookImg"/>
    <div className="suspText">Are you really me?</div>
    <CustomTextField label="Prove it" id="adminLoginTextField" type="password" width="320px" />
    <CustomButton text="Submit" onClick={()=>{}} />
    </section>
    </>)
}


