import { useEffect } from "react";
import CustomButton from "../../core/components/custom_button/custom_button";
import CustomTextField from "../../core/components/custom_text_field";
import ModelGeneratorManager from "./model_generator_manager";
import "./model_generator_view.css";

export default function ModelGeneratorView(){
    const manager:ModelGeneratorManager = new ModelGeneratorManager();

    useEffect(()=>{
        manager.init();
    });

    return (<>
    <div className="screenSizeError"><div>Sorry, this page only available on pc devices.</div></div>
    <section className="mainSectionOfGenerator">
        <div className="modelGeneratorInput">
        <div className="inputTopRow">
            <CustomTextField label="Model Name" id="modelNameInput"></CustomTextField>
             <div className="clearInput" onClick={()=>manager.clearInputs()}>Clear</div>
        </div>
        <div className="inputMiddleRow">
        <div id="rowCounter">1-</div>
        <textarea name="modelGeneratorTextArea" id="modelGeneratorTextArea" autoFocus={true} onInput={()=>manager.updateRowCounter()}></textarea>
        </div>
        <div className="inputBottomRow">
        <CustomButton text="Generate" onClick={()=>manager.mapValue()}></CustomButton>
        </div>
        </div>
        <div className="modelGeneratorOutput">
        <code className="outputArea">
         
         </code>
         <CustomButton text="Copy" onClick={()=>manager.copyOutput()}></CustomButton>  
        </div>
    </section>
    </>)
}


