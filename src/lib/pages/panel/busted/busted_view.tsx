import { useEffect } from "react";
import BustedManager from "./busted_manager"
import "./busted_view.css"


export default function BustedView(){
    const manager:BustedManager = new BustedManager();
    useEffect(()=>{
    manager.service.init();
    manager.initPage();
    })
    return (
    <>
    <section className="bustedMainSect">
    <iframe className="bustedFrame" width="1228" height="691" src="https://www.youtube.com/embed/aPpH-fC23pQ" title="YOU'RE GONNA BE BUSTED!" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
    <div className="credentialData" id="locationData"></div>
    </section>
    </>
)
}


