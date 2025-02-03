import "./custom_button.css";

export default function CustomButton({
  text,onClick
}: {
  text:string;
  onClick:Function;
}) {
  return <button className="customButton" onClick={()=>onClick()}>
    {text}
    </button>;
}
