import PanelBaseManager from "./panel_base_manager";
import "./panel_base_view.css";
import { useEffect } from "react";

export default function PanelBaseView(){
    const manager:PanelBaseManager = new PanelBaseManager();

    useEffect(()=>{
        manager.init();
    })
    return (<>
    <section className="mainSectionOfPanel">
        ADMIN PANEL
    </section>
    </>)
}


