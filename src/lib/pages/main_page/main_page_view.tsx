import CustomSpecialButton from "../../core/components/custom_special_button";
import Fonts from "../../core/constants/fonts";

export default function MainPageView(){
const welcomeSheetDesktop:React.CSSProperties = {
backgroundColor: "#282729",//Dark grey
fontFamily: Fonts.instance.passionOne,
color:"white",
width: "47%",
height:"220px",
borderRadius:"30px",
margin:"40px"
}
 
return (
<>
<div style={welcomeSheetDesktop}>
    <img style={{minWidth:"150px",maxWidth:"220px",position:"absolute",top:"1px",left:"1px"}} src="/bitmoji/welcome.svg" alt="welcome"/>
    <span style={{
        float:"left",
        marginLeft:"220px",
        marginTop:"30px",
        fontSize:"30px",
    }}
    >Welcome to my<br></br>website!
    </span>
    <div style={{height:"140px"}}></div>
    <div style={{display:"flex",justifyContent:"space-evenly"}} >
       <CustomSpecialButton text="Model Generator" onClick={()=>console.log("Model Generator")}></CustomSpecialButton>
       <CustomSpecialButton text="My Works" onClick={()=>console.log("My Works")}></CustomSpecialButton>
       <CustomSpecialButton text="Current Works" onClick={()=>console.log("Current Works")}></CustomSpecialButton>
       <CustomSpecialButton iconUrl="/icons/instagram.svg" text="instagram" onClick={()=>console.log("instagram")}></CustomSpecialButton>
       <CustomSpecialButton iconUrl="/icons/github.svg" text="instagram" onClick={()=>console.log("github")}></CustomSpecialButton>
    </div>
</div>
</>
);
}