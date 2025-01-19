import "./about_me_part.css";

export default function AboutMePart({direction,colorCode,text,src}:{direction:string,colorCode:string,text:string,src:string}){
return (
    <div className="aboutMePart" style={{flexDirection:direction=="ltr"?"row":"row-reverse"}}>
    <img src={src} alt={text} className="aboutMePartImage"/>
    <div className="line" style={{borderColor:colorCode}}></div>
    <div className="aboutMePartText" style={{color:colorCode}}>{text}</div>
</div>
);
}