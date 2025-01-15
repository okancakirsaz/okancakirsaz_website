
export default function MainPageView(){
const welcomeSheetDesktop:React.CSSProperties = {
backgroundColor: "#282729",//Dark grey
fontFamily:"Passion One",
color:"white",
width: "40%",
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
</div>
</>
);
}