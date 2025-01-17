import "./custom_special_button.css";

export default function CustomSpecialButton({
  text,onClick,iconUrl
}: {
  text:string;
  onClick:Function;
  iconUrl?:string,
}) {
  return <button className="customSpecialButton" onClick={()=>onClick()}>
    <span style={{display:iconUrl==null?"visible":"none"}}>{text}</span><img style={{display:iconUrl==null?"none":"visible"}} src={iconUrl} alt={text}></img>
    </button>;
}
