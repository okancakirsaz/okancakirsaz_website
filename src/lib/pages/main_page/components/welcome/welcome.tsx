import CustomSpecialButton from "../../../../core/components/custom_special_button/custom_special_button";
import "./welcome.css";

export default function Welcome(){

    return (<>
        <div className="welcomeSheet">
            <img className="welcomeImg" src="/bitmoji/welcome.svg" alt="welcome"/>
            <span className="welcomeTxt"
            >Welcome to my<br></br>website!
            </span>
            <div style={{height:"140px"}}></div>
            <div className="buttonsRow">
               <span id="modelGeneratorBtn"><CustomSpecialButton text="Model Generator" onClick={()=>console.log("Model Generator")}></CustomSpecialButton></span>
               <CustomSpecialButton text="My Works" onClick={()=>console.log("My Works")}></CustomSpecialButton>
               <CustomSpecialButton text="Current Works" onClick={()=>console.log("Current Works")}></CustomSpecialButton>
               <CustomSpecialButton iconUrl="/icons/instagram.svg" text="instagram" onClick={()=>console.log("instagram")}></CustomSpecialButton>
               <CustomSpecialButton iconUrl="/icons/github.svg" text="instagram" onClick={()=>console.log("github")}></CustomSpecialButton>
            </div>
        </div>
        </>);
}