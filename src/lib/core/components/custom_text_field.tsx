import { TextField } from "@mui/material";

export default function CustomTextField({
  label,
  defaultValue,
  id,
  type,
  width,
}: {
  label: string;
  defaultValue?:string;
  id: string;
  type?:string
  width?:string
}) {
  return (
    <TextField
      type={type??"normal"}
      variant="outlined"
      defaultValue={defaultValue}
      label={label}
      className="textField"
      id={id}
      sx={{
        ".MuiInputLabel-root":{
            fontFamily:"Montserrat",
            fontSize:"13px",
            color:"black !important",
        },
       
        ".MuiOutlinedInput-root": {
          input:{
            backgroundColor: "#e6e6e6",
            fontFamily:"Montserrat",
            fontSize:"13px",
            width: width,
          },
          fieldSet: {
            borderTop: "none",
            borderRight: "none",
            borderLeft: "none",
            borderBottom: "2px solid gray",
            borderRadius: "5px 5px 0px 0px",
          },
          "&.Mui-focused fieldset":{
            border: "2px solid gray",
            borderRadius:"5px",
        }
        },
        
      }}
    ></TextField>
  );
}
