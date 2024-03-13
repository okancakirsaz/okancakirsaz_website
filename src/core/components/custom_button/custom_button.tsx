import "./custom_button_style.css";

export const CustomButton = ({text,onPressed,id}:{text:string,onPressed:any,id:string}) => (
    <input type="button" value={text} className='customButton' onClick={onPressed} id={id}/>
);