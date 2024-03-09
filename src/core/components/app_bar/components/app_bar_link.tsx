
export default function AppBarLink({text,route}:{text:string,route:string}){
  return (
    <a href={route} className="appBarLink">{text}</a>
  );
};