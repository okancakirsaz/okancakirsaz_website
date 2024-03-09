
export default function LinkBarLink({icon,route}:{icon:string,route:string}){
    return (
      <a href={route} target="_blank" ><img src={icon} alt="link" className="linkBarLink" /></a>
    );
  };