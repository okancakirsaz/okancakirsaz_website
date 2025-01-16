import { useState } from "react";
import Fonts from "../constants/fonts";

export default function CustomSpecialButton({
  text,onClick,iconUrl,
}: {
  text:string;
  onClick:Function;
  iconUrl?:string
}) {
    const [isHovered, setIsHovered] =useState(false);

  const style: React.CSSProperties = { 
    fontFamily: Fonts.instance.montserrat,
    borderRadius:"15px",
    maxWidth:"fix-content",
    minWidth:"60px",
    height:"40px",
    backgroundColor:"#f4f4f4",
    border:"none",
    paddingLeft:"13px",
    paddingRight:"13px",
    boxShadow:isHovered?"inset 4px -2px #CA5454":"-4px 2px #CA5454",
    cursor:"pointer",
   };
  return <button onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)} style={style} onClick={()=>onClick()}>
    <span style={{display:iconUrl==null?"visible":"none"}}>{text}</span><img style={{display:iconUrl==null?"none":"visible"}} src={iconUrl}></img>
    </button>;
}
