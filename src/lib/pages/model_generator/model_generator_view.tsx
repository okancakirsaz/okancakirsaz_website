import CustomButton from "../../core/components/custom_button/custom_button";
import CustomTextField from "../../core/components/custom_text_field";
import "./model_generator_view.css";

export default function ModelGeneratorView(){
    return (<>
    <div className="screenSizeError"><div>Sorry, this page only available on pc devices.</div></div>
    <section className="mainSectionOfGenerator">
        <div className="modelGeneratorInput">
        <div className="inputTopRow">
            <CustomTextField label="Model Name" id="modelNameInput"></CustomTextField>
             <div className="clearInput">Clear</div>
        </div>
        <textarea
        
        name="modelGeneratorTextArea" id="modelGeneratorTextArea" autoFocus={true}></textarea>
        <div className="inputBottomRow">
        <CustomButton text="Generate" onClick={()=>{}}></CustomButton>
        </div>
        </div>
        <div className="modelGeneratorOutput"></div>
    </section>
    </>)
}